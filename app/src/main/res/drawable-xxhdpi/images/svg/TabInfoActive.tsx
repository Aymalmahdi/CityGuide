import * as React from "react";
import Svg, { SvgProps, Circle, Path } from "react-native-svg";

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
      <Circle
        cx={12}
        cy={12}
        r={10}
        stroke="#046FDB"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.666 9a1 1 0 100 2V9zM12 10h1a1 1 0 00-1-1v1zm-1 7.333a1 1 0 002 0h-2zm-.334-.997a1 1 0 100 2v-2zm2.667 2a1 1 0 100-2v2zM10.666 11H12V9h-1.334v2zM11 10v7.333h2V10h-2zm-.334 8.336h2.667v-2h-2.667v2z"
        fill="#046FDB"
      />
      <Circle
        cx={11.667}
        cy={6.667}
        r={0.667}
        stroke="#046FDB"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const TabInfoActive = React.memo(SvgComponent);
export default TabInfoActive;
