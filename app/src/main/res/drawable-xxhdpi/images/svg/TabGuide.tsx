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
        d="M17.046 22H20V5.958H5.842C4.825 5.958 4 5.072 4 3.98S4.825 2 5.842 2h12.684v3.958"
        stroke="#596379"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4 3.833V20.12C4 21.158 4.82 22 5.833 22h11.181"
        stroke="#596379"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M13 10a1 1 0 10-2 0h2zm-2 8a1 1 0 102 0h-2zm4.605-1.483a1 1 0 10-1.21-1.593l1.21 1.593zM12 18l-.605.796a1 1 0 001.21 0L12 18zm-2.395-3.076a1 1 0 10-1.21 1.593l1.21-1.593zM11 10v8h2v-8h-2zm3.395 4.924l-3 2.28 1.21 1.592 3-2.28-1.21-1.592zm-1.79 2.28l-3-2.28-1.21 1.593 3 2.28 1.21-1.593z"
        fill="#596379"
      />
    </Svg>
  );
}

const TabGuide = React.memo(SvgComponent);
export default TabGuide;
