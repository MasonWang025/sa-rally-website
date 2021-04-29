import React from "react";

const qualities = [
  {
    title: "Raise Awareness",
    content:
      "Raise awareness to bring action towards sexual assault and harassment cases and garner support from the community. ",
  },
  {
    title: "Encourage Action",
    content:
      "Encourage admin to take disciplinary and legal action against sexual assault assailants. ",
  },
  {
    title: "Amplify Voices",
    content:
      "Give students a live event to speak out about their experiences and be heard.",
  },
];

export default function Goals() {
  return (
    <div className="relative bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-md px-4 text-center sm:max-w-3xl sm:px-6 lg:px-8 lg:max-w-7xl">
        <h2 className="text-base font-semibold tracking-tighter sm:tracking-tight text-coc-blue-primary uppercase">
          Culture of Consent
        </h2>
        <p className="mt-2 text-3xl font-extrabold text-gray-900 tracking-tight sm:text-4xl">
          Event Goals
        </p>
        <p className="mt-5 max-w-prose mx-auto text-2xl text-gray-500">
          Through the Stand with Survivors rally, Culture of Consent aims to
          achieve the following three goals.
        </p>
        <div className="mt-8">
          <div className="flex justify-content-center gap-8 md:flex-row flex-col md:space-y-0 space-y-8">
            {qualities.map(({ title, content }, index) => (
              <div key={title} className="pt-6 flex-root md:w-1/3">
                <div className="flow-root bg-gray-100 h-full px-6 pb-8">
                  <div className="-mt-6">
                    <div>
                      <span className="inline-flex items-center justify-center p-3 bg-coc-purple-primary">
                        <h1 className="font-extrabold text-xl text-white w-7">
                          {index + 1}
                        </h1>
                      </span>
                    </div>
                    <h3 className="mt-6 text-2xl font-bold text-gray-900 tracking-tight">
                      {title}
                    </h3>
                    <p className="mt-5 text-lg text-gray-500">{content}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
