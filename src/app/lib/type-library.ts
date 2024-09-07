import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/material/OverridableComponent";

// import type { TemplateOptions } from "@/components/developer/email-send-form";

export type ContactDataType = {
    name: string,
    email: string,
    message: string,
    source: string,
    referringPage: string,
    date?: string,
    dateTime?: string,
    title?: string
}

export type DeveloperItemType = {
    title: string,
    content: JSX.Element,
    index: number
}

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