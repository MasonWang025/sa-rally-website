import Link from "next/link";

/* This example requires Tailwind CSS v2.0+ */
export default function CTA() {
  return (
    <div className="bg-coc-light-primary">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8 lg:flex lg:items-center lg:justify-between">
        <h2 className="text-3xl font-extrabold sm:tracking-tight tracking-tighter text-gray-900 sm:text-4xl">
          <span className="block">Interested in attending?</span>
          <span className="block mt-2 text-coc-purple-primary">
            RSVP now to save a spot.
          </span>
        </h2>
        <div className="mt-8 flex lg:mt-0 lg:flex-shrink-0">
          <div className="inline-flex">
            <a
              href="https://forms.gle/PmntEqwgGAucdknd6"
              target="_blank"
              className="uppercase inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium text-white bg-coc-purple-primary hover:bg-coc-purple-dark"
            >
              RSVP NOW
            </a>
          </div>
          <div className="ml-3 inline-flex">
            <Link href="/about">
              <a className="uppercase inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium text-white bg-coc-blue-primary hover:bg-coc-blue-dark">
                More about us
              </a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
