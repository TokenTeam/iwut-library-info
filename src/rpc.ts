import NativeRPC from '@token-team/native-rpc-h5'
import type { Ref } from 'vue'

type AppInfo = {
  appId: string
  appName: string
  appVersion: 1
  systemVersion: 1
}

export async function logBaseInfo() {
  const res = await NativeRPC.call<AppInfo>('app.info')
  console.log(res.appVersion)
}

export type BookInfo = {
  isbn: string // isbn
  title: string // 书名
  author: string // 作者
  barcode: string // 索书号
  callNumber: string // 书架号
  location: string // 地点
  returned: boolean // 是否已归还
  returnDate: Date // 返还时间
  image: string // 图片链接
  borrowDate: Date // 借阅时间
}

type OriginBookItem = {
  operation: '借书' | '还书' // 操作
  barcode: string // 索书号
  title: string // 书名
  isbn: string // isbn
  author: string // 作者
  callNo: string // 书架号
  location: string // 地点
  docType: string // 文献类型
  date: string // 日期
}
// export type BookInfoWithDate = {
//   date: string
//   book: BookInfo
// }

function parseMainPageTable(html: string): Array<{ barcode: string; returnDate: string }> {
  const parser = new DOMParser()
  const doc = parser.parseFromString(html, 'text/html')
  const table = doc.getElementById('contentTable') as HTMLTableElement
  const rows = Array.from(table.querySelectorAll('tr')).slice(1) // 跳过表头
  return rows.map((row) => {
    const cells = row.querySelectorAll('td')
    return {
      barcode: cells[0]?.textContent?.trim() ?? '',
      returnDate: cells[7]?.textContent?.trim() ?? '',
    }
  })
}

function parseDetailTable(html: string): Array<OriginBookItem> {
  const parser = new DOMParser()
  const doc = parser.parseFromString(html, 'text/html')
  const table = doc.getElementById('contentTable') as HTMLTableElement
  const rows = Array.from(table.querySelectorAll('tr')).slice(1) // 跳过表头

  return rows.map((row) => {
    const cells = row.querySelectorAll('td')
    return {
      operation: cells[0]?.textContent?.trim() ?? '',
      barcode: cells[1]?.textContent?.trim() ?? '',
      title: cells[2]?.textContent?.trim() ?? '',
      isbn: cells[3]?.textContent?.trim() ?? '',
      author: cells[4]?.textContent?.trim() ?? '',
      callNo: cells[5]?.textContent?.trim() ?? '',
      location: cells[6]?.textContent?.trim() ?? '',
      docType: cells[7]?.textContent?.trim() ?? '',
      date: cells[8]?.textContent?.trim() ?? '',
    } as OriginBookItem
  })
}

async function toBookInfoArrayType(originData: Array<OriginBookItem>): Promise<Array<BookInfo>> {
  const result: Array<BookInfo> = []
  for (const item of originData.reverse()) {
    if (item.operation === '借书') {
      result.push({
        isbn: item.isbn,
        title: item.title,
        author: item.author,
        barcode: item.barcode,
        callNumber: item.callNo,
        location: item.location,
        returned: false,
        returnDate: new Date(),
        image: '',
        borrowDate: new Date(item.date),
      } as BookInfo)
    } else {
      const book = result.find((b) => b.barcode === item.barcode && !b.returned)
      if (book) {
        book.returned = true
        book.returnDate = new Date(item.date)
      }
    }
  }
  return result
}

export async function getDetailInfo(loadingInfo: Ref<string>): Promise<Array<BookInfo>> {
  loadingInfo.value = "登录中"
  console.log("登录中")
  const { ul, pl } = await NativeRPC.call<{ ul: string; pl: string }>('spider.getulpl')
  console.log('part1 finished')
  const { lib_home: libraryMainPage } = await NativeRPC.call<{ lib_home: string }>('spider.run', {
    spider: 'library_login_home',
    newContext: false,
    params: {
      ul: ul,
      pl: pl,
      redirect_url: encodeURIComponent('http://202.114.89.11/opac/special/toOpac'),
    },
  })
  loadingInfo.value = '拉取信息中';
  console.log('拉取信息中')
  const { lib_detail: libraryDetailInfo } = await NativeRPC.call<{ lib_detail: string }>(
    'spider.run',
    {
      spider: 'library_get_detail',
      newContext: false,
    },
  )
  const originBookData = parseDetailTable(libraryDetailInfo)
  const bookDataArray = await toBookInfoArrayType(originBookData)
  const needRentBooks = parseMainPageTable(libraryMainPage)
  for (const book of needRentBooks) {
    for (const bk of bookDataArray) {
      if (bk.barcode === book.barcode && !bk.returned) {
        bk.returnDate = new Date(book.returnDate)
      }
    }
  }
  console.log('finish')
  if(bookDataArray.length === 0) {
    loadingInfo.value = "暂无借阅记录"
  }else {
    loadingInfo.value = ""
  }
  return bookDataArray.reverse()
}
