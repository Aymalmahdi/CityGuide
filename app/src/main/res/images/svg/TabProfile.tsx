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
        d="M9.333 15.333v1.007c0 .628-.333 1.635-3.666 2.2C3.787 18.839 2.315 20.228 2 22h20c-.533-1.774-2.08-3.113-4-3.46-3.333-.597-3.333-1.572-3.333-2.2v-1.007"
        stroke="#596379"
        strokeWidth={2}
      />
      <Path
        clipRule="evenodd"
        d="M16.667 10.241c0 3.492-2.1 6.426-4.667 6.426-2.567 0-4.667-2.794-4.667-6.286V7.029C7.333 3.397 9.8 2 12 2c2.2 0 4.667 1.257 4.667 4.889v3.352z"
        stroke="#596379"
        strokeWidth={2}
      />
    </Svg>
  );
}

const TabProfile = React.memo(SvgComponent);
export default TabProfile;
