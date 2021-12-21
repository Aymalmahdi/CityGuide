import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      width={16}
      height={16}
      viewBox="0 0 16 16"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        clipRule="evenodd"
        d="M12.738 9.89a4.72 4.72 0 00-.238-1.143C11.547 5.387 8 1 8 1S4.452 5.387 3.476 8.747c-.126.37-.206.754-.238 1.143 0 .117-.024.233-.024.35a4.665 4.665 0 001.383 3.355A4.859 4.859 0 008 15a4.858 4.858 0 003.387-1.413 4.664 4.664 0 001.375-3.347c0-.117 0-.233-.024-.35z"
        stroke="#046FDB"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ICAir = React.memo(SvgComponent);
export default ICAir;
