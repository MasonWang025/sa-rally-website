import navigation from "../../data/navigation";
import Link from "next/link";


export default function Footer() {
  return (
    <footer className="bg-coc-dark-primary">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          {navigation.main.map(({name, path}) => (
            <div key={name} className="px-5 py-2">
              <Link href={path}>
                <a className="text-base text-gray-400 hover:text-white">
                  {name}
                </a>
              </Link>
            </div>
          ))}
        </nav>
        <div className="mt-8 flex justify-center space-x-6">
          {navigation.social.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              className="text-gray-300 hover:text-white"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" aria-hidden="true" />
            </a>
          ))}
        </div>
        <p className="mt-8 text-center text-base text-gray-300">
          &copy; 2021 Culture of Consent. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
