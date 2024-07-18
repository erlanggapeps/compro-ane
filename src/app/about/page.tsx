import Image from "next/image";
import Card from "../components/card";
import Footer from "../components/footer";

export default function About() {
  return (
    <div>
      <div className="grid grid-row lg:grid-cols-2 justify-evenly h-[600px] overflow-hidden bg-sliderOne bg-cover lg:bg-right-bottom ">
        <div className="content-center text-center font-light mx-20">
          <h1 className="text-2xl font-medium p-3 text-black">Company History</h1>
          <p className="pb-3 text-black">UDARA was founded in year by founders names in location. The company started with a vision to describe original mission or purpose. From its humble beginnings in describe early workspace or setup Company Name quickly gained traction in the industry or niche sector due to mention early successes or innovations.</p>
          <h4 className="text-black">-Prof Sujimandra</h4>
        </div>
      </div>
      <h2 className="text-center font-semibold text-xl pt-14 hover:scale-150 hover:font-bold duration-200">OUR TEAM</h2>
      <div className="max-w-screen-xl mx-auto px-4 py-10 overflow-x-auto">
        <Card />
      </div>
      <div className="grid lg:grid-cols-2 h-[400px] w-[1000px] rounded-2xl bg-black mx-auto my-11 text-white">
        <div className="content-center mx-auto text-center p-3">
          <h1 className="text-xl font-medium">Company Culture</h1>
          <p className="mt-2 font-light text-pretty">UDARA was founded in year by founders names in location. The company started with a vision to describe original mission or purpose. From its humble beginnings in describe early workspace or setup Company Name quickly gained traction in the industry or niche sector due to mention early successes or innovations.</p>
        </div>
        <div className="content-center mx-auto">
          <Image
            src="/culturePhoto.png"
            alt="vade"
            width={300}
            height={300}
          />
        </div>
      </div>
        <Footer />
    </div>
  );
}