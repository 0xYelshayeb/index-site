// src/components/Layout.js
import React from 'react';
import { Helmet } from 'react-helmet';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, title, name, description, schema }) => {
  return (
    <div className="app">
      <Helmet>
        <title>{title}</title>
        <meta name={name} content={description} />
        {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
        <meta property="og:title" content="DCGen" />
        <meta property="og:description" content="Ethereum Ecosystem Index" />
        <meta property="og:image" content="https://dcgen.netlify.app/dcgen.jpeg" />
        <meta property="og:url" content="https://dcgen.netlify.app" />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="DCGen" />
        <meta name="twitter:description" content="Ethereum Ecosystem Index" />
        <meta name="twitter:image" content="https://dcgen.netlify.app/dcgen.jpeg" />
      </Helmet>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
