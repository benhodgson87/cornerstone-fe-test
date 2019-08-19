import React from "react";
import { Global, css } from "@emotion/core";
import emotionNormalize from "emotion-normalize";

const GlobalStyles = () => (
  <Global
    styles={css`
      ${emotionNormalize}

      html {
        box-sizing: border-box;

        /* Base em/rem font size */
        font-size: 16px;
      }

      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }

      body {
        padding: 2em;
        margin: 0;
        background-color: #fff;
        font-family: sans-serif;
      }

      a,
      a:visited,
      a:active {
        color: #c41e3a;
      }
      a:hover {
        text-decoration: none;
      }
    `}
  />
);

export default GlobalStyles;
