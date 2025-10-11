<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'
import { type BookInfo, getDetailInfo, logBaseInfo } from '@/rpc.ts'
import { fetchImages } from '@/utils.ts'
const data = ref<BookInfo[]>([])
const loadingContext = ref("");

onMounted(async () => {
  await logBaseInfo()
  data.value = await getDetailInfo(loadingContext)
  await fetchImages(data)
  console.log(data.value)
})

function convertDateToChineseType(date: Date) {
  const dateStr = date.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'numeric',
    day: 'numeric',
  })
  const [year, month, day] = dateStr.split('/')
  return `${year}-${month}-${day}`
}

const mostRecentExpireDate = computed(() => {
  const notReturnedBooks = data.value.filter((book) => !book.returned)
  if (notReturnedBooks.length === 0) {
    return null
  }
  let count = 1
  return {
    date: notReturnedBooks.reduce((latest, book) => {
      if (book.returnDate === latest) {
        count++
      }
      if (book.returnDate < latest) {
        count = 1
        return book.returnDate
      }
      return latest
    }, notReturnedBooks[0].returnDate),
    count: count,
  }
})

const daysDiff = computed(() => {
  const date = mostRecentExpireDate.value?.date
  if (!date) return 10000
  return Math.ceil((date.getTime() - new Date().getTime()) / (1000 * 60 * 60 * 24))
})
</script>

