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
        d="M17.873 7.585H8.759c.267-2.421 2.2-4.265 4.553-4.265 2.35 0 4.286 1.844 4.56 4.265zm2.219-.009C19.817 3.86 16.91 1 13.329 1c-3.52 0-6.484 2.917-6.763 6.576H1.1c-.607 0-1.1.52-1.1 1.16V34.21C.009 37.402 2.473 40 5.492 40h9.393c.607 0 1.1-.521 1.1-1.16 0-.64-.493-1.16-1.1-1.16H5.492c-1.815 0-3.292-1.558-3.292-3.472V9.896h4.33v2.92c0 .64.493 1.16 1.1 1.16.607 0 1.1-.52 1.1-1.16v-2.92h9.18v2.92c0 .64.493 1.16 1.1 1.16.607 0 1.1-.52 1.1-1.16v-2.92h4.33v.376c0 .64.495 1.16 1.1 1.16.607 0 1.1-.52 1.1-1.16V8.736c0-.64-.493-1.16-1.1-1.16h-5.448z"
        fill="#7ED321"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M25.427 19.484v-.662c.007-1.95 1.536-3.538 3.406-3.538 1.878 0 3.407 1.586 3.407 3.536v.664h-6.813zm-1.091 5.208c.606 0 1.099-.512 1.099-1.142v-1.79h6.812v1.79c0 .63.494 1.142 1.1 1.142.607 0 1.1-.512 1.1-1.142v-1.79h3.066v14.266c0 .931-.73 1.689-1.627 1.689H21.788c-.897 0-1.626-.758-1.626-1.69V21.76h3.073v1.79c0 .63.493 1.143 1.101 1.143zm14.277-5.217H34.44v-.663c0-3.205-2.512-5.812-5.598-5.812-3.092 0-5.607 2.61-5.607 5.82v.664h-4.173c-.607 0-1.1.512-1.1 1.142v15.4c0 2.191 1.717 3.974 3.826 3.974h14.098c2.11 0 3.827-1.783 3.827-3.974V20.617c0-.63-.493-1.142-1.1-1.142z"
        fill="#7ED321"
      />
    </Svg>
  );
}

const ICShopping = React.memo(SvgComponent);
export default ICShopping;
