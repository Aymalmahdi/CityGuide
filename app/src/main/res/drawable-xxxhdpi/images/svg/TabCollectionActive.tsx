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
        d="M16 4H4v12H1V1h15v3z"
        fill="#046FDB"
      />
      <Path d="M6 6v17h17V6H6z" fill="#046FDB" />
    </Svg>
  );
}

const TabCollectionActive = React.memo(SvgComponent);
export default TabCollectionActive;
