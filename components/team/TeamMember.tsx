import React from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function TeamMember({
  name,
  affiliation,
  imgSrc,
  email,
  instagram,
  facebook,
  linkedin,
}: TeamMemberProps) {
  return (
    <div className="sm:w-1/2 md:w-1/3 py-6 lg:w-1/4 p-1">
      <div className="space-y-6">
        <img
          className="mx-auto h-40 w-40 rounded-full xl:w-56 xl:h-56 bg-coc-dark-primary"
          src={imgSrc}
          alt={name}
        />
        <div className="space-y-2">
          <div className="space-y-1">
            <div className="leading-6 font-semibold text-togahacks-primary-main text-xl">
              {name}
            </div>
            <p className="text-coc-purple-dark font-medium text-md">{affiliation}</p>
          </div>
          <ul className="flex justify-center">
            {[
              {
                href: "mailto:" + email,
                icon: faEnvelope,
                sr: "email",
              },
              {
                href: instagram,
                icon: faInstagram,
                sr: "instagram",
              },
              {
                href: facebook,
                icon: faFacebook,
                sr: "facebook",
              },
              {
                href: linkedin,
                icon: faLinkedin,
                sr: "linkedin",
              },
            ].map(({ href, sr, icon }) => (
              <div key={sr}>
                {href && (
                  <li className="px-2.5">
                    <a
                      href={href}
                      target="_blank"
                      className="text-coc-blue-darker hover:text-coc-blue-dark"
                    >
                      <span className="sr-only">{sr}</span>
                      <FontAwesomeIcon icon={icon} className="w-5 h-5" />
                    </a>
                  </li>
                )}
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

type TeamMemberProps = {
  name: string;
  affiliation?: string;
  imgSrc: string;
  email?: string;
  instagram?: string;
  facebook?: string;
  linkedin?: string;
};
