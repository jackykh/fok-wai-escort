import { getDictionary } from "@/dictionaries/dictionaries";

export default async function Home({ params }: { params: { lang: string } }) {
  const lang = params.lang;
  const dict = await getDictionary(lang);
  return (
    <div>
      <p>{dict.products.cart}</p>
    </div>
  );
}
