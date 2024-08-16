import React from "react";

function SocialLink({ name, url }) {
  return (
    <a className="card-link" href={url} target="_blank">
      {name}
    </a>
  );
}

export default SocialLink;
