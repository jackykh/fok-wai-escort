import { getDictionary } from "@/dictionaries/dictionaries";
import Header from "../(Component)/Header";
import BBC from "@/public/logo-bbc.png";
import bi from "@/public/logo-bi.png";
import forbes from "@/public/logo-forbes.png";
import techcrunch from "@/public/logo-techcrunch.png";
import Timeline from "../(Component)/Timeline";
import ClientsCarousel from "../(Component)/ClientsCarousel";

const CompanyIntro = ({ dict }: { dict: any }) => {
  return (
    <section className="p-10 [&>*]:mb-12">
      <div className="flex justify-center ">
        <h1 className="text-2xl xs:text-3xl lg:text-4xl font-sans">
          {dict.aboutUs}
        </h1>
      </div>
      <div className="flex justify-center">
        <p
          className="max-w-[60rem]"
          dangerouslySetInnerHTML={{ __html: dict.brand.introduction }}
        />
      </div>
    </section>
  );
};

export default async function Home({ params }: { params: { lang: string } }) {
  const lang = params.lang;
  const dict = await getDictionary(lang);

  return (
    <>
      <Header dict={dict} />
      <ClientsCarousel dict={dict} images={[BBC, bi, forbes, techcrunch]} />
      <CompanyIntro dict={dict} />
      <Timeline dict={dict} />
    </>
  );
}
