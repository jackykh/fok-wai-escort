"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import { Text } from "@nextui-org/react";

const Footer = () => {
  return (
    <footer className="w-full py-[4rem] flex justify-center items-center font-sans bg-[#EAF4FF] dark:bg-[#11181C]">
      <div className="h-full w-[90%] md:w-[80%] flex flex-col items-center font-light text-xl leading-10 tracking-wider">
        <div className="flex flex-col md:flex-row w-full justify-around p-8 border-b border-solid border-slate-400">
          <ul className="flex flex-col md:mr-8">
            <li className="uppercase font-extralight">Contact Me</li>
            <li>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="mailto:hello@jackycheung.dev"
              >
                <Text
                  color="$yellow900"
                  size={"$lg"}
                  css={{ letterSpacing: "0.05rem" }}
                >
                  hello@jackycheung.dev
                </Text>
              </Link>
            </li>
            <li>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://jackycheung.dev"
              >
                <Text
                  color="$yellow900"
                  size={"$lg"}
                  css={{ letterSpacing: "0.05rem" }}
                >
                  jackycheung.dev
                </Text>
              </Link>
            </li>
          </ul>
          <ul className="flex flex-col">
            <li>
              <Link
                target="_blank"
                rel="noopener noreferrer"
                href="https://jackycheung.dev/resume"
              >
                <Text
                  color="$yellow900"
                  size={"$lg"}
                  css={{ letterSpacing: "0.05rem" }}
                >
                  My Resume
                </Text>
              </Link>
            </li>
          </ul>
        </div>
        <div className="p-8 flex">
          <div className="[&>*]:mr-8 flex flex-wrap">
            <span>@Jacky Cheung 2023</span>
            <span>Made With NextUI</span>
          </div>
          <div className="[&>*]:mr-8">
            <Link
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/jackykh"
            >
              <Text color="$yellow900" size={"$lg"}>
                <FontAwesomeIcon icon={faGithub} />
              </Text>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
