"use client";

import { useEffect, useState } from "react";
import axios from "axios";

import type { RecordDataType } from "@/app/lib/type-library";
import VinylRecordCard from "./vinyl-record-card";

export default function VinylRecordContainer() {
    const [records, setRecords] = useState<RecordDataType[]>([]);

    useEffect(() => {
        axios.get("/api/get-record-data").then((response) => {
            setRecords(response.data);
        });
    }, []);

    return <>
        {records.map((record) => (
            <div key={record.RecordId} className="flex items-stretch">
                {VinylRecordCard(record)}
            </div>
        ))}
    </>;
}