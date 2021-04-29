import React from "react";
import Navigation from "./../global/Navigation";

export default function Hero() {
  return (
    <div
      className="bg-cover bg-no-repeat bg-coc-dark-light bg-center overflow-hidden"
      style={{ backgroundImage: "url('/img/bg/general-dark.png')" }}
    >
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto">
          <div className="md:grid md:grid-cols-12">
            <div className="md:col-span-7 md:flex">
              <div className="py-20 flex flex-col justify-between">
                <div>
                  <Navigation color="white" hoverColor="gray-100" />
                </div>
                <div>
                  <h1 className="mt-4 text-4xl tracking-tighter sm:tracking-normal font-bold  text-white sm:mt-5 sm:text-5xl lg:mt-6 xl:text-6xl">
                    Contact Us
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
