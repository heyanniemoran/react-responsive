import React, { useState, useEffect } from "react";

export default function useMediaQuery(query: any) {
  let match_media = window.matchMedia(query.query).matches;
  const [state, setState] = useState(match_media);

  useEffect(() => {
    window.addEventListener("resize", function () {
      let match_media_effect = window.matchMedia(query.query).matches;
      setState(match_media_effect);
    });
  });

  return state;
}
