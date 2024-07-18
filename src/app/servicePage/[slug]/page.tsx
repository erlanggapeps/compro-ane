import Footer from "@/app/components/footer";
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

export async function generateStaticParams() {
    const response = await fetch('https://cdn.contentful.com/spaces/49owbg6qwmty/environments/master/entries?access_token=d43JANiJ2iZwh0dQ8INnh4j4fwh-exlYFWeDKORZCq8', {
        method: "GET",
        cache: "no-cache"
    },);
    if (!response.ok) {
        throw new Error('Failed to fetch data')
    }
    const jsonData = await response.json();

    return jsonData.items.map((item: any) => ({
        slug: item?.fields?.slug
    }))
}

export default async function DetailService({ params }: any) {

    const response2 = await fetch(`https://cdn.contentful.com/spaces/49owbg6qwmty/environments/master/entries?access_token=d43JANiJ2iZwh0dQ8INnh4j4fwh-exlYFWeDKORZCq8&content_type=blog&include=10&fields.slug=${params.slug}`, {
        method: "GET",
        cache: "no-cache"
    },);
    const jsonData2 = await response2.json();

    return (
        <div>
            <div className="mx-10 mb-44 pt-6">
                <h1 className="font-semibold text-2xl">{jsonData2?.items[0]?.fields?.title}</h1>
                <h1 className="font-extralight text-xs">{jsonData2?.items[0]?.fields?.date}</h1>
                <h1 className="font-light py-6">{documentToReactComponents(jsonData2?.items[0]?.fields?.description)}</h1>
                <h1 className="font-normal">IDR {jsonData2?.items[0]?.fields?.price}</h1>
                <h1 className="py-4 font-normal text-yellow-400">rating {jsonData2?.items[0]?.fields?.rating}/5</h1>
            </div>
            <Footer />
        </div>

    )
}