import { getDictionary } from "@/dictionaries/dictionaries";
import { redirect } from "next/navigation";
import ConstructionSign from "@/app/(Component)/ConstructionSign";

const personPage = async ({
  params,
}: {
  params: { personId: string; lang: string };
}) => {
  const dict = await getDictionary(params.lang);
  let person;
  if (params.personId in dict.people.peopleInfo) {
    person =
      dict.people.peopleInfo[
        params.personId as keyof typeof dict.people.peopleInfo
      ];
  } else {
    redirect("/404");
  }

  return (
    <section className="py-10 px-10 [&>*]:mb-10 sm:px-36 flex flex-col items-center h-[80rem]">
      <ConstructionSign content={dict.underConstruction} />
    </section>
  );
};

export default personPage;
