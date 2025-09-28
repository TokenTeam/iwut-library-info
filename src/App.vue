<script setup lang="ts">
import { ref } from 'vue'
import { data } from '@/data.ts'
import { classifyBooksByDate, getDateList, getBooksByDate } from '@/bookDataClassifier.ts'

const timelineData = ref(data)
const isWarning = ref(true)
</script>

<template>
  <div class="app-container">
    <t-notice-bar
      visible
      :theme="isWarning ? 'warning' : 'info'"
      :content="'您有 2 本书将于 30 天后到期，请及时归还'"
      style="position: fixed; width: 100%; z-index: 3"
    />
    <div style="position: relative; padding-top: 70px; width: 100%">
      <div class="vertical-line"></div>
      <div v-for="(item, idx) in timelineData" :key="idx" class="timeline-item">
        <div class="timeline-dot"></div>
        <!-- 蓝点 -->
        <div class="timeline-date">{{ item.date }}</div>
        <!-- 日期 -->
        <div class="card">
          <div style="display: flex; margin-bottom: 10px">
            <div class="book-info">
              <div class="book-title">{{ item.book.title }}</div>
              <div class="book-author">{{ item.book.author }}</div>
              <div class="book-detail">
                <div>条形码</div>
                {{ item.book.barcode }}
              </div>
              <div class="book-detail">
                <div>索书号</div>
                {{ item.book.callNumber }}
              </div>
              <div class="book-detail">
                <div>馆藏地点</div>
                {{ item.book.location }}
              </div>
            </div>
            <div style="height: 100%; display: flex; flex: 1; justify-content: center">
              <img
                v-if="item.book.image"
                :src="item.book.image"
                style="object-fit: cover; height: 120px"
              />
            </div>
          </div>
          <div class="card-status">
            <t-steps :current="0">
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
                      background: #f3f3f3;
                      border-radius: 9999px;
                      display: flex;
                      justify-content: center;
                      width: 24px;
                      height: 24px;
                      align-items: center;
                    "
                  >
                    <svg
                      style="width: 16px; height: 18px; color: #001a57"
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
            <div class="date-group">
              <span style="color: black">应还时间</span>
              <span style="color: #8a8d9c; margin-left: 12px">{{ item.book.returnDate }}</span>
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
  height: 100vh;
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
