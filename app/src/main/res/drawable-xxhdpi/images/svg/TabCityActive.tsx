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
        stroke="#046FDB"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2 9h4v6H2zM2 15h4v4H2zM2 19h4v4H2zM10 7h4v4h-4zM10 3h4v4h-4zM10 11h4v4h-4zM10 15h4v4h-4zM10 19h4v4h-4zM18 15h4v8h-4zM1.003 23H23M20.089 14.975V5.061"
      />
    </Svg>
  );
}

const TabCityActive = React.memo(SvgComponent);
export default TabCityActive;
