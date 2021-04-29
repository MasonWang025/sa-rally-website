import React from "react";
import Hero from "../components/home/Hero";
import Page from "./../components/utility/Page";

export default function index() {
  return (
    <Page
      fullTitle="Stand with Survivors"
      desc="A sexual assualt awareness rally aimed at creating a culture of consent in our community. June 6th @ Saratoga High School."
    >
      <Hero />
    </Page>
  );
}
