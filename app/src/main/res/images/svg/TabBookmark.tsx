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
        d="M10.5 17.333L3 22V2h15v8.916"
        stroke="#596379"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        clipRule="evenodd"
        d="M18 20.886L14.893 23l1.214-3.443L13 17.443h3.821L18 14l1.179 3.443H23l-3.107 2.114L21.07 23 18 20.886v0z"
        stroke="#596379"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const TabBookmark = React.memo(SvgComponent);
export default TabBookmark;
