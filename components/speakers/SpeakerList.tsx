import React from "react";
import speakers from "../../data/speakers";
import Speaker from "./Speaker";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExternalLinkAlt } from "@fortawesome/free-solid-svg-icons";

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
          <li className="sm:py-8 sm:text-center">
            <div className="text-2xl sm:text-3xl font-medium space-y-1">
              <h3 className="text-4xl text-coc-dark-primary font-bold mb-2">
                Audrie Pott Foundation <br />
              </h3>
              <h3 className="pt-1 text-3xl font-normal text-gray-400 hover:text-gray-500">
                <a href="https://audriepottfoundation.com/" target="_blank">
                  <span className="underline break-all">audriepottfoundation.com</span>
                  <FontAwesomeIcon
                    icon={faExternalLinkAlt}
                    className="ml-2 h-6 w-6 inline"
                  />
                </a>
              </h3>
            </div>
          </li>
          <li className="sm:py-8 sm:text-center">
            <div className="text-2xl sm:text-3xl font-medium space-y-1">
              <h3 className="text-4xl text-coc-dark-primary font-bold mb-2">
                Greg Louie <br />
              </h3>
              <h3 className="pt-1 text-3xl font-normal text-gray-400 hover:text-gray-500">
                Saratoga High School Principal
              </h3>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
