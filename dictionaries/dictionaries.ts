import 'server-only'

const dictionaries = {
  "en-US": () =>
    import("@/dictionaries/en-US.json").then((module) => module.default),
  "zh-tw": () =>
    import("@/dictionaries/zh-tw.json").then((module) => module.default),
};
const defaultDict: keyof typeof dictionaries = "en-US";

type GetDictionaryReturnType = ReturnType<typeof dictionaries["en-US"]>;
export type DictionaryType = Awaited<GetDictionaryReturnType>;

export const getDictionary: (
  locale: string
) => GetDictionaryReturnType = async (locale) => {
  let getDict;
  if (dictionaries.hasOwnProperty(locale)) {
    getDict = dictionaries[locale as keyof typeof dictionaries];
    return getDict();
  } else {
    getDict = dictionaries[defaultDict];
    return getDict();
  }
};
