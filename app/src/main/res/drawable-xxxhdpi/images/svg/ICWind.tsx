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
        d="M7.857 3C9.041 3 10 4.045 10 5.333c0 1.289-.96 2.334-2.143 2.334H2.286c-.71 0-1.286.626-1.286 1.4 0 .773.576 1.4 1.286 1.4h5.143c.946 0 1.714.835 1.714 1.866 0 1.031-.768 1.867-1.714 1.867M4.8 3a.933.933 0 110 1.867H2"
        stroke="#046FDB"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M12.2 2.867a1 1 0 100 2v-2zm-1.4 3.734a1 1 0 100 2v-2zm2.8 5.666a1 1 0 100 2v-2zm-2.8-2.8a1 1 0 100 2v-2zm1.4-4.6c.479 0 .867.388.867.867h2A2.867 2.867 0 0012.2 2.867v2zm.867.867a.867.867 0 01-.867.867v2a2.867 2.867 0 002.867-2.867h-2zM12.2 6.6h-1.4v2h1.4v-2zm1.4 7.666a2.4 2.4 0 002.4-2.4h-2a.4.4 0 01-.4.4v2zm2.4-2.4a2.4 2.4 0 00-2.4-2.4v2c.22 0 .4.18.4.4h2zm-2.4-2.4h-2.8v2h2.8v-2z"
        fill="#046FDB"
      />
    </Svg>
  );
}

const ICWind = React.memo(SvgComponent);
export default ICWind;
