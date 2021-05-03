import React from "react";
import Hero from "../components/about/Hero";
import Page from "./../components/utility/Page";
import COC from "./../components/about/COC";
import Team from "../components/team/Team";

export default function contact() {
  return (
    <Page
      title="About Us"
      desc="A sexual assualt awareness rally aimed at creating a culture of consent in our community. June 6th @ Saratoga High School."
    >
      <Hero />
      <COC />
      <Team />
    </Page>
  );
}
