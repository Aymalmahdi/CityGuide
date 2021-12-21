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
        d="M6.12 17H2V2h15v4.12"
        stroke="#596379"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Path
        clipRule="evenodd"
        d="M7 7h15v15H7V7z"
        stroke="#596379"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
}

const TabCollection = React.memo(SvgComponent);
export default TabCollection;
