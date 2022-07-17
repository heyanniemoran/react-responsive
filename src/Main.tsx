import React from "react";
import useMediaQuery from "./Responsive";

export const Main = () => {
  const isDesktopOrLaptop: boolean = useMediaQuery({
    query: "(min-width: 1224px)",
  });
  const isBigScreen: boolean = useMediaQuery({ query: "(min-width: 1260px)" });
  const isTabletOrMobile: boolean = useMediaQuery({
    query: "(max-width: 1224px)",
  });
  const isPortrait: boolean = useMediaQuery({
    query: "(orientation: portrait)",
  });
  const isRetina: boolean = useMediaQuery({ query: "(min-resolution: 2dppx)" });
  return (
    <div>
      <h1>Device Test!</h1>
      {isDesktopOrLaptop && <p>You are a desktop or laptop</p>}
      {isBigScreen && <p>You have a huge screen</p>}
      {isTabletOrMobile && <p>You are a tablet or mobile phone</p>}
      <p>Your are in {isPortrait ? "portrait" : "landscape"} orientation</p>
      {isRetina && <p>You are retina</p>}
    </div>
  );
};
