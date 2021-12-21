import * as React from "react";
import Svg, { SvgProps, Path, Circle } from "react-native-svg";

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
        d="M17 17l5 5"
        stroke="#046FDB"
        strokeWidth={2}
        strokeLinecap="round"
      />
      <Circle
        cx={10.5}
        cy={10.5}
        r={8.5}
        stroke="#046FDB"
        strokeWidth={2}
        strokeLinecap="round"
      />
    </Svg>
  );
}

const SearchCityActive = React.memo(SvgComponent);
export default SearchCityActive;
