import React from "react";
import speakers from "../../data/speakers";
import Speaker from "./Speaker";

export default function SpeakerList() {
  return (
    <div className="bg-white">
      <div className="mx-auto py-12 px-4 max-w-7xl sm:px-6 lg:px-8">
        <ul className="space-y-14 sm:divide-y sm:divide-gray-200 sm:space-y-0 sm:-mt-8 lg:gap-x-8 lg:space-y-0">
          {speakers.map((speaker) => {
            let key = speaker.name.replace(/[\W_]+/g, "-").toLowerCase();
            return (
              <Speaker
                key={key}
                name={speaker.name}
                pronouns={speaker.pronouns}
                insta={speaker.insta}
                email={"mailto:" + speaker.email}
                bio={speaker.bio}
                imgSrc={`/img/speakers/${key}.jpg`}
              />
            );
          })}
        </ul>
      </div>
    </div>
  );
}
