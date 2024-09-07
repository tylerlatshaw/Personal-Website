import "server-only";

import { Client } from "@notionhq/client";
import { getCurrentDate, getCurrentDateTime } from "./date-utilities";

import type { ContactDataType } from "../app/lib/type-library";

export const notionClient = new Client({
    auth: process.env.NOTION_SECRET
});

const db_contact = process.env.NOTION_DB_CONTACT;
const db_records = process.env.NOTION_DB_RECORDS;

export const addContactMessage = async (messageData: ContactDataType) => {

    const date = getCurrentDate();
    const dateTime = getCurrentDateTime(date);

    const response = await notionClient.pages.create({
        parent: {
            type: "database_id",
            database_id: db_contact!,
        },
        properties: {
            MessageId: {
                "title": [{
                    "text": {
                        "content": dateTime
                    }
                }]
            },
            "Name": {
                "rich_text": [{
                    "text": {
                        "content": messageData.name
                    }
                }]
            },
            "EmailAddress": {
                "email": messageData.email
            },
            "Message": {
                "rich_text": [{
                    "text": {
                        "content": messageData.message
                    }
                }]
            },
            "ReferringPage": {
                "url": messageData.referringPage
            },
            "FormSource": {
                "rich_text": [{
                    "text": {
                        "content": messageData.source
                    }
                }]
            }
        }
    });
    
    return response;
};

export const getContactMessages = async (start_cursor: string | undefined) => {

    const response = notionClient.databases.query({
        database_id: db_contact!,
        sorts: [
            {
                property: "Name",
                direction: "ascending"
            }
        ],
        start_cursor: start_cursor!
    });

    return response;
};

export const getContactMessagesByEmail = async (start_cursor: string | undefined, email: string) => {

    const response = notionClient.databases.query({
        database_id: db_contact!,
        filter: {
            property: "EmailAddress",
            rich_text: {
                equals: email
            }
        },
        sorts: [
            {
                property: "Name",
                direction: "ascending"
            }
        ],
        start_cursor: start_cursor!
    });

    return response;
};

export const getRecords = async (start_cursor: string | undefined) => {

    const response = notionClient.databases.query({
        database_id: db_records!,
        sorts: [
            {
                property: "Name",
                direction: "ascending"
            }
        ],
        start_cursor: start_cursor!
    });

    return response;
};