export type FooterData = {
    year?: number,
    set?: string,
    collector?: string,
    artistCredit: string,
    other?: string[],
    readonly siteCredit: "Designed with CardCreator",
    readonly licence: "CC/BY-SA 4.0"
}

export default function CardFooter()
{
    return(
        <div className="component-cardfooter">

        </div>
    );
}