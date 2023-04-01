"use client";

import { useTheme as useNextTheme } from "next-themes";
import { Switch, Navbar, Text, useTheme, Dropdown } from "@nextui-org/react";
import { faMoon } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Link from "next/link";

type LangsListType = Array<{
  lang: string;
  code: string;
}>;

export default function NavBar({ dict }: { dict: any }) {
  const { setTheme } = useNextTheme();
  const { isDark } = useTheme();

  const langsList: LangsListType = [
    { lang: "English", code: "en-US" },
    { lang: "繁體中文", code: "zh-tw" },
  ];

  const langListDropDown = (item: any) => {
    return (
      <Dropdown.Item key={item.lang}>
        <Link href={`\\${item.code}`} className="block w-full">
          {item.lang}
        </Link>
      </Dropdown.Item>
    );
  };

  return (
    <Navbar shouldHideOnScroll variant="sticky">
      <Navbar.Brand>
        <Text b color="inherit" hideIn="xs">
          ACME {dict.locale.lang}
        </Text>
      </Navbar.Brand>
      <Navbar.Content hideIn="xs" variant="underline" activeColor="default">
        <Navbar.Link href="#">Features</Navbar.Link>
        <Navbar.Link isActive href="#">
          Customers
        </Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Company</Navbar.Link>
      </Navbar.Content>
      <Navbar.Content>
        <Dropdown>
          <Dropdown.Button flat>Language</Dropdown.Button>
          <Dropdown.Menu aria-label="Static Actions" items={langsList}>
            {langListDropDown}
          </Dropdown.Menu>
        </Dropdown>
        <Navbar.Item>
          <Switch
            checked={isDark}
            onChange={(e) => setTheme(e.target.checked ? "dark" : "light")}
            icon={<FontAwesomeIcon icon={faMoon} />}
          />
        </Navbar.Item>
      </Navbar.Content>
    </Navbar>
  );
}
