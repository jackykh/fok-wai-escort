import NavBar from "@/app/(Component)/NavBar";
import { getDictionary } from "@/dictionaries/dictionaries";
import Footer from "../(Component)/Footer";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: string };
}) {
  const lang = params.lang;
  const dict = await getDictionary(lang);
  return (
    <>
      <main>
        <NavBar dict={dict} />
        {children}
      </main>
      <Footer />
    </>
  );
}
