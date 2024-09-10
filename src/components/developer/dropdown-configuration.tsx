import { CSSObjectWithLabel } from "react-select";

export type DevItems = {
    title: string,
    content: JSX.Element,
}

export type DropdownItem = {
    value: number | undefined,
    label: string | undefined,
}

export const inputStyles = "peer h-full w-full border-b border-gray-400 bg-transparent pt-5 pb-1.5 outline outline-0 transition-all focus:border-green-500";

export const inputLabelStyles = "font-semibold text-green-600 pointer-events-none select-none absolute left-0 -top-2.5 flex h-full w-full transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-green-500 after:duration-300 peer-focus:after:scale-x-100";

export const dropdownLabelStyles = "flex flex-wrap mb-2 w-full pointer-events-none select-none font-semibold text-green-600";

export const dropdownStyles = {
    control: (base: CSSObjectWithLabel, { isFocused }: any) => ({
        ...base,
        backgroundColor: "#4b5563", // gray-600
        borderRadius: "0.5rem",
        minHeight: "43px",
        boxShadow: "none",
        borderColor: isFocused ? "#16a34a" : "#6b7280", // green-500, gray-500
        "&:hover": {
            borderColor: "#16a34a", // green-500
        },
    }),
    menu: (base: CSSObjectWithLabel) => ({
        ...base,
        backgroundColor: "#4b5563", // gray-600
    }),
    option: (base: CSSObjectWithLabel, { isFocused }: any) => ({
        ...base,
        backgroundColor: isFocused ? "#16a34a" : "#4b5563", // green-500, gray-600
        "&:hover": {
            backgroundColor: "#16a34a", // green-500
        },
        color: "white",
    }),
    singleValue: (base: CSSObjectWithLabel) => ({
        ...base,
        color: "white",
    }),
    multiValue: (base: CSSObjectWithLabel) => ({
        ...base,
        backgroundColor: "#e5e7eb", // gray-200
        fontSize: "1.05rem",
        marginRight: "0.375rem",
        borderRadius: "6px",
    }),
    multiValueLabel: (base: CSSObjectWithLabel) => ({
        ...base,
        color: "black",
        margin: "2px 4px",
    }),
    multiValueRemove: (base: CSSObjectWithLabel) => ({
        ...base,
        color: "black",
        backgroundColor: "#e5e7eb", // gray-200
        borderTopRightRadius: "6px",
        borderBottomRightRadius: "6px",
    }),
    clearIndicator: (base: CSSObjectWithLabel) => ({
        ...base,
        color: "#d1d5db", // gray-300
        "&:hover": {
            color: "#16a34a", // green-600
        },
    }),
    loadingIndicator: (base: CSSObjectWithLabel) => ({
        ...base,
        color: "#d1d5db", // gray-300
    }),
    indicatorSeparator: (base: CSSObjectWithLabel) => ({
        ...base,
        color: "#d1d5db", // gray-300
    }),
    dropdownIndicator: (base: CSSObjectWithLabel) => ({
        ...base,
        color: "#d1d5db", // gray-300
        "&:hover": {
            color: "#16a34a", // green-600
        },
    }),
    placeholder: (base: CSSObjectWithLabel) => ({
        ...base,
        color: "#d1d5db", // gray-300
        paddingLeft: "0.25rem",
    }),
    input: (base: CSSObjectWithLabel) => ({
        ...base,
        color: "white",
    }),
    noOptionsMessage: (base: CSSObjectWithLabel) => ({
        ...base,
        color: "white",
    }),
    loadingMessage: (base: CSSObjectWithLabel) => ({
        ...base,
        color: "white",
    }),
};