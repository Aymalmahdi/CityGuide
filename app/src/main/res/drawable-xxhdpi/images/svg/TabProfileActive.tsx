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
        d="M16.908 17.266c.345.102.765.2 1.27.29 2.284.413 4.137 2.016 4.78 4.156L23.344 23H.807l.208-1.175c.392-2.2 2.203-3.91 4.484-4.27.592-.1 1.086-.216 1.49-.34 1.274 1.615 3.03 2.618 5.011 2.618 1.923 0 3.64-.986 4.908-2.567z"
        fill="#046FDB"
      />
      <Path
        d="M17.667 10.241c0 4.002-2.476 7.426-5.667 7.426-3.202 0-5.667-3.307-5.667-7.286V7.029C6.333 3.232 8.812 1 12 1c3.226 0 5.667 2.103 5.667 5.889v3.352z"
        fill="#046FDB"
      />
    </Svg>
  );
}

const TabProfileActive = React.memo(SvgComponent);
export default TabProfileActive;
