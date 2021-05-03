import React from "react";
import TeamMember from "./TeamMember";

import cocTeam from "../../data/cocTeam";
import miscTeam from "../../data/miscTeam";

export default function Team() {
  return (
    <div className="bg-white" id="team">
      <div className="max-w-7xl mx-auto py-16 px-4 text-center sm:px-6 lg:px-8 lg:py-20 mb-2">
        <h2 className="text-3xl font-extrabold text-coc-dark-primary tracking-tighter sm:tracking-tight sm:text-4xl -mb-4">
          Our Team
        </h2>
        <p className="text-xl pt-5 text-gray-500">
          Names are in no particular order.
        </p>
        <div className="space-y-6 sm:space-y-8 pt-10">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-2xl font-extrabold text-coc-purple-primary  tracking-tighter sm:tracking-tight sm:text-3xl -mb-4">
              Culture of Consent Task Force
            </h2>
          </div>
          <ul className="mx-auto flex sm:flex-wrap align-middle justify-center flex-col sm:flex-row lg:max-w-7xl">
            {cocTeam.map((member: any) => {
              let key = member.name.replace(/[\W_]+/g, "-").toLowerCase();
              return (
                <TeamMember
                  key={key}
                  name={member.name}
                  imgSrc={`/img/team/${key}.jpg`}
                  linkedin={member.linkedin}
                  instagram={member.instagram}
                  facebook={member.facebook}
                />
              );
            })}
          </ul>
        </div>
        <div className="space-y-6 sm:space-y-8 pt-12">
          <div className="space-y-5 sm:mx-auto sm:max-w-xl sm:space-y-4 lg:max-w-5xl">
            <h2 className="text-2xl font-extrabold text-coc-purple-primary  tracking-tighter sm:tracking-tight sm:text-3xl -mb-4">
              Miscellaneous
            </h2>
          </div>
          <ul className="mx-auto flex sm:flex-wrap align-middle justify-center flex-col sm:flex-row lg:max-w-7xl">
            {miscTeam.map((member: any) => {
              let key = member.name.replace(/[\W_]+/g, "-").toLowerCase();
              return (
                <TeamMember
                  key={key}
                  name={member.name}
                  affiliation={member.affiliation}
                  imgSrc={`/img/team/${key}.jpg`}
                  linkedin={member.linkedin}
                  instagram={member.instagram}
                  facebook={member.facebook}
                />
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
