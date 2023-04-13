import { getDictionary } from "@/dictionaries/dictionaries";
import { redirect } from "next/navigation";

const personPage = async ({
  params,
}: {
  params: { personId: string; lang: string };
}) => {
  const dict = await getDictionary(params.lang);
  const person = dict.people[params.personId];
  if (!person) {
    redirect("/404");
  }
  return (
    <section className="py-10 px-10 [&>*]:mb-10 sm:px-36 flex flex-col items-center h-[80rem]">
      {params.personId}
    </section>
  );
};

export default personPage;
