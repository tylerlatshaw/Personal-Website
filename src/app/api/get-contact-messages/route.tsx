import { NextResponse } from "next/server";
import { getContactMessages } from "../../../utilities/notion-client";

import type { ContactResponseType, ContactResultType } from "../../lib/notion-type-library";

export async function GET() {
    var start_cursor;
    var has_more = true;
    const sanitizedResults: ContactResultType[] = [];

    do {
        const response = await getContactMessages(start_cursor!) as unknown as ContactResponseType;
        sanitizedResults.push(...response.results);

        response.has_more ? start_cursor = response.next_cursor : has_more = false;
    } while (has_more);

    return NextResponse.json(sanitizedResults);
}