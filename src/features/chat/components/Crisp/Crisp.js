import React from "react"
import { useEffect } from "react"


const Crisp = () => {

    useEffect( () => {
    // Include the Crisp code here, without the <script></script> tags
    window.$crisp = [];
    window.CRISP_WEBSITE_ID = "94cb7d29-6b74-4b58-be11-f9e06e6d21fe";
      var d = document;
      var s = d.createElement("script");

      s.src = "https://client.crisp.chat/l.js";
      s.async = 1;
      d.getElementsByTagName("head")[0].appendChild(s);
    },[])

    return (
      <></> 
    )
}


export default Crisp

