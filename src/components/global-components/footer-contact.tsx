"use client";

import axios from "axios";
import React from "react";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import TextareaAutosize from "react-textarea-autosize";
import SendIcon from "@mui/icons-material/Send";
import { Button, CircularProgress } from "@mui/material/";

import type { ContactDataType } from "../../app/lib/type-library";

type SubmitState = "Idle" | "Success" | "Error";
type FormInputs = {
    name: string
    email: string
    message: string
};

export default function FormFooterContact() {

    const inputStyles = "block pt-3 pb-1.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b border-gray-600 appearance-none focus:outline-none focus:ring-0 peer";
    const inputLabelStyles = "peer-focus:font-medium absolute text-sm text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 z-10 origin-[0] peer-focus:left-0 peer-focus:text-green-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6";
    const spanStyles = "font-semibold text-green-600 pointer-events-none select-none absolute left-0 -top-2.5 flex h-full w-full transition-all after:absolute after:-bottom-2.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-green-500 after:duration-300 peer-focus:after:scale-x-100";

    const {
        register,
        handleSubmit,
        reset,
    } = useForm<FormInputs>();

    const [submitState, setSubmitState] = useState<SubmitState>("Idle");
    const [responseMessage, setResponseMessage] = useState<string>("");
    const [loadingState, setLoadingState] = useState<boolean>(false);

    const onSubmit: SubmitHandler<FormInputs> = async (formData) => {
        setSubmitState("Idle");
        setResponseMessage("");
        setLoadingState(true);

        try {
            const { data } = await axios.post("/api/add-contact-message", {
                name: formData.name,
                email: formData.email,
                message: formData.message,
                source: "Footer",
                referringPage: window.location.href,
            } as ContactDataType);

            setResponseMessage(data);
            setSubmitState("Success");
            reset({
                name: "",
                email: "",
                message: "",
            });
        } catch (e) {
            setResponseMessage("Something went wrong. Please try again.");
            setSubmitState("Error");
        }

        setLoadingState(false);
    };

    function GetResponseCssClass() {
        if (submitState === "Success") {
            return "positive-response";
        }

        if (submitState === "Error") {
            return "negative-response";
        }

        return "";
    }

    return (
        <form className="w-full mt-1 footer-contact-form" method="POST" onSubmit={handleSubmit(onSubmit)}>
            <div className="relative z-0 w-full mb-3 group">
                <input {...register("name")} id="name" type="text" className={inputStyles} placeholder=" " required disabled={loadingState} />
                <label htmlFor="name" className={inputLabelStyles}>Name</label>
                <span className={spanStyles}></span>
            </div>
            <div className="relative z-0 w-full mb-3 group">
                <input {...register("email")} id="email" type="email" className={inputStyles} placeholder=" " required disabled={loadingState} />
                <label htmlFor="email" className={inputLabelStyles}>Email</label>
                <span className={spanStyles}></span>
            </div>
            <div className="relative z-0 w-full mb-3 group">
                <TextareaAutosize {...register("message")} id="message" className={inputStyles} minRows={1} maxRows={4} placeholder=" " required disabled={loadingState} />
                <label htmlFor="message" className={inputLabelStyles}>Message</label>
                <span className={spanStyles}></span>
            </div>
            <div className="flex items-center">
                <Button type="submit" className="button text-white bg-green-700 hover:bg-green-800 focus:ring-2 focus:outline-none focus:ring-green-900 font-medium rounded-lg text-sm px-5 py-2.5 text-center" disabled={loadingState} sx={{"&.Mui-disabled": {color: "white"}}}>
                    <span className="flex items-center">
                        {loadingState ? <>Submit&nbsp;<CircularProgress size={16} sx={{ color: "white" }} /></> : <>Submit&nbsp;<SendIcon className="text-lg flex items-center" /></>}
                    </span>
                </Button>
                <span className={`pl-3 text-md  ${GetResponseCssClass()}`}>{responseMessage}</span>
            </div>
        </form>
    );
}