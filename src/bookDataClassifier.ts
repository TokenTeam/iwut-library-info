/**
 * 图书借阅数据分类工具
 * 将借阅数据按日期分类成组
 */

// 示例输入数据
export const data = [
    {
      date: '9月12日',
      book: {
        title: '灵梦灵梦灵梦灵梦',
        author: '乙一等著',
        barcode: '000005650443',
        callNumber: '1313.45/2164',
        location: '南湖图书馆阅览区',
        status: '借阅中',
        returnDate: '2025-10-12',
        image: '/public/image.png',
        borrowDate: '2025-09-12',
        returned: false,
      },
    },
    {
      date: '9月14日',
      book: {
        title: '背德者',
        author: '（法）安德烈·记德著',
        barcode: '000005703372',
        callNumber: '1565.45/711',
        location: '南湖图书馆阅览区',
        status: '借阅中',
        returnDate: '2025-10-12',
        image: '',
        borrowDate: '2025-09-14',
        returned: false,
      },
    },
  ];
  
  /**
   * 将借阅数据按日期分类
   * @param {Array} rawData - 原始借阅数据
   * @returns {Object} 按日期分类的数据对象
   */
  export function classifyBooksByDate(rawData) {
    const classifiedData = {};
    
    rawData.forEach(item => {
      const date = item.date;
      
      // 如果该日期尚未在分类对象中，创建一个空数组
      if (!classifiedData[date]) {
        classifiedData[date] = [];
      }
      
      // 将图书信息添加到对应日期的数组中
      classifiedData[date].push(item.book);
    });
    
    return classifiedData;
  }
  
  /**
   * 获取所有日期列表
   * @param {Object} classifiedData - 分类后的数据
   * @returns {Array} 日期列表
   */
  export function getDateList(classifiedData) {
    return Object.keys(classifiedData);
  }
  
  /**
   * 根据日期获取图书列表
   * @param {Object} classifiedData - 分类后的数据
   * @param {String} date - 日期
   * @returns {Array} 该日期的图书列表
   */
  export function getBooksByDate(classifiedData, date) {
    return classifiedData[date] || [];
  }
  const classifiedData = classifyBooksByDate(data);
  console.log('按日期分类的数据:', classifiedData);
  // 使用示例
  // const classified = classifyBooksByDate(data);
  // console.log('按日期分类的数据:', classified);
  // 
  // const dates = getDateList(classified);
  // console.log('所有日期:', dates);
  // 
  // const booksOnDate = getBooksByDate(classified, '9月12日');
  // console.log('9月12日的图书:', booksOnDate);