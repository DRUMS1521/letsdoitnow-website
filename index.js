const { Client } = require('@notionhq/client');
const { get } = require('https');
const fs = require('fs');

async function getNotionData() {

const notion = new Client({
    auth: "secret_sBX7qRpF7TFkuHuCvgPisR9tmXRpWEaZJE6334QtE9k",
  });

  const results = await notion.databases.query({
    database_id: "d5fe6caffd084bff9e6710bc2750f0c7",
  });

  fs.writeFileSync('data-blog.json', JSON.stringify(results, null, 2));


}

getNotionData();