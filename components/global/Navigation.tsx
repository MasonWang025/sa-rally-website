import React from "react";

import navigation from "../../data/navigation";
import Link from "next/link";

export default function Navigation() {
  return (
    <ul>
      {navigation.main.map(({ name, path }) => (
        <li key={name} className="py-2">
          <Link href={path}>
            <a className="text-xl font-medium text-coc-dark-primary hover:text-coc-dark-dark">
              {name}
            </a>
          </Link>
        </li>
      ))}
    </ul>
  );
}
