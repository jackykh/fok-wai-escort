import { getDictionary } from "@/dictionaries/dictionaries";
import Header from "../(Component)/Header";
import ParallaxBrand from "../(Component)/ParallaxBrand";
import Image from "next/image";
import BBC from "@/public/logo-bbc.png";
import bi from "@/public/logo-bi.png";
import forbes from "@/public/logo-forbes.png";
import techcrunch from "@/public/logo-techcrunch.png";

import { v4 } from "uuid";

const ClientsCarousel = ({ dict }: { dict: any }) => {
  return (
    <div className="mt-12 [&>*]:mb-12">
      <div className="flex justify-center ">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-sans">
          {dict.ourClients}
        </h1>
      </div>
      <div className="px-10">
        <div className="w-full overflow-hidden">
          <ParallaxBrand
            child={[
              <Image
                key={v4()}
                src={BBC}
                alt="logo"
                className="invert dark:invert-0"
              />,
              <Image
                key={v4()}
                src={bi}
                alt="logo"
                className="invert dark:invert-0"
              />,
              <Image
                key={v4()}
                src={forbes}
                alt="logo"
                className="invert dark:invert-0"
              />,
              <Image
                key={v4()}
                src={techcrunch}
                alt="logo"
                className="invert dark:invert-0"
              />,
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default async function Home({ params }: { params: { lang: string } }) {
  const lang = params.lang;
  const dict = await getDictionary(lang);

  return (
    <>
      <Header dict={dict} />
      <ClientsCarousel dict={dict} />
      <div className="h-[100rem] bg-white dark:bg-gray-700"></div>
    </>
  );
}
