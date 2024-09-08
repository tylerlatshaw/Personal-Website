import { portfolioOptions, portfolioOptionType } from "../../app/lib/portfolio-data";
import { companyData } from "../../app/lib/resume-data";
import Image from "next/image";
import Link from "next/link";
import CreatedForSection from "./created-for-section";

export default function PortfolioGallery() {

    function createPortfolioCard(portfolioItem: portfolioOptionType) {

        const { portfolioSlug, name, isFeatured, associatedWith, previewLink } = portfolioItem;
        const associatedOrganization = companyData.find((company) => company.company === associatedWith);
        var cardStyles = "flex w-full h-80 group hover:shadow-xl ";
        var infoSection = "flex flex-col justify-between px-4 py-3 md:px-6 md:py-5 bg-slate-900 ";
        var imageSection = "relative overflow-hidden ";

        if (isFeatured) {
            cardStyles += "flex-col md:flex-row";
            infoSection += "w-full h-32 rounded-b-xl order-last md:w-[35%] md:h-80 md:rounded-br-none md:rounded-l-xl md:order-first";
            imageSection += "h-48 w-full rounded-t-xl md:h-80 md:w-[65%] md:rounded-tl-none md:rounded-r-xl";
        } else {
            cardStyles += "flex-col";
            infoSection += "w-full h-32 rounded-b-xl order-last";
            imageSection += "h-48 w-full rounded-t-xl";
        }

        return <>
            <Link href={"/portfolio/" + portfolioSlug}>
                <div className={cardStyles}>
                    <div className={infoSection}>
                        <div className="w-full text-center md:text-left">
                            <span className={"leading-3 text-xl md:text-base xl:text-lg w-full font-semibold hover:text-green-500" + (!isFeatured ? " md:line-clamp-1 md:text-ellipsis" : null)}>{name}</span>
                        </div>
                        {
                            associatedOrganization ? <CreatedForSection company={associatedOrganization.company} logo={associatedOrganization.logo} avatar={associatedOrganization.avatar} location={associatedOrganization.location} /> : null
                        }
                    </div>
                    <div className={imageSection}>
                        <div className="z-50 bg-gradient-to-b from-zinc-800 to-transparent via-transparent absolute inset-0 opacity-0 group-hover:opacity-100 transition-all ease-in-out duration-300"></div>
                        <Image src={previewLink} width={677} height={320} alt={name} className="w-full h-full object-cover object-center group-hover:scale-[1.15] transition-all duration-300" priority={isFeatured} />
                    </div>
                </div>
            </Link>
        </>;
    }

    return (
        <>
            <div className="w-full">
                <div className="grid grid-flow-row grid-cols-1 md:grid-cols-3 gap-6">
                    {
                        portfolioOptions.sort((a, b) => a.order - b.order).map((item) =>
                            <div key={item.portfolioSlug} className={item.isFeatured ? "md:col-span-2" : "col-span-1"}>
                                {
                                    createPortfolioCard(item)
                                }
                            </div>
                        )
                    }
                </div>
            </div>
        </>
    );
}