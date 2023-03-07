import React from "react";
import { renderToString } from 'react-dom/server'
import App from '../App'
import {UrlImage} from '../Utlis/UrlImages'




export default function Render() {

  const User = renderToString(
    <App />
  )

  const html = `<!DOCTYPE html>
    <html lang="en-us" >
    <head>
    <title>Yoga</title>         
    <meta property="og:description" content=" Här finns även tjejgym. Gymmet i Uppsala har, som alla våra andra gym, öppet dygnet runt för alla våra medlemmar, så att du kan träna när det passar dig." />
    <meta property="og:image" content=${UrlImage.LogIcon}  />
    <meta property="og:image:url"  content=${UrlImage.LogIcon}  />
    <meta property="twitter:image" content=${UrlImage.LogIcon}  />

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Raleway:wght@400&display=swap" rel="stylesheet">
<link href="https://fonts.googleapis.com/css2?family=Merriweather+Sans&display=swap" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="/css/main.css" />
    <link rel="icon" type="image/x-icon" href=${UrlImage.LogIcon}>
    <link rel="canonical" href="/" />
   </head>
    <body >
     <div id="yoga">
         ${User}
      </div>
      <script src="./client/bundle.js" defer ></script>
    </body>
  </html>
    `


  return html

}