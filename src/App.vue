<template>
  <div>
    <div class="nav">
      <p>图书借阅信息</p>
    </div>
    <t-pull-down-refresh v-model="refreshing" :loading-bar-height="66" :loading-texts="['下拉刷新', '松开刷新', '正在刷新', '刷新完成']"
      @refresh="handleRefresh">

      <div class="main">
        <t-loading class="loading" v-if="loading" size="26px" :text="text" />
        <card v-for="t in data[1]" :data="t" />
      </div>
    </t-pull-down-refresh>
  </div>
</template>
<script setup>
import {ref} from 'vue';
import Card from "@/components/card.vue";
import {getLibInfo} from "@/getInfo.js";
import {onMounted} from "vue";

const loading = ref(true);
const refreshing = ref(false);
const data = ref([]);
const text = ref("数据加载中...");
function handleRefresh() {
  refreshing.value = true;
  getLibInfo().then((res) => {
    data.value = res;
    refreshing.value = false;
  }).catch(() => {
    refreshing.value = false;
  });
}
onMounted(() => {
  setTimeout(() =>text.value = "数据加载中... 网络不畅，还需一点时间", 2000);
  getLibInfo().then((res) => {
    data.value = res;
    loading.value = false;
  });
});



// // 接收外部数据[^1]
// const props = defineProps({
//   externalData: Array,
//   userName: String,
//   userRole: String
// });



</script>

<style scoped>
.main {
  padding: 15px;
  margin: 0;
  min-height: calc(100vh - 87px - 30px);
}

.nav {
  padding-top: 20px;
  min-height: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 20px;
  background-color: #fff;
}

.loading {
  margin: 0 auto;
}
</style>
