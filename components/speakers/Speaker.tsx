import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default function Speaker({
  name,
  email,
  insta,
  pronouns,
  bio,
  imgSrc,
}: SpeakerProps) {
  return (
    <li className="sm:py-8">
      <div className="grid grid-cols-12 items-start gap-6 space-y-0">
        <div className="col-span-6 sm:col-span-3">
          <img
            className="w-fill h-fill object-cover shadow-lg rounded-lg bg-gray-900"
            src={imgSrc}
            alt={name}
          />
        </div>
        <div className="col-span-12 sm:col-span-9">
          <div className="space-y-4">
            <div className="text-2xl sm:text-3xl font-medium space-y-1">
              <h3 className="text-4xl text-coc-dark-primary font-bold mb-2">
                {name}{" "}
                <span className="text-3xl font-normal text-gray-400">
                  {pronouns}
                </span>
              </h3>
            </div>
            <div
              className={"sm:pt-1 flex " + (insta && email ? "space-x-3" : "")}
            >
              {[
                {
                  name: "Email",
                  href: email,
                  icon: (props) => (
                    <FontAwesomeIcon icon={faEnvelope} {...props} />
                  ),
                },
                {
                  name: "Instagram",
                  href: insta,
                  icon: (props) => (
                    <FontAwesomeIcon icon={faInstagram} {...props} />
                  ),
                },
              ].map((item) => (
                <div key={item.name}>
                  {item.href && (
                    <a
                      href={item.href}
                      target="_blank"
                      className="text-coc-purple-dark hover:text-coc-purple-primary"
                    >
                      <span className="sr-only">{item.name}</span>
                      <item.icon className="h-6 w-6" aria-hidden="true" />
                    </a>
                  )}
                </div>
              ))}
            </div>
            <div className="text-lg text-gray-500">
              <p>{bio}</p>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}

type SpeakerProps = {
  name: string;
  imgSrc: string;
  insta?: string;
  email?: string;
  bio?: string;
  pronouns?: string;
};
