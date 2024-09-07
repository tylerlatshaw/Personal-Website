/* eslint-disable @next/next/no-img-element */
import { RecordResultType } from "./../../app/lib/notion-type-library";

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
                data.map((record) => {
                    return <div key={record.id}>
                        <div className="flex items-stretch bg-gray-900 shadow-lg drop-shadow-lg rounded p-3 flex flex-1 flex-col justify-between w-100">
                            <img src={record.properties.ImageUrl.files[0].file.url} alt={record.properties.Name.rich_text[0].plain_text} className="aspect-square w-full rounded" />
                        </div>
                        <div className="px-1 pt-2 pb-4 divide-y-2 divide-green-900 mx-auto text-center">
                            <div className="space-y-1">
                                <h3 className="leading-snug font-bold text-base">{record.properties.Name.rich_text[0].plain_text}</h3>
                                <div className="mx-auto text-sm italic text-gray-200 leading-tight">{record.properties.Artist.select.name}</div>
                            </div>
                        </div>
                    </div>;
                })
            }
        </>;
    }


    return <>
        {generateCards()}
    </>;

}