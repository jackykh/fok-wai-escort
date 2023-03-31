const dictionaries = {
  "en-US": () =>
    import("@/dictionaries/en-US.json").then((module) => module.default),
  "zh-tw": () =>
    import("@/dictionaries/zh-tw.json").then((module) => module.default),
};

export const getDictionary = (<
  T extends object,
  defaultLangType extends keyof T
>(
  dictionaries: T,
  defaultLang: defaultLangType
) => {
  return async (locale: string) => {
    const hasLocale = dictionaries.hasOwnProperty(locale);
    let getDict;
    if (hasLocale) {
      getDict = dictionaries[locale as keyof T];
    } else {
      getDict = dictionaries[defaultLang];
    }
    if (typeof getDict === "function") {
      return getDict();
    }
  };
})(dictionaries, "en-US");
