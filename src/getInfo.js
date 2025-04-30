import NativeRPC from '@token-team/native-rpc-h5';
import {log} from "@/logger";
import config from "@/config/index.js";

export async function getLibInfo() {
  log("getLibInfo")
  log(encodeURIComponent(config.redirect_url));
  const ulplResponse = await NativeRPC.call("spider.getulpl");
  log(ulplResponse)
  log(ulplResponse.ul)
  log(ulplResponse.pl)
  const spiderResponse = await NativeRPC.call("spider.run", {
    "spider": "library_login_home",
    "newContext": false,
    "params": {
      "ul": ulplResponse.ul,
      "pl": ulplResponse.pl,
      "redirect_url": encodeURIComponent(config.redirect_url),
    }
  });
  console.log(spiderResponse);
  return parseLibInfo(spiderResponse.lib_home);
}


function parseLibInfo(htmlData) {
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
    if(units.length !==8)
    {
      return []
    }
    return [units,data]
  } else {
    console.error('Element with id "contentTable" not found.')
    return []
  }
}