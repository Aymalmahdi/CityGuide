import * as React from "react";
import Svg, { SvgProps, Path, Circle } from "react-native-svg";

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      width={40}
      height={40}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M26 14c6.627 0 12 5.373 12 12s-5.373 12-12 12-12-5.373-12-12"
        stroke="#046FDB"
        strokeWidth={2}
      />
      <Circle cx={14} cy={14} r={12} stroke="#FE4365" strokeWidth={2} />
      <Path
        d="M16.97 11a3.004 3.004 0 00-2.96-2.5c-1.657 0-3 1.093-3 2.75 0 1.656 1.5 2.407 3 2.75 1.5.343 3 1.093 3 2.75 0 1.658-1.343 2.751-3 2.751a3 3 0 01-3-3"
        stroke="#FE4365"
        strokeWidth={2}
      />
      <Path d="M15.01 8.5V6.8h-2v1.7h2zm0 12.7v-1.7h-2v1.7h2z" fill="#FE4365" />
      <Path d="M26 33.198v-1.7" stroke="#202020" strokeWidth={2} />
      <Path
        d="M23 28.499a3 3 0 003 3c1.657 0 3-1.093 3-2.75 0-1.655-1.5-2.412-3-2.75a5.886 5.886 0 01-1.732-.66M28.958 23a2.996 2.996 0 00-.92-1.701"
        stroke="#046FDB"
        strokeWidth={2}
      />
    </Svg>
  );
}

const ICExchange = React.memo(SvgComponent);
export default ICExchange;
