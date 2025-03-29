<template>
  <div>
    <!-- 修改表格容器样式 -->
<t-table
  row-key="index"
  :data="data"
  :columns="columns"
  :show-header="showHeader"
  cell-empty-content=""
  style="
    border: 1px solid var(black-1);  
    --td-table-head-bg-color: var(black-1);  
    --td-table-cell-hover-bg-color: var(black-1);  
    --td-table-border-color: transparent;  
    --td-table-cell-border-color: transparent;  
    box-shadow: none;  
    font-family: 'NSimSun';  
    --td-font-family: 'NSimSun';  
  "
  @row-click="handleRowClick"
  @cell-click="handleCellClick"
  @scroll="handleScroll"
>

      <!-- 插槽方式 自定义单元格：cell 的值为插槽名称，参数有：{col, colIndex, row, rowIndex}  -->
      <template #type-slot-name="{ col, row }">
        {{ row[col.colKey] }}
      </template>

      <!-- 插槽方式 自定义单元格， colKey 的值默认为插槽名称  -->
      <template #status="{ col, row }">
        {{ row[col.colKey] }}
      </template>
    </t-table>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

const data: any[] = [];
const total = 7;
for (let i = 0; i < total; i++) {
  data.push({
    index: i + 1,
    applicant: ['条形码', '题名', '索书号','馆藏地点','文献类型','借出时间','应还时间'][i % 7],
    status: ['需导入内容', '需导入内容', '需导入内容', '需导入内容', '需导入内容', '需导入内容', '需导入内容'][i % 7],
    channel: ['需导入内容','需导入内容','需导入内容','需导入内容','需导入内容','需导入内容','需导入内容'][i % 7],
    onClick: () => {
      console.log('Row clicked:', i + 1);
    },
    detail: {
      email: ['email', '内容', '内容内容内容'][i % 3],
    },
  });
}

const showHeader = ref(true);

// 修改列定义样式
const columns = ref([
  { 
    colKey: 'applicant',
    title: '',
    ellipsis: true,
    cell: (h, { row }) => h('span', {
      style: {
        color: 'var(--td-text-color-brand)',  
        cursor: 'pointer'
      },
      onClick: () => handleCellClick(row) // 添加点击事件
    }, row.applicant)
  },
  {
    colKey: 'status',
    title: '',
    ellipsis: true,
    cell: (h, { row }) => h('span', {
      style: {
        color: 'var(black-1)',  
        padding: '4px 8px',
        background: 'var(--td-bg-color-secondarycomponent)'  
      },
      onClick: () => handleCellClick(row) // 添加点击事件
    }, row.status)
  },
]);


const handleRowClick = (e: any) => {
  console.log('row-cliek=====', e);
};

const handleCellClick = (row: any) => {
  console.log('Cell clicked:', row);
};

const handleScroll = (e: any) => {
  console.log('scroll=====', e);
};
</script>