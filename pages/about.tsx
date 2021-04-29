import React from "react";
import Hero from "../components/about/Hero";
import Page from "./../components/utility/Page";

export default function contact() {
  return (
    <Page
      title="About Us"
      desc="A sexual assualt awareness rally aimed at creating a culture of consent in our community. June 6th @ Saratoga High School."
    >
      <Hero />
      <div className="py-12">Todo</div>
    </Page>
  );
}
