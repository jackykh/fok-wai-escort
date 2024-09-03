import { getDictionary } from "@/dictionaries/dictionaries";
import Header from "../(Component)/Header";
import BBC from "@/public/logo-bbc.png";
import bi from "@/public/logo-bi.png";
import forbes from "@/public/logo-forbes.png";
import techcrunch from "@/public/logo-techcrunch.png";
import Timeline from "../(Component)/Timeline";
import ClientsCarousel from "../(Component)/ClientsCarousel";
import CompanyIntro from "../(Component)/CompanyIntro";

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
