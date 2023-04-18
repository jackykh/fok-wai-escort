"use client";

import { useTheme as useNextTheme } from "next-themes";
import {
  Switch,
  Navbar,
  Text,
  useTheme,
  Dropdown,
  Avatar,
} from "@nextui-org/react";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { faHorseHead } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { v4 as uuidv4 } from "uuid";
import Link from "next/link";
import { DictionaryType } from "@/dictionaries/dictionaries";

type LangsListType = Array<{
  lang: string;
  code: string;
}>;

export default function NavBar({ dict }: { dict: DictionaryType }) {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  const langsList: LangsListType = [
    { lang: "English", code: "en-US" },
    { lang: "繁體中文", code: "zh-tw" },
  ];

  const DropdownlangList = (item: any) => {
    return (
      <Dropdown.Item key={uuidv4()}>
        <Link
          href={`\\${item.code}`}
          className="block w-full text-black dark:text-white"
        >
          {item.lang}
        </Link>
      </Dropdown.Item>
    );
  };
  const DropdownMenu = (
    <Dropdown.Menu items={langsList}>{DropdownlangList}</Dropdown.Menu>
  );

  const navBarLinks = dict.navItems.map((item: any) => (
    <Navbar.Link key={uuidv4()} href={`\\${dict.locale.code}\\${item.link}`}>
      <span className="text-black dark:text-white">{item.itemName}</span>
    </Navbar.Link>
  ));

  const collaspeItems = [
    <Navbar.CollapseItem key={uuidv4()}>
      <Dropdown>
        <Dropdown.Button auto color="gradient" rounded bordered>
          Language
        </Dropdown.Button>
        {DropdownMenu}
      </Dropdown>
    </Navbar.CollapseItem>,
    ...dict.navItems.map((item: any) => (
      <Navbar.CollapseItem key={uuidv4()}>
        <Link
          href={`\\${dict.locale.code}\\${item.link}`}
          className="block w-full text-black dark:text-white"
        >
          <span>{item.itemName}</span>
        </Link>
      </Navbar.CollapseItem>
    )),
  ];

  return (
    <Navbar variant="sticky" isBordered maxWidth={"fluid"}>
      <Navbar.Brand>
        <Avatar
          squared
          icon={<FontAwesomeIcon icon={faHorseHead} />}
          className="mr-2"
        />
        <Link
          href={`\\${dict.locale.code}`}
          className="text-black dark:text-white"
        >
          <b>{dict.brand.companyName}</b>
        </Link>
      </Navbar.Brand>
      <Navbar.Content variant="underline" activeColor="default" hideIn={"sm"}>
        {navBarLinks}
      </Navbar.Content>
      <Navbar.Content>
        <Navbar.Item hideIn={"sm"}>
          <Dropdown>
            <Dropdown.Button auto color="gradient" rounded bordered>
              Language
            </Dropdown.Button>
            {DropdownMenu}
          </Dropdown>
        </Navbar.Item>
        <Navbar.Item>
          <Switch
            checked={isDark}
            color="secondary"
            onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
            icon={<FontAwesomeIcon icon={faMoon} />}
          />
        </Navbar.Item>
        <Navbar.Toggle aria-label="toggle navigation" showIn={"sm"} />
      </Navbar.Content>

      <Navbar.Collapse>{collaspeItems}</Navbar.Collapse>
    </Navbar>
  );
}
