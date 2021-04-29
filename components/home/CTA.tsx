import Link from "next/link";

/* This example requires Tailwind CSS v2.0+ */
export default function CTA() {
  return (
    <div className="bg-coc-light-primary">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold sm:tracking-tight tracking-tighter text-gray-900 sm:text-4xl">
          <span className="block">Interested in speaking?</span>
          <span className="block mt-2 text-coc-purple-primary">
            Fill out our speaker interest form.
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScY-O_4k8qWik3syS6SqeGRfSYkmMTujDcR-TJsUACM2c1qRg/viewform"
              target="_blank"
              className="uppercase inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium text-white bg-coc-purple-primary hover:bg-coc-purple-dark"
            >
              Get started
            </a>
          </div>
          <div className="ml-3 inline-flex">
            <Link href="/about">
              <a
                className="uppercase inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium text-white bg-coc-blue-primary hover:bg-coc-blue-dark"
              >
                More about us
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
