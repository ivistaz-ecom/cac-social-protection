import React from "react";
import Header from "./Header";
import Homebanner from "./Homebanner";
import SocialProtection from "./SocialProtection";
import OurObjective from "./OurObjective";
import WhatWeDo from "./WhatWeDo";
import OurApproach from "./OurApproach";
import PartnerWithUs from "./PartnerWithUs";
import Stakeholders from "./Stakeholders";
import GetInvolved from "./GetInvolved";
import ExploreMore from "./ExploreMore";
import MediaArticle from "./MediaArticle";
import Footer from "./Footer";
import SeoComponents from "../SeoComponents/Seo";

const index = () => {
  const title =
    "Strengthening Social Protection Systems for a Resilient Bharat ";
  const description =
    "Description: We aim to build robust, accessible social protection systems for vulnerable communities and foster inclusive growth. Be part of this transformative journey.";
  const metaImage = "";
  const canonical= "https://social-protection.communityactioncollab.org/";

  return (
    <>
      <SeoComponents
        title={title}
        description={description}
        metaImage={metaImage}
        canonical={canonical}
      />
      <div className="bg-white font-lato">
        <Header />
        <Homebanner />
        <SocialProtection />
        <OurObjective />
        <WhatWeDo />
        <OurApproach />
        <PartnerWithUs />
        <Stakeholders />
        <GetInvolved />
        <ExploreMore />
        <MediaArticle />
        <Footer />
      </div>
    </>
  );
};

export default index;
