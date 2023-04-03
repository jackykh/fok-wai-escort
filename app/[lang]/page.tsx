import { getDictionary } from "@/dictionaries/dictionaries";
import Header from "../(Component)/Header";

export default async function Home({ params }: { params: { lang: string } }) {
  const lang = params.lang;
  const dict = await getDictionary(lang);

  return <Header dict={dict} />;
}
