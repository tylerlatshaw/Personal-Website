import { NextResponse } from "next/server";
import { getContactMessagesByEmail } from "../../../utilities/notion-client";

import type { ContactResponseType, ContactResultType } from "../../lib/notion-type-library";

export async function POST(request: Request) {

    const res = await request.json();
    const email = res.email;

    var start_cursor;
    var has_more = true;
    const sanitizedResults: ContactResultType[] = [];

    do {
        const response = await getContactMessagesByEmail(start_cursor!, email) as unknown as ContactResponseType;
        sanitizedResults.push(...response.results);

        response.has_more ? start_cursor = response.next_cursor : has_more = false;
    } while (has_more);

    return NextResponse.json(sanitizedResults);
}