import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M17.526 4.958H5.842c-.464 0-.842-.439-.842-.979C5 3.438 5.378 3 5.842 3h11.684v1.958zm-1.92 11.559l-2.994 2.273a.997.997 0 01-.595.21c-.01-.002-.012 0-.017 0-.007 0-.016-.002-.017 0a.997.997 0 01-.596-.21l-2.992-2.273a1.001 1.001 0 011.21-1.593L11 15.984V10a1 1 0 112 0v5.984l1.395-1.06a1 1 0 011.21 1.593zM20 4.958h-.474V2a1 1 0 00-1-1H5.842C4.366 1 3.163 2.189 3.026 3.7 3.02 3.746 3 3.786 3 3.833V20.12C3 21.708 4.271 23 5.833 23h11.181c.006 0 .01-.003.016-.004.006.001.01.004.016.004H20a1 1 0 001-1V5.958a1 1 0 00-1-1z"
        fill="#046FDB"
      />
    </Svg>
  );
}

const TabGuideActive = React.memo(SvgComponent);
export default TabGuideActive;
