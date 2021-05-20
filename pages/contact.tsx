import React from "react";
import Contact from "../components/contact/Contact";
import Hero from "../components/contact/Hero";
import Page from "./../components/utility/Page";

export default function contact() {
  return (
    <Page
      title="Contact Us"
      desc="A sexual assualt awareness rally aimed at creating a culture of consent in our community. June 6th, 4-5:30 @ Saratoga High School."
    >
      <Hero />
      <Contact />
    </Page>
  );
}
