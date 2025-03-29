<template>
  <div class="main">
    <card v-for="t in x[1]" :data="t" />

<!--    &lt;!&ndash; 数据详情弹窗 &ndash;&gt;-->
<!--    <t-dialog-->
<!--        v-model:visible="dialogVisible"-->
<!--        header="详细信息"-->
<!--        :on-confirm="handleClose"-->
<!--    >-->
<!--      <div v-if="selectedRow">-->
<!--        <p>Email: {{ selectedRow.detail.email }}</p>-->
<!--        <p>内容: {{ selectedRow.detail.content }}</p>-->
<!--      </div>-->
<!--    </t-dialog>-->
  </div>
</template>
<script setup>
import {ref} from 'vue';
import Card from "@/components/card.vue";
import {getLibInfo} from "@/getInfo.js";
const x = getLibInfo();
console.log(x);


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
}
</style>
