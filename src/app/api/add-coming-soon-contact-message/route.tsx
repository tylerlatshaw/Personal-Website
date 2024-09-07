import { NextResponse } from "next/server";
import { Resend } from "resend";
import MessageReceived from "../../../components/emails/new-message-received";
import ComingSoonOnList from "../../../components/emails/coming-soon-on-the-list";
import { getCurrentDate, getCurrentDateTime } from "../../../utilities/date-utilities";
import { addContactMessage, getContactMessagesByEmail } from "../../../utilities/notion-client";

import type { ContactDataType } from "../../lib/type-library";

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

    const contact = await getContactMessagesByEmail(undefined, email);

    if (contact.results.length > 0) {
        return NextResponse.json("You're already on the list!");
    }

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
                react: <ComingSoonOnList messageData={{ ...messageData, title: "I'll be in touch soon! ✉️" }} />,
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

        return NextResponse.json("Got it! I'll notify you when the site goes live.");
    } catch (error) {
        return NextResponse.json("Something went wrong. Please try again.");
    }
}
