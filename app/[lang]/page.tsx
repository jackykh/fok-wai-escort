import { getDictionary } from "./dictionaries";
import ClientComponent from "./ClientComponent";

export default async function Home({ params }: { params: { lang: string } }) {
  const lang = params.lang;
  const dict = await getDictionary(lang);
  return (
    <div>
      <p>{dict.products.cart}</p>
      <ClientComponent lang={lang} />
    </div>
  );
}
