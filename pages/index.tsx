import React from "react";
import Hero from "../components/home/Hero";
import WhenAndWhere from "../components/home/WhenAndWhere";
import Page from "./../components/utility/Page";
import What from "./../components/home/What";
import Goals from "../components/home/Goals";
import CTA from "./../components/home/CTA";

export default function index() {
  return (
    <Page
      fullTitle="Stand with Survivors"
      desc="A sexual assualt awareness rally aimed at creating a culture of consent in our community. June 6th, 4-5:30 @ Saratoga High School."
    >
      <Hero />
      <WhenAndWhere />
      <What />
      <Goals />
      <CTA />
    </Page>
  );
}
