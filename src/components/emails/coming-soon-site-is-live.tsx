import {
    Body,
    Button,
    Container,
    Head,
    Heading,
    Html,
    Img,
    Link,
    Preview,
    Section,
    Text,
    Tailwind
} from "@react-email/components";
import * as React from "react";

interface EmailVariables {
    messageData: {
        date: string;
        dateTime: string;
        title: string;
        name: string;
        email: string;
        message: string;
        source: string;
        referringPage: string;
    }
}

export const EmailTemplate = (props: EmailVariables) => (
    <Html>
        <Head />
        <Preview>I cannot wait to hear what you think!</Preview>
        <Body style={main}>
            <Tailwind>
                <Section style={header}>
                    <Link href='https://tylerlatshaw.com/?utm_source=comingsoon&utm_medium=email&utm_campaign=coming_soon_site_live'>
                        <Img
                            style={imgHeader}
                            src={"https://tylerlatshaw.com/static/logo.png"}
                            width={300}
                            alt="Tyler Latshaw logo"
                            className="pt-8 pb-8"
                        />
                    </Link>
                </Section>
                <Container style={container}>
                    <Heading style={heading}>
                        {props.messageData.title}
                    </Heading>

                    <Section style={mainSection}>
                        <Text style={text}>Hello!</Text>

                        <Text style={text}>
                            I hope this email finds you well. I have some exciting news to share - my brand-new website is officially live!
                        </Text>

                        <Text style={text}>
                            You can visit the new site at <Link href="https://tylerlatshaw.com/?utm_source=comingsoon&utm_medium=email&utm_campaign=coming_soon_site_live">https://tylerlatshaw.com/</Link>
                        </Text>

                        <Text style={text}>I couldn&apos;t be more thrilled to invite you to explore my new website - I am humbled that you requested to be notified when it goes live. I have worked hard on the site over the past few months, teaching myself Next.js along the way! Some things you can expect:</Text>

                        <Text style={text}>Some things you can expect:</Text>

                        <Text style={text}>
                            ✨ <strong>New Design:</strong>{" "}I&apos;ve rewritten my entire website from the ground up. It features a visually-appealing design that is intuitive to use.
                        </Text>

                        <Text style={text}>
                            📰 <strong>All New Content:</strong>{" "}I updated my portfolio to include more relavent information and examples of my work and even included a few pages so you can get to know me personally.
                        </Text>

                        <Text style={text}>
                            📱 <strong>User-Focused Interaction:</strong>{" "}My new website is built with the user experience in mind. I designed the site to be completely mobile friendly and easy to use.
                        </Text>

                        <Section style={alignCenter}>
                            <Button style={button} href="https://tylerlatshaw.com/?utm_source=comingsoon&utm_medium=email&utm_campaign=coming_soon_site_live">
                                Visit My Site Now
                            </Button>
                        </Section>

                        <Text style={text}>
                            Thank you for your support as I navigate creating my online portfolio. I cannot wait to hear what you think!
                        </Text>

                        <Section style={alignRight}>
                            <Img
                                src={"https://tylerlatshaw.com/static/signature.png"}
                                alt="Tyler signature"
                                style={signature}
                            />
                        </Section>

                        <Section style={callToAction}>
                            <Text style={ctaHeader}>
                                Get in Contact
                            </Text>

                            <Section style={alignCenter}>
                                <Button style={ctaButton} href="mailto:tyler@tylerlatshaw.com">
                                    Email
                                </Button>
                                <Button style={ctaButton} href="https://tylerlatshaw.com/?utm_source=comingsoon&utm_medium=email&utm_campaign=coming_soon_site_live">
                                    Website
                                </Button>
                                <Button style={ctaButton} href="https://www.linkedin.com/in/tylerlatshaw/">
                                    LinkedIn
                                </Button>
                            </Section>
                        </Section>

                    </Section>

                    <Text style={disclaimer}>
                        You are receiving this message because you requested to know when my site goes live.
                    </Text>


                    <Text style={footerLinkSection}>
                        <Link href='https://tylerlatshaw.com/?utm_source=comingsoon&utm_medium=email&utm_campaign=coming_soon_site_live'>
                            <Img
                                style={imgFooter}
                                src={"https://tylerlatshaw.com/static/logo.png"}
                                width={300}
                                alt="codepen"
                                className="pt-8 pb-8"
                            />
                        </Link>

                        <Link style={link} href="${baseUrl}/resume">Resume</Link> |{" "}
                        <Link style={link} href="${baseUrl}/portfolio">Portfolio</Link> |{" "}
                        <Link style={link} href="${baseUrl}/interests">Interests</Link> |{" "}
                        <Link style={link} href="${baseUrl}/contact-me">Contact Me</Link> |{" "}
                        <Link style={link} href="${baseUrl}/privacy-policy">Privacy Policy</Link>
                    </Text>

                    <Text style={unsubscribeFooter}>
                        Don&apos;t want to receieve future updates? Reply with &quot;Unsubscribe&quot; in the subject line.
                    </Text>
                </Container>
            </Tailwind>
        </Body>
    </Html>
);

