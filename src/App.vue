<template>
  <div class="container">
    <h1>查询已借阅图书</h1>
    <input v-model="query" @input="searchBooks" placeholder="输入学工号或学号查询" class="search-box" />
    <table v-if="filteredBooks.length" class="book-table">
      <thead>
        <tr>
          <th>借阅人学工号</th>
          <th>借阅人学号</th>
          <th>图书编号</th>
          <th>借阅日期</th>
          <th>到期日期</th>
          <th>剩余天数</th>
          <th>书名</th>
          <th>书籍行号</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="book in filteredBooks" :key="book.bookId">
          <td>{{ book.borrowerId }}</td>
          <td>{{ book.studentId }}</td>
          <td>{{ book.bookId }}</td>
          <td>{{ book.borrowDate }}</td>
          <td>{{ book.dueDate }}</td>
          <td>{{ book.remainingDays }}</td>
          <td>{{ book.title }}</td>
          <td>{{ book.shelfNumber }}</td>
        </tr>
      </tbody>
    </table>
    <p v-else class="no-results">未找到相关图书记录</p>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const query = ref('');
    const books = ref([
      {
        borrowerId: '0000123456',
        studentId: '1024001234',
        bookId: 'BK2025001',
        borrowDate: '2025-03-23',
        dueDate: '2025-05-22',
        remainingDays: 60,
        title: 'Vue 3 入门指南',
        shelfNumber: 'A12'
      },
      // 可以添加更多测试数据
    ]);
    
    const filteredBooks = ref([]);

    const searchBooks = () => {
      filteredBooks.value = books.value.filter(book => 
        book.borrowerId.includes(query.value) || book.studentId.includes(query.value)
      );
    };

    return {
      query,
      filteredBooks,
      searchBooks
    };
  }
};
</script>

<style scoped>
.container {
  max-width: 800px;
  margin: 20px auto;
  text-align: center;
}
.search-box {
  width: 100%;
  padding: 10px;
  margin-bottom: 20px;
  border: 1px solid #ccc;
  border-radius: 5px;
}
.book-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
}
.book-table th, .book-table td {
  border: 1px solid #ddd;
  padding: 10px;
}
.book-table th {
  background-color: #f4f4f4;
}
.no-results {
  color: red;
  font-weight: bold;
}
</style>
