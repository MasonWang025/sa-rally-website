import React from "react";

export default function WhenAndWhere() {
  return (
    <div
      className="bg-coc-dark-primary py-24 text-white"
      style={{ backgroundImage: "url('/img/bg/dark-pattern-bg.png')" }}
    >
      <div className="pcontainer flex flex-col flex-wrap md:flex-row space-y-12 md:space-y-0 justify-items-center">
        <div className="flex-auto md:w-1/2">
          <h1 className="text-xl">When</h1>
          <p className="mt-2 text-4xl">Sunday, June 6th, 2021</p>
          <p className="mt-1 text-2xl text-gray-400">Time TBD</p>
        </div>
        <div className="flex-auto md:w-1/2">
          <h1 className="text-xl">Where</h1>
          <p className="mt-2 text-4xl">Saratoga High School Parking Lot</p>
        </div>
        <div className="flex-shrink-0 w-full md:pt-12">
          <h1 className="text-xl">Watch Remotely</h1>
          <p className="mt-2 text-4xl">
            Watch via YouTube live stream on{" "}
            <a
              href="https://www.youtube.com/channel/UCZteJ4RbOyTCRrAVOeV4xwQ"
              target="_blank"
              className="font-medium underline"
            >
              SHSTV
            </a>{" "}
            or Instagram live on{" "}
            <a
              href="https://www.instagram.com/shsasb/"
              target="_blank"
              className="font-medium underline"
            >
              @shsasb
            </a>
            .
          </p>
        </div>
      </div>
    </div>
  );
}
