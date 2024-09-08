import { NextResponse } from "next/server";
import { getRecords } from "../../../utilities/notion-client";

import type { RecordResponseType, RecordResultType } from "../../lib/notion-type-library";

export async function GET() {
    var start_cursor;
    var has_more = true;
    const sanitizedResults: RecordResultType[] = [];

    do {
        const response = await getRecords(start_cursor!) as unknown as RecordResponseType;
        sanitizedResults.push(...response.results);

        response.has_more ? start_cursor = response.next_cursor : has_more = false;
    } while (has_more);

    return NextResponse.json(sanitizedResults);
}