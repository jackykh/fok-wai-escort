import { getDictionary } from "@/dictionaries/dictionaries";
import ConstructionSign from "@/app/(Component)/ConstructionSign";

const FeaturePage = async ({ params }: { params: { lang: string } }) => {
  const lang = params.lang;
  const dict = await getDictionary(lang);
  return <ConstructionSign content={dict.underConstruction} />;
};

export default FeaturePage;
