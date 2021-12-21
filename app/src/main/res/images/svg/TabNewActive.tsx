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
        d="M23 2a1 1 0 00-1-1H2a1 1 0 00-1 1v20a1 1 0 001 1h20a1 1 0 001-1V2zm-5 17H6a1 1 0 110-2h12a1 1 0 110 2zm0-14a1 1 0 011 1v8a1 1 0 01-1 1H6a1 1 0 01-1-1V6a1 1 0 011-1h12zM7 13V7h10v6H7z"
        fill="#046FDB"
      />
    </Svg>
  );
}

const TabNewActive = React.memo(SvgComponent);
export default TabNewActive;
