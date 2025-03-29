<template>
  <!-- 用户信息展示区 -->
  <div class="user-info">
    <h3>{{ userName }}</h3>
    <p>{{ userRole }}</p>
  </div>

  <!-- 数据表格 -->
  <t-table
    row-key="index"
    :data="externalData"
    :columns="columns"
    @row-click="handleRowClick"
    style="border: 1px solid var(--td-gray-color-4)"
  >
    <!-- 状态列样式 -->
    <template #status="{ row }">
      <span :style="statusStyle">{{ row.status }}</span>
    </template>
  </t-table>

  <!-- 数据详情弹窗 -->
  <t-dialog
    v-model:visible="dialogVisible"
    header="详细信息"
    :on-confirm="handleClose"
  >
    <div v-if="selectedRow">
      <p>Email: {{ selectedRow.detail.email }}</p>
      <p>内容: {{ selectedRow.detail.content }}</p>
    </div>
  </t-dialog>
</template>
<script setup>
import { ref } from 'vue';

// 接收外部数据[^1]
const props = defineProps({
  externalData: Array,
  userName: String,
  userRole: String
});

// 表格列配置[^2][^5]
const columns = ref([
  {
    colKey: 'applicant',
    title: '申请项',
    ellipsis: true,
    cell: (h, { row }) => h('span', 
      { 
        style: { 
          color: 'var(--td-text-color-brand)',
          cursor: 'pointer' 
        },
        onClick: () => handleCellClick(row) // 添加点击事件
      }, 
      row.applicant
    )
  },
  {
    colKey: 'status',
    title: '状态',
    cell: (h, { row }) => h('span', 
      { 
        style: statusStyle,
        onClick: () => handleCellClick(row) // 添加点击事件
      }, 
      row.status
    )
  }
]);

// 弹窗控制[^3][^4]
const dialogVisible = ref(false);
const selectedRow = ref(null);

// 行点击处理[^4]
const handleRowClick = (context) => {
  selectedRow.value = context.row;
  dialogVisible.value = true;
};

// 状态样式
const statusStyle = {
  padding: '4px 8px',
  background: 'var(--td-bg-color-secondarycomponent)'
};

// 关闭弹窗
const handleClose = () => {
  dialogVisible.value = false;
};

// 单元格点击处理
const handleCellClick = (row) => {
  console.log('Cell clicked:', row);
};
</script>
