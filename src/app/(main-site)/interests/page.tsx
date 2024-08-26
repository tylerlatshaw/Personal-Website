import { Metadata } from "next";
import VinylRecordContainer from "@/components/interests/vinyl-record-container";

export const metadata: Metadata = {
  title: "My Interests",
};

export default function Page() {
  return <>
    <div className="h-full px-4 md:px-0 mb-16 md:mb-40">
      <div className="container flex flex-wrap mx-auto pt-28 md:pt-36">

        <h1>My Interests</h1>

        <section className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 gap-2 sm:gap-4 p-2 w-full">

          <VinylRecordContainer />

        </section>

      </div>
    </div>
  </>;
}