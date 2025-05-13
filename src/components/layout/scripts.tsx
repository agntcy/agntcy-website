import Script from "next/script";
import React from "react";

const Scripts = () => {
  return (
    <>
      <Script id="google-tag-manager">
        {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
            new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
            j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
            'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
            })(window,document,'script','dataLayer','GTM-M725WDCP');`}
      </Script>
      <Script
        type="text/javascript"
        src="https://www.cisco.com/c/dam/cdc/t/ctm.js"
        strategy="afterInteractive"
      ></Script>
    </>
  );
};

export default Scripts;
