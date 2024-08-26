import PrivacyPolicy from "@/components/privacy-policy/privacy-policy";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
};

export default function Page() {
  return <>
    <div className="h-full px-4 md:px-0 mb-16 md:mb-40">
      <div className="container flex flex-wrap mx-auto pt-28 md:pt-36">

        <h1>Privacy Policy</h1>

        <PrivacyPolicy />

      </div>
    </div>
  </>;
}