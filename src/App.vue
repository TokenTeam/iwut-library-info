<template>
  <div>
    <div class="nav">
      <p>图书借阅信息</p>
    </div>
    <t-pull-down-refresh class="pull-down" v-model="refreshing" :loading-bar-height="66" :loading-texts="['下拉刷新', '松开刷新', '正在刷新', '刷新完成']"
      @refresh="handleRefresh">

      <div class="main">
        <t-loading class="loading" v-if="loading" size="26px" :text="text" />
        <card v-for="t in data[1]" :data="t" />
      </div>
    </t-pull-down-refresh>
  </div>
</template>
<script setup>
import Card from "@/components/card.vue";
import { getLibInfo } from "@/getInfo.js";
import { ref, onMounted, onUnmounted } from 'vue'


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
    loading.value = false;
  });
}
onMounted(() => {
  setTimeout(() =>text.value = "数据加载中... 网络不畅，还需一点时间", 2000);
  getLibInfo().then((res) => {
    data.value = res;
    loading.value = false;
  });
});



function syncThemeWithSystem() {
  const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
  const updateTheme = (e) => {
    document.documentElement.setAttribute('theme-mode', e.matches ? 'dark' : 'light')
  }
  updateTheme(mediaQuery)
  mediaQuery.addEventListener('change', updateTheme)
  return () => mediaQuery.removeEventListener('change', updateTheme)
}

onMounted(() => {
  const cleanup = syncThemeWithSystem()
  onUnmounted(cleanup)
})

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

:root[theme-mode="light"] .main {
  background-color: #fff;
}

.pull-down {
  background-color: #000;
}

:root[theme-mode="light"] .pull-down {
  background-color: var(--td-gray-color-2);
}

.loading {
  margin: 0 auto;
}

:root[theme-mode="dark"] .main{
  background-color: var(--td-gray-color-14);
  color: #fff;
}
:root[theme-mode="dark"] .nav{
  background-color: #000;
  color: #fff;
}
</style>
