import { htmlData } from '@/htmlData.js'


export function getLibInfo() {
  const parser = new DOMParser()
  const doc = parser.parseFromString(htmlData, 'text/html')
  const table = doc.getElementById('contentTable')
  const units = []

  if (table) {
    const rows = table.getElementsByTagName('tr');
    const data = [];
    const unitsHtml = rows[0].getElementsByTagName('th');
    for (let i = 0; i < unitsHtml.length; i++) {
      units.push(unitsHtml[i].textContent);
    }
    for (let i = 1; i < rows.length; i++) {
      // Skip the header row
      const cells = rows[i].getElementsByTagName('td')
      const rowData = [];
      for (let j = 0; j < cells.length; j++) {
        rowData.push(cells[j].textContent.trim());
      }
      data.push(rowData)
    }
    return [units,data]
  } else {
    console.error('Element with id "contentTable" not found.')
    return []
  }
}
