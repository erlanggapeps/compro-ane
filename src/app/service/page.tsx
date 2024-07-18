import Link from "next/link";
import Footer from "../components/footer";
import Testimoni from "../components/testimoni";

async function getData() {
    const res = await fetch("https://cdn.contentful.com/spaces/49owbg6qwmty/environments/master/entries?access_token=d43JANiJ2iZwh0dQ8INnh4j4fwh-exlYFWeDKORZCq8", {
        method : "GET",
        cache : "no-cache"
    })
    if(!res.ok){
        throw new Error("Fetching Error")
    }
    const jsonData = res.json()
    return jsonData
}

export default async function Service() {
    const res = await getData()
return (
<div>
    <div className="flex wrap p-16 w-full justify-evenly gap-10">
        <div className="card bg-base-100 h-[525px] w-1/4 shadow-xl rounded-lg border-2 border-gray-500 hover:scale-105 duration-200">
            <figure>
                <img className="h-60 w-[475px] rounded-t-md" 
                    src="/cartenzPhoto.jpg"
                    alt="serviceOne" />
            </figure>
            <div className="card-body">
                <h2 className="card-title py-2 px-2 font-bold text-blue-900">Air of Cartenz </h2>
                <p className="py-2 px-2 text-balance font-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae sapiente in vel ullam ex illo pariatur assumenda cupiditate dolorem facilis est, perferendis ipsum eveniet ratione iure! Repudiandae perferendis expedita illum.</p>
                <div className="card-actions text-center">
                <Link href={`/servicePage/${res.items[3].fields.slug}`} className="font-semibold text-blue-900">Buy Now</Link>
                </div>
            </div>
        </div>
        <div className="card bg-base-100 h-[550px] w-1/4 shadow-xl rounded-lg border-2 border-gray-500 hover:scale-105 duration-200">
            <figure>
                <img className="h-60 w-[475px] rounded-t-md"
                     src="/kerinciPhoto.webp"
                    alt="serviceOTwo" />
            </figure>
            <div className="card-body">
                <h2 className="card-title py-2 px-2 text-blue-900 font-bold">Air of Kerinci</h2>
                <p className="py-2 px-2 text-balance font-light">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ea earum, aspernatur obcaecati sit porro, dolorem veritatis explicabo perspiciatis totam pariatur molestias laudantium. Numquam provident aut corrupti harum libero maxime soluta.</p>
                <div className="card-actions text-center">
                <Link href={`/servicePage/${res.items[2].fields.slug}`} className="font-semibold text-blue-900">Buy Now</Link>
                </div>
            </div>
        </div>
        <div className="card bg-base-100 h-[525px] w-1/4 shadow-xl rounded-lg border-2 border-gray-500 hover:scale-105 duration-200">
            <figure>
                <img className="h-60 w-[475px] rounded-t-md"
                     src="/rinjaniPhoto.webp"
                    alt="serviceThree" />
            </figure>
            <div className="card-body">
                <h2 className="card-title py-2 px-2 text-blue-900 font-bold">Air of Rinjani</h2>
                <p className="py-2 px-2 text-balance font-light">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptas, dignissimos. Eveniet, id corporis? Cumque sit, consectetur repellat nihil exercitationem adipisci non amet asperiores commodi vel suscipit aperiam laudantium facere reiciendis.</p>
                <div className="card-actions text-center">
                <Link href={`/servicePage/${res.items[1].fields.slug}`} className="font-semibold text-blue-900">Buy Now</Link>
                </div>
            </div>
        </div>
        <div className="card bg-base-100 h-[550px] w-1/4 shadow-xl rounded-lg border-2 border-gray-500 hover:scale-105 duration-200">
            <figure>
                <img className="h-60 w-[475px] rounded-t-md" 
                    src="/semeruPhoto.jpeg"
                    alt="serviceOne" />
            </figure>
            <div className="card-body">
                <h2 className="card-title py-2 px-2 font-bold text-blue-900">Air of Semeru</h2>
                <p className="py-2 px-2 text-balance font-light">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae sapiente in vel ullam ex illo pariatur assumenda cupiditate dolorem facilis est, perferendis ipsum eveniet ratione iure! Repudiandae perferendis expedita illum.</p>
                <div className="card-actions text-center">
                <Link href={`/servicePage/${res.items[0].fields.slug}`} className="font-semibold text-blue-900">Buy Now</Link>
                </div>
            </div>
        </div>
    </div>
    <Footer/>
</div>
)
}