import { Client } from "@notionhq/client";

export const dataNotion = async () => {
    const notion = new Client({auth: "secret_sBX7qRpF7TFkuHuCvgPisR9tmXRpWEaZJE6334QtE9k"});
    const databaseId = "d5fe6caffd084bff9e6710bc2750f0c7";
    const response = await notion.databases.query({
        database_id: databaseId,
    });
    return response.results;
}