export default EmailTemplate
    ;

const main = {
    fontFamily: "\"Google Sans\",Roboto,RobotoDraft,Helvetica,Arial,sans-serif",
    fallbackFontFamily: "Verdana",
    backgroundColor: "#505050",
    margin: "0",
};

const imgHeader = {
    margin: "auto",
};

const header = {
    width: "100%",
    backgroundColor: "#191919",
    margin: "0 auto",
    zIndex: "999",
};

const container = {
    paddingLeft: "12px",
    paddingRight: "12px",
    margin: "0 auto 16px auto",
    width: "648px",
    maxWidth: "648px",
    position: "relative" as const,
};

const heading = {
    background: "#233441",
    padding: "30px",
    color: "white",
    textAlign: "center" as const,
    fontWeight: "400",
    marginTop: "0",
    marginBottom: "0",
};

const mainSection = {
    margin: "0",
    background: "white",
    padding: "0 24px",
    marginTop: "0",
    marginBottom: "0",
};

const text = {
    fontSize: "16px",
    color: "black",
};

const alignRight = {
    display: "flex",
    flexDirection: "row-reverse" as const,
    paddingRight: "48px",
};

const alignCenter = {
    textAlign: "center" as const,
};

const signature = {
    width: "80px",
};

const callToAction = {
    marginTop: "24px",
    marginBottom: "24px",
    textAlign: "center" as const,
    background: "#234130",
    color: "white",
    padding: "32px 24px 32px 24px",
    border: "6px solid #191919",
    width: "600px",
};

const ctaHeader = {
    fontSize: "22px",
    margin: "0 0 24px 0",
};

const ctaButton = {
    color: "#fff",
    border: "solid 1px",
    fontSize: "15px",
    lineHeight: "18px",
    cursor: "pointer",
    borderRadius: "4px",
    margin: "8px",
    minWidth: "78px",
    padding: "12px"
};

const button = {
    background: "#2b3a93",
    color: "#fff",
    border: "0",
    fontSize: "15px",
    lineHeight: "18px",
    cursor: "pointer",
    borderRadius: "4px",
    padding: "12px"
};

const disclaimer = {
    backgroundColor: "#696969",
    color: "white",
    textAlign: "center" as const,
    padding: "12px 0 12px 0",
    fontSize: "14px",
    width: "100%",
    maxWidth: "648px",
    margin: "0 0 16px 0",
    marginBottom: "0",
};

const footerLinkSection = {
    background: "#233441",
    textAlign: "center" as const,
    paddingTop: "0",
    paddingBottom: "24px",
    fontSize: "14px",
    color: "white",
    marginTop: "0",
    marginBottom: "0",
};

const imgFooter = {
    margin: "auto",
    width: "200px",
};

const link = {
    color: "white",
    textDecoration: "underline",
    margin: "0 2px",
};

const unsubscribeFooter = {
    fontSize: "14px",
    textAlign: "center" as const,
    color: "#1a1a1a",
};