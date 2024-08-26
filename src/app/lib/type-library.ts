import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

// import type { TemplateOptions } from "@/components/developer/email-send-form";

// export type AddArtistType = {
//     apiKey: string
//     artistName: string
// }

// export type AddGenreType = {
//     apiKey: string
//     genreName: string
// }

// export type AddRecordType = {
//     apiKey: string,
//     recordName: string,
//     artistId: number,
//     artistTypeId: number,
//     genreId: number[],
//     year: number,
//     imageUrl: string,
//     discogsUrl: string
// }

// export type AddRecordToArtistType = {
//     apiKey: string,
//     recordId: number,
//     artistId: number,
//     artistTypeId: number
// }

// export type AddRecordToGenreType = {
//     apiKey: string,
//     recordId: number,
//     genreId: number
// }

// export type ArtistsType = {
//     ArtistId: number,
//     Name: string,
// }

export type ComingSoonDataType = {
    name: string,
    email: string,
    message: string,
    source: string,
    referringPage: string
}

// export type ContactFormType = {
//     name: string,
//     email: string,
//     message: string,
//     source: string,
//     referringPage: string
// }

// export type DeleteRecordToArtistType = {
//     apiKey: string
//     recordId: number
//     artistId: number
//     artistTypeId: number
// }

// export type DeleteRecordToGenreType = {
//     apiKey: string
//     recordId: number
//     genreId: number
// }

// export type DeleteRecordType = {
//     apiKey: string
//     recordName: string
//     recordId: number
// }

// export type EmailDataType = {
//     date: string,
//     dateTime: string,
//     title: string,
//     name: string,
//     email: string,
//     message: string,
//     referringPage: string,
//     source: string
// }

// export type EmailFormType = {
//     selection: TemplateOptions
//     formName: string
//     email: string
//     apiKey: string
//     title: string
//     name: string
//     message: string
//     source: string
//     referringPage: string
// }

export type FooterSocialType = {
    display: string,
    link: string,
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>
}

// export type GenresType = {
//     GenreId: number,
//     Name: string,
// }

export type IconLookupType = {
    display: string
    icon: OverridableComponent<SvgIconTypeMap<{}, "svg">>
}

export type NavigationLinkType = {
    display: string,
    link: string,
    filepath: string,
    changeFrequency: "always" | "hourly" | "daily" | "weekly" | "monthly" | "yearly" | "never",
    priority: number,
}

// export type RecordDataType = {
//     RecordId: number,
//     RecordName: string,
//     Year: number,
//     ImageUrl: string,
//     DiscogsUrl: string,
//     ArtistId: number,
//     ArtistName: string,
//     Genres: string,
// }

// export type RecordToArtistType = {
//     RecordToArtistId: number,
//     ArtistId: number,
//     RecordId: number,
// }

// export type RecordToGenreType = {
//     RecordToGenreId: number,
//     GenreId: number,
//     RecordId: number,
// }

// export type RecordsType = {
//     RecordId: number,
//     Name: string,
//     Year: number,
//     ImageUrl: string,
//     DiscogsUrl: string
// }

// export type UpdateRecordType = {
//     apiKey: string,
//     recordId: number | undefined,
//     originalRecordName: string,
//     newRecordName: string | undefined,
//     year: number | undefined,
//     imageUrl: string | undefined,
//     discogsUrl: string | undefined
// }