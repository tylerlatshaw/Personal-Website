import Image from "next/image";
import PersonIcon from "@mui/icons-material/Person";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

import type {
    GenresType,
    RecordDataType
} from "@/app/lib/type-library";

export default function VinylRecordCard(record: RecordDataType) {

    const {
        RecordName,
        ArtistName,
        Year,
        ImageUrl,
        DiscogsUrl,
        Genres
    } = record;

    var genreArray: GenresType[] = [];
    var tempArray: GenresType[] = [];

    Genres.split(",").map((e) => {
        tempArray.push({
            GenreId: +e.split("%")[0],
            Name: e.split("%")[1],
        });
    });

    genreArray = tempArray.sort((a, b) => {
        if (a.Name.toLowerCase() < b.Name.toLowerCase()) return -1;
        if (a.Name.toLowerCase() > b.Name.toLowerCase()) return 1;
        return 0;
    });

    //( split record card so that images are in a separate component from the rest of the card so it loads faster. Can probably have another for the genres

    return <>
        <div className="flex items-stretch bg-gray-900 shadow-lg drop-shadow-lg rounded p-3 flex flex-1 flex-col justify-between w-100">
            <div>
                <div className="group relative">

                    <Image src={"/static/interests/" + ImageUrl} width={1} height={1} sizes="100vw" alt={RecordName} className="aspect-square w-full rounded" priority={false} />

                    <div className="absolute bg-black rounded bg-opacity-0 group-hover:bg-opacity-60 w-full h-full top-0 flex items-center group-hover:opacity-100 transition justify-evenly">
                        <a href={`${DiscogsUrl}`} target="_blank">
                            <span className="hover:scale-110 text-white opacity-0 transform translate-y-3 group-hover:translate-y-0 group-hover:opacity-100 transition border-2 border-white rounded px-3 py-2">
                                View Record
                            </span>
                        </a>
                    </div>
                </div >
                <div className="px-1 pt-2 pb-4 divide-y-2 divide-green-900">
                    <h3 className="flex items-center min-h-[3.35rem] leading-snug text-white text-lg pl-1 pb-1">{RecordName}</h3>

                    <div className="pt-2 space-y-2">
                        <p className="flex items-center text-gray-400">
                            <PersonIcon />&nbsp;{ArtistName}
                        </p>
                        <p className="flex items-center text-gray-400">
                            <CalendarMonthIcon />&nbsp;{Year}
                        </p >
                    </div>
                </div >
            </div >
            <div className="px-1 pt-2 md:flex md:flex-wrap-reverse">
                {genreArray.map((genre) => (
                    <span key={genre.GenreId} className="align-bottom inline-block bg-green-900 rounded-full px-3 py-1 text-sm font-semibold text-grey-darker mr-2 mb-2">
                        {genre.Name}
                    </span>
                ))}
            </div >
        </div >
    </>;
}