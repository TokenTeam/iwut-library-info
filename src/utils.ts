import type { BookInfo } from '@/rpc.ts'
import type { Ref } from 'vue'

async function fetchImageByISBN(isbn: string): Promise<string> {
  const data = await fetch('https://lib-backend.iwut-api.heavensdoor.cn/get-cover/?isbn=' + isbn)
  console.log(data)
  if (!data.ok) return ''
  return ((await data.json()) as { cover: string }).cover.slice(1, -1)
}

export async function fetchImages(books: Ref<Array<BookInfo>>) {
  await Promise.allSettled(
    books.value.map(async (book) => {
      book.image = await fetchImageByISBN(book.isbn)
    }),
  )
}
