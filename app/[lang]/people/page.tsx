import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import linpingzhi from "@/public/people/linpingzhi.png";
import linzhennan from "@/public/people/linzhennan.png";
import female from "@/public/people/female.png";
import male from "@/public/people/male.png";
import { getDictionary } from "@/dictionaries/dictionaries";
import { v4 } from "uuid";

interface PeopleInfoType {
  name: string;
  position: string;
  personId: string;
}

interface listType {
  info: PeopleInfoType;
  img: StaticImageData;
}

const PeopleInfoBox = ({
  peopleInfo,
  img,
}: {
  peopleInfo: PeopleInfoType;
  img: StaticImageData;
}) => {
  return (
    <>
      <figure className="relative w-[15rem] h-[15rem] overflow-hidden rounded-lg mb-2">
        <Image
          src={img}
          alt="people"
          fill
          className="object-cover bg-gradient-to-b from-gray-400 to-white"
        />
      </figure>
      <figcaption>
        <p className="text-blue-500 dark:text-blue-200">
          {peopleInfo.position}
        </p>
        <p className="text-black dark:text-white">{peopleInfo.name}</p>
      </figcaption>
    </>
  );
};

export default async function PeoplePage({
  params,
}: {
  params: { lang: string };
}) {
  const lang = params.lang;
  const dict = await getDictionary(lang);

  const leadership = [
    { info: dict.people.peopleInfo.wangyuanji.basicInfo, img: female },
    { info: dict.people.peopleInfo.linzhennan.basicInfo, img: linzhennan },
    { info: dict.people.peopleInfo.linpingzhi.basicInfo, img: linpingzhi },
  ];
  const escorts = [
    { info: dict.people.peopleInfo.shibiaotou.basicInfo, img: male },
    { info: dict.people.peopleInfo.zhengbiaotou.basicInfo, img: male },
    { info: dict.people.peopleInfo.jibiaotou.basicInfo, img: male },
    { info: dict.people.peopleInfo.cuibiaotou.basicInfo, img: male },
    { info: dict.people.peopleInfo.fubiaotou.basicInfo, img: male },
    { info: dict.people.peopleInfo.qianbiaotou.basicInfo, img: male },
    { info: dict.people.peopleInfo.wubiaotou.basicInfo, img: male },
  ];

  const listGenerator = (arr: Array<listType>) =>
    arr.map((item) => (
      <li key={v4()}>
        <Link href={`/${dict.locale.code}/people/${item.info.personId}`}>
          <PeopleInfoBox peopleInfo={item.info} img={item.img} />
        </Link>
      </li>
    ));

  return (
    <div className="py-10 [&>*]:mb-10 flex flex-col items-center">
      <div className="flex justify-center">
        <h1 className="text-2xl xs:text-3xl lg:text-4xl font-sans">
          {dict.pages.people}
        </h1>
      </div>
      <div className="w-full">
        <div className="flex justify-start mb-10 p-2 border-b">
          <h3 className="text-lg xs:text-xl lg:text-2xl font-sans">
            {dict.people.type.leadership}
          </h3>
        </div>
        <ul className="flex flex-wrap [&>*]:mr-4">
          {listGenerator(leadership)}
        </ul>
      </div>
      <div className="w-full">
        <div className="flex justify-start mb-10 p-2 border-b">
          <h3 className="text-lg xs:text-xl lg:text-2xl font-sans">
            {dict.people.type.escorts}
          </h3>
        </div>
        <ul className="flex flex-wrap [&>*]:mr-4">{listGenerator(escorts)}</ul>
      </div>
    </div>
  );
}
