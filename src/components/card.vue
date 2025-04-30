<script setup>
import {log} from "@/logger";
import {ref} from "vue";

const props = defineProps({
  data: Array
});
const data = ref(props.data);
log(data.value)
const infos = ref({
  '条形码': data.value[0],
  '索书号': data.value[3],
  '馆藏地点': data.value[4]
})
</script>

<template>
  <div class="card">
    <div class="upper-info">
      <div class="title">{{ data[1] }}</div>
      <div class="author"> {{ data[2] }}</div>
      <div class="info" v-for="(key,value) in infos">
        <p class="info-label">{{ value }}</p>
        <p class="info-value">{{ key }}</p>
      </div>
    </div>
    <div class="time">
      <div class="left-info">
        <div class="time-info">
          <p class="label">借阅时间</p>
          <p class="time-info-data">{{ data[6] }}</p>
        </div>
        <div class="time-info">
          <p class="label">应还时间</p>
          <p class="time-info-data">{{ data[7] }}</p>
        </div>
      </div>
      <div class="button-div">
        <t-button class="button" style="display: none;">续借</t-button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.upper-info {
  padding: 10px;
}

.title {
  font-size: large;
  font-weight: bold;
}

.author {
  color: #b4b3bf;
  margin: 10px 0;
}

.info {
  margin: 5px 0;
}

.info-label {
  display: inline-block;
  width: 25%;
  margin: 0;
}

.info-value {
  color: #8a8d9c;
  display: inline;
}

.card {
  background-color: #fff;
  border-radius: 5px;
  padding: 15px;
  margin: 0 0 15px 0;
  width: calc(100% - 30px);
}

.time {
  width: 100%;
  border-radius: 10px;
  background-color: #f8f8f8;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
}

.left-info {
  width: 70%;
  margin-right: 0;
}

.time-info {
  margin: 0 0 0 20px;
}

.time-info-data {
  color: #8a8d9c;
  display: inline;
}

.label {
  font-size: 15px;
  margin: 5px 0;
  display: inline-block;
  width: 45%;
}

.button-div {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 30%;
}

.button {
  display: block;
}

:root[theme-mode="dark"] .card {
  background-color: var(--td-gray-color-12);
  color: #fff;
}

:root[theme-mode="dark"] .time {
  background-color: var(--td-gray-color-10);
}

</style>