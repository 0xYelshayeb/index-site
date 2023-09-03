// src/pages/Research.js
import React from "react";
import ComingSoon from "../components/ComingSoon";
import Layout from "../components/Layout";

const Research = () => {
    const schema = {
        "@context": "https://dcgen.finance/research",
        "@type": "WebPage",
        "name": "DCGen Research Page",
        "description": "Page containing all the Research for the Ethereum Ecosystem Index",
      };
    return (
        <Layout title="Research" name="Research Page" description="Page including research papers released by dcgen" schema={schema}>
            <ComingSoon/>
        </Layout>
    );
};

export default Research;