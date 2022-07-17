import React, { useState, useEffect } from "react";

export default function useMediaQuery(obj: { query: string }) {
  let match_media = window.matchMedia(obj.query).matches;
  const [state, setState] = useState(match_media);

  useEffect(() => {
    window.addEventListener("resize", function () {
      let match_media_effect = window.matchMedia(obj.query).matches;
      setState(match_media_effect);
    });
  });

  return state;
}

export function MediaQuery(props: any) {
  const query_array = [];
  const orientation: string = props.orientation;
  if (orientation) query_array.push("(orientation: " + orientation + ")");
  const minWidth: string = props.minWidth;
  if (minWidth) query_array.push("(min-width: " + minWidth + "px)");
  const maxWidth: string = props.maxWidth;
  if (maxWidth) query_array.push("(max-width: " + maxWidth + "px)");
  const minHeight: string = props.minHeight;
  if (minHeight) query_array.push("(min-height: " + minHeight + "px)");
  const maxHeight: string = props.maxHeight;
  if (maxHeight) query_array.push("(max-height: " + maxHeight + "px)");
  // if (window.matchMedia("(max-height: " + maxHeight + ")").matches)
  //   return <div>{props.children}</div>;

  const minResolution: string | number = props.minResolution;
  if (minResolution)
    query_array.push(
      "(" +
        (typeof minResolution === "string"
          ? "min-resolution"
          : "-webkit-min-device-pixel-ratio") +
        ": " +
        minResolution +
        ")"
    );
  const maxResolution: string | number = props.maxResolution;
  if (maxResolution)
    query_array.push(
      "(" +
        (typeof maxResolution === "string"
          ? "max-resolution"
          : "-webkit-max-device-pixel-ratio") +
        ": " +
        maxResolution +
        ")"
    );

  const query = query_array.join(" and ");
  const res = useMediaQuery({ query: query });
  // debugger;
  if (!res) return null;

  return <div>{props.children}</div>;
}
