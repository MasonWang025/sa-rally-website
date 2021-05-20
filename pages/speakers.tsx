import React from "react";
import Hero from "../components/speakers/Hero";
import Page from "../components/utility/Page";
import SpeakerList from "./../components/speakers/SpeakerList";

export default function speakers() {
  return (
    <Page
      title="Speakers"
      desc="A sexual assualt awareness rally aimed at creating a culture of consent in our community. June 6th, 4-5:30 @ Saratoga High School."
    >
      <Hero />
      <SpeakerList />
    </Page>
  );
}
