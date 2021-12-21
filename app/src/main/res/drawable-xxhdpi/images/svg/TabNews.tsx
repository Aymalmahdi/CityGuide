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
        clipRule="evenodd"
        d="M2 2h20v20H2V2z"
        stroke="#596379"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M6 18h12"
        stroke="#596379"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        clipRule="evenodd"
        d="M6 6h12v8H6V6z"
        stroke="#596379"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const TabNews = React.memo(SvgComponent);
export default TabNews;
