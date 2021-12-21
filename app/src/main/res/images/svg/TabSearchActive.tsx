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
        d="M15.293 17.707l5 5a1 1 0 001.414-1.414l-5-5a1 1 0 00-1.414 1.414z"
        fill="#046FDB"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M9.5 20a9.5 9.5 0 110-19 9.5 9.5 0 010 19zm0-4a5.5 5.5 0 100-11 5.5 5.5 0 000 11zM2 10.5a7.5 7.5 0 1015 0 7.5 7.5 0 00-15 0z"
        fill="#046FDB"
      />
    </Svg>
  );
}

const TabSearchActive = React.memo(SvgComponent);
export default TabSearchActive;
