import React from "react";
import Link from "next/link";

export default function What() {
  return (
    <div className="relative z-30 bg-gray-100 overflow-hidden" id="about">
      <div className="relative pt-6 pb-16 sm:pb-24">
        <main className="mt-16 pcontainer sm:mt-24">
          <h1 className="tracking-tighter sm:tracking-tight font-bold text-3xl md:text-4xl">
            <div className="text-coc-dark-primary mb-2">
              An event to{" "}
              <span className="underline-effect">
                amplify survivor experiences
              </span>
              .
            </div>
          </h1>
          <div className="mt-3 text-gray-700 text-xl md:text-2xl md:mt-5">
            <p>
              After hearing about and experiencing sexual harassment and
              assault in our community, we decided to host this rally not only
              to
              <span className="text-coc-dark-primary font-medium underline-effect">
                {" "}
                discuss the prevalence of sexual harassment and assault in
                Saratoga
              </span>{" "}
              but to also{" "}
              <span className="text-coc-dark-primary font-medium underline-effect">
                encourage our entire community to believe in and support sexual
                assault survivors
              </span>
              .
            </p>
            <p className="mt-3">
              This event is not SHS exclusive, as we encourage everyone in the
              LGSUHSD district and neighboring communities to educate themselves
              on how to dismantle sexual assault culture on a day-to-day basis.
              We hope this message amplifies in future years, as sexual assault
              culture is deeply rooted in our everyday lives.
            </p>
          </div>
          <Link href="/about">
            <a className="mt-5 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium uppercase shadow-sm trans-150 text-white bg-coc-purple-primary hover:bg-coc-purple-dark focus:outline-none">
              More About Us
            </a>
          </Link>
        </main>
      </div>
    </div>
  );
}
