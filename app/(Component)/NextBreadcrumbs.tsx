"use client";
import { usePathname } from "next/navigation";
import { v4 } from "uuid";
import Link from "next/link";

const NextBreadcrumbs = ({ dict }: { dict: any }) => {
  const router = usePathname();

  function generateBreadcrumbs() {
    // Break down the path between "/"s, removing empty entities
    // Ex:"/my/nested/path" --> ["my", "nested", "path"]
    const asPathNestedRoutes = router.split("/").filter((v) => v.length > 0);

    // Iterate over the list of nested route parts and build
    // a "crumb" object for each one.
    type crumblistType = Array<{
      href?: string;
      text?: string;
    }>;

    const crumblist: crumblistType = [];

    asPathNestedRoutes.forEach((subpath, idx) => {
      // We can get the partial nested route for the crumb
      // by joining together the path parts up to this point.
      const href = "/" + asPathNestedRoutes.slice(0, idx + 1).join("/");
      // The title will just be the route string for now
      const title = subpath;
      if (asPathNestedRoutes[idx - 1] === "people") {
        const person = dict.people[title];
        if (person) {
          return crumblist.push({
            text: person.basicInfo.name,
          });
        }
      }
      const page = dict.pages[title];
      if (page) {
        let pageInfo;
        if (idx + 1 === asPathNestedRoutes.length) {
          pageInfo = { text: page };
        } else {
          pageInfo = { href, text: page };
        }
        return crumblist.push(pageInfo);
      }
    });

    // Add in a default "Home" crumb for the top-level
    return [
      { href: `/${dict.locale.code}`, text: dict.pages.home },
      ...crumblist,
    ];
  }
  const breadcrumbs = generateBreadcrumbs();
  return (
    <div>
      {breadcrumbs.map((item) =>
        item.href ? (
          <Link key={v4()} href={`${item.href}`}>{`${item.text} > `}</Link>
        ) : (
          <span key={v4()}>{item.text}</span>
        )
      )}
    </div>
  );
};

export default NextBreadcrumbs;
