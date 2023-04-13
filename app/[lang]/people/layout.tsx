import { getDictionary } from "@/dictionaries/dictionaries";
import NextBreadcrumbs from "@/app/(Component)/NextBreadcrumbs";

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
    <section className="px-10 sm:px-36 py-10">
      <NextBreadcrumbs dict={dict} /> {children}
    </section>
  );
}