<template>
  <div class="app-container">
    <t-notice-bar
      visible
      v-if="daysDiff !== 10000"
      :theme="daysDiff < 5 ? 'warning' : 'info'"
      :content="
        daysDiff >= 0
          ? `您有 ${mostRecentExpireDate?.count} 本书将于 ${daysDiff} 天后到期，注意按时归还`
          : `您有 ${mostRecentExpireDate?.count} 本书已于 ${-daysDiff} 天前到期，请及时归还`
      "
      style="position: fixed; width: 100%; z-index: 3"
    />
    <div style="position: relative; width: 100%" :style="daysDiff !== 10000 ? 'padding-top: 70px;' : 'padding-top: 20px'">
      <div v-if="loadingContext.length > 0" style="width: 100%; display: flex; justify-content: center;">
        <div v-if="loadingContext === 'none'">暂无借阅信息</div>
        <t-loading v-else size="26px" :text="loadingContext" />
      </div>

      <div v-if="data.length > 0" class="vertical-line"></div>
      <div v-for="(book, idx) in data" :key="idx" class="timeline-item">
        <div class="timeline-dot"></div>
        <!-- 蓝点 -->
        <div v-if="idx === 0 || convertDateToChineseType(data[idx-1].borrowDate) !== convertDateToChineseType(data[idx].borrowDate)" class="timeline-date">{{ convertDateToChineseType(book.borrowDate) }}</div>
        <!-- 日期 -->
        <div class="card">
          <div style="display: flex; margin-bottom: 10px; align-items: center">
            <div class="book-info">
              <div class="book-title">{{ book.title }}</div>
              <div class="book-author">{{ book.author }}</div>
              <div class="book-detail">
                <div>索书号</div>
                {{ book.barcode }}
              </div>
              <div class="book-detail">
                <div>书架号</div>
                {{ book.callNumber }}
              </div>
              <div class="book-detail">
                <div>馆藏地点</div>
                {{ book.location }}
              </div>
            </div>
            <div
              style="
                height: 100%;
                min-width: 120px;
                display: flex;
                flex: 1;
                justify-content: center;
              "
            >
              <img
                v-if="book.image && book.image.length > 0"
                :src="book.image"
                style="object-fit: cover; height: 120px"
              />
              <div
                v-else
                style="
                  height: 120px;
                  width: 120px;
                  display: flex;
                  justify-content: center;
                  align-items: center;
                "
              >
                <div>暂<br />无<br />封<br />面</div>
              </div>
            </div>
          </div>
          <div class="card-status">
            <t-steps :current="book.returned ? 1 : 0">
              <t-step-item title="借阅中" :status="'default'">
                <template #icon>
                  <div
                    style="
                      background: #0052d9;
                      border-radius: 9999px;
                      display: flex;
                      justify-content: center;
                      width: 24px;
                      height: 24px;
                      align-items: center;
                    "
                  >
                    <svg
                      style="width: 16px; height: 18px; color: white"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="afwbook-open">
                        <g id="afwfill1">
                          <path
                            d="M2 3H9C10.6569 3 12 4.34315 12 6V13.5 21H11C11 21 8 20 2 20V3ZM22 3H15C13.3431 3 12 4.34315 12 6V13.5 21H13C13 21 16 20 22 20V3Z"
                            id="fill1"
                            fill="transparent"
                          />
                        </g>
                        <path
                          id="stroke1"
                          d="M12 21V6M12 21H11C11 21 8 20 2 20V3H9C10.6569 3 12 4.34315 12 6M12 21H13C13 21 16 20 22 20V3H15C13.3431 3 12 4.34315 12 6"
                          stroke-width="2"
                          stroke="currentColor"
                        />
                        <path
                          id="stroke2"
                          d="M18 9L16 9M18 12L16 12"
                          stroke-linecap="square"
                          stroke-width="2"
                          stroke="currentColor"
                        />
                      </g>
                    </svg>
                  </div>
                </template>
              </t-step-item>
              <t-step-item title="已归还">
                <template #icon>
                  <div
                    style="
                      border-radius: 9999px;
                      display: flex;
                      justify-content: center;
                      width: 24px;
                      height: 24px;
                      align-items: center;
                    "
                    :style="book.returned ? 'background: #0052d9;' : 'background: #f3f3f3;'"
                  >
                    <svg
                      style="width: 16px; height: 18px"
                      :style="book.returned ? 'color: #fff;' : 'color: #001a57'"
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <g id="afzbook">
                        <path
                          id="fill1"
                          d="M20.5 2.5H6.5C4.84315 2.5 3.5 3.84315 3.5 5.5V18.5C3.5 16.8431 4.84315 15.5 6.5 15.5H20.5V2.5Z"
                          fill="transparent"
                        />
                        <path
                          id="stroke1"
                          d="M20.5 21.5H6.5C4.84315 21.5 3.5 20.1569 3.5 18.5C3.5 16.8431 4.84315 15.5 6.5 15.5H20.5V21.5ZM20.5 21.5V2.5H6.5C4.84315 2.5 3.5 3.84315 3.5 5.5V17.5"
                          stroke-linecap="square"
                          stroke-width="2"
                          stroke="currentColor"
                        />
                        <path
                          id="stroke2"
                          d="M11.5 6.5H16.5"
                          stroke-linecap="square"
                          stroke-width="2"
                          stroke="currentColor"
                        />
                      </g>
                    </svg>
                  </div>
                </template>
              </t-step-item>
            </t-steps>
            <div v-if="!book.returned" class="date-group">
              <span style="color: black">应还时间</span>
              <span style="color: #8a8d9c; margin-left: 12px">{{
                convertDateToChineseType(book.returnDate)
              }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.app-container {
  width: 100%;
  min-height: 100vh;
  background-color: #f4f5f9;
  overflow-x: hidden;
  overflow-y: hidden;
}
.vertical-line {
  position: absolute;
  top: 0;
  left: 20px;
  width: 6px;
  height: max(100vh, calc(100% + 40px));
  background-color: #3a89ff;
  z-index: 1;
}
.timeline-item {
  position: relative;
  margin-bottom: 17px;
  padding: 0 0 0 42px;
  width: calc(100% - 42px);
}
.timeline-dot {
  position: absolute;
  left: 11px;
  top: 2px;
  width: 16px;
  height: 16px;
  background: #fff;
  border: 4px solid #3a89ff;
  border-radius: 50%;
  z-index: 2;
}
.timeline-date {
  font-size: 18px;
  color: #333;
  margin-bottom: 10px;
  margin-left: 10px;
}
.card {
  width: calc(100% - 78px);
  background: #fff;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(60, 120, 200, 0.08);
  padding: 18px 18px 12px 18px;
  margin-left: 10px;
}
.book-title {
  display: flex;
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 6px;
  color: #222;
  /* flex: 1; */
}
.book-author {
  position: relative;
  font-size: 14px;
  color: #888;
  margin-bottom: 6px;
}

.book-detail {
  display: flex;
  :nth-child(1) {
    color: black;
    min-width: 70px;
  }
}
.book-info {
  font-size: 13px;
  color: #666;
}
.card-status {
  background: #ecf4ff;
  border-radius: 10px;
  padding: 10px 14px;
  margin-top: 8px;
}

.date-group {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: left;
  font-size: 14px;
  color: black;
}
</style>
