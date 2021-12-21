import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

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
        fillRule="evenodd"
        clipRule="evenodd"
        d="M37.014 12.526l-1.569-6.652C35.01 3.948 33.08 2.73 31.14 3.158L2.83 9.4C.885 9.83-.345 11.748.086 13.677l3.63 16.39v4.314c0 1.978 1.62 3.587 3.61 3.587h29c1.99 0 3.61-1.61 3.61-3.587V16.046c0-1.744-1.26-3.2-2.922-3.52zm-.689 2.248c.707 0 1.282.57 1.282 1.272v3.084H6.046v-3.084c0-.701.574-1.272 1.28-1.272h29zm1.282 9.283H6.046v-2.612h31.56v2.611zm-33.892-8.01v3.246l-1.354-6.116a1.274 1.274 0 01.973-1.518l28.31-6.242a1.283 1.283 0 011.528.967l.003.013 1.43 6.062H7.327c-1.992 0-3.612 1.61-3.612 3.587zM37.607 34.38c0 .702-.575 1.272-1.281 1.272h-29c-.706 0-1.28-.57-1.28-1.272V29.93v-3.558h31.56v8.01z"
        fill="#417505"
      />
    </Svg>
  );
}

const ICBank = React.memo(SvgComponent);
export default ICBank;
