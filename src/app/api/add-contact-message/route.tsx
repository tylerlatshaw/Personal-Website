import { NextResponse } from "next/server";
import { Resend } from "resend";
import MessageReceived from "@/components/emails/new-message-received";
import ThankYouEmail from "@/components/emails/thank-you-email";
import { getCurrentDate, getCurrentDateTime } from "@/utilities/date-utilities";

import type { ContactDataType } from "@/app/lib/type-library";
import { addContactMessage } from "@/utilities/notion-client";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromAddress = process.env.RESEND_FROM;
const myEmailAddress = process.env.RESEND_MY_EMAIL;

export async function POST(request: Request) {

    const {
        name,
        email,
        message,
        source,
        referringPage
    } = await request.json() as ContactDataType;

    const date = getCurrentDate();
    const dateTime = getCurrentDateTime(date);
    const title = "";

    const messageData = {
        date,
        dateTime,
        title,
        name,
        email,
        message,
        source,
        referringPage
    };

    try {
        await Promise.all([
            addContactMessage(messageData),
            resend.emails.send({
                from: `${fromAddress}`,
                to: email,
                bcc: `${myEmailAddress}`,
                subject: "Thanks for reaching out!",
                text: "",
                react: <ThankYouEmail messageData={{ ...messageData, title: "I'll be in touch soon! ✉️" }} />,
            }),
            resend.emails.send({
                from: `${fromAddress}`,
                to: `${myEmailAddress}`,
                bcc: `${myEmailAddress}`,
                subject: "New Contact Form Submission: " + email,
                text: "",
                react: <MessageReceived messageData={{ ...messageData, title: "New Contact Form Submission" }} />,
            })
        ]);

        return NextResponse.json("Got it! I'll be in contact soon.");
    } catch (error) {
        return NextResponse.json("Something went wrong. Please try again.");
    }
}
