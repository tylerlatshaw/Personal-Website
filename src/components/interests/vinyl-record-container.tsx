import { RecordResultType } from "./../../app/lib/notion-type-library";
import VinylRecordCard from "./vinyl-record-card";

export default function VinylRecordContainer() {

    async function getData() {
        const res = await fetch(process.env.BASE_URL + "/api/get-records");
        const data = await res.json();

        return data;
    }

    async function generateCards() {
        const data: RecordResultType[] = await getData();

        return <>
            {
                data.map((row) => {
                    return VinylRecordCard(row);
                })
            }
        </>;
    }


    return <>
        {generateCards()}
    </>;

}