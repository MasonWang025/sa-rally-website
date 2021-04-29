import React from "react";
import Link from "next/link";

import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Navigation from "../global/Navigation";

export default function Hero() {
  return (
    <div
      className="bg-cover bg-no-repeat bg-center min-h-screen flex items-center relative overflow-hidden home-hero"
    >
      <div className="pcontainer">
        <main>
          <div className="mx-auto">
            <div className="md:grid md:grid-cols-12">
              <div className="md:col-span-7 md:flex">
                <div className="min-h-screen pt-8 pb-24 sm:py-20 flex flex-col justify-between">
                  <div>
                    <Navigation />
                  </div>
                  <div>
                    <h1 className="mt-4 text-4xl tracking-tighter sm:tracking-normal font-bold  text-coc-dark-primary sm:mt-5 sm:text-5xl lg:mt-6 xl:text-6xl">
                      <span className="sm:block">Stand with </span>
                      <span className="sm:block">Survivors</span>
                    </h1>
                    <p className="mt-1 text-xl text-gray-500 sm:mt-1.5 lg:text-2xl">
                      hosted by Culture of Consent
                    </p>
                    <p className="mt-3 text-2xl text-coc-dark-primary sm:mt-5 lg:text-3xl">
                      A sexual assault awareness rally aimed at creating a
                      culture of consent in our community.
                    </p>
                    <a
                      href="https://docs.google.com/forms/d/e/1FAIpQLScY-O_4k8qWik3syS6SqeGRfSYkmMTujDcR-TJsUACM2c1qRg/viewform"
                      target="_blank"
                      className="mt-5 inline-flex items-center px-6 py-3 border border-transparent text-base font-medium uppercase shadow-sm trans-150 text-white bg-coc-purple-primary hover:bg-coc-purple-dark focus:outline-none"
                    >
                      Speaker Interest Form
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
