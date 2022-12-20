import React from "react";

export default function Notice({ imgUrl, textContent, anchorContent }) {
  return (
    <section>
      <img src={imgUrl} alt="#" />
      <h3>{textContent}</h3>
      <a href="#;">{anchorContent}</a>
    </section>
  );
}
