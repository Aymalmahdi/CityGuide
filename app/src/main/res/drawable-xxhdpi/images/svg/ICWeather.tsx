import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      width={32}
      height={32}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M9.77 10.836a4.918 4.918 0 115.066-5.214"
        stroke="#FDC066"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        clipRule="evenodd"
        d="M24.573 18.705a4.967 4.967 0 005.017-4.869 4.967 4.967 0 00-5.017-4.869h-.491a6.688 6.688 0 00-6.246-4.033 6.64 6.64 0 00-6.64 5.656h-.049a4.057 4.057 0 100 8.115h13.426z"
        stroke="#046FDB"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M24.688 22.639a1 1 0 10-2 0h2zm-2 7.869a1 1 0 002 0h-2zm-1.934-7.87a1 1 0 10-2 0h2zm-2 4.919a1 1 0 102 0h-2zm-1.935-4.918a1 1 0 10-2 0h2zm-2 7.869a1 1 0 102 0h-2zm-1.934-7.87a1 1 0 10-2 0h2zm-2 4.919a1 1 0 102 0h-2zm11.803-4.918v7.869h2v-7.87h-2zm-3.934 0v4.918h2v-4.918h-2zm-3.935 0v7.869h2v-7.87h-2zm-3.934 0v4.918h2v-4.918h-2z"
        fill="#046FDB"
      />
    </Svg>
  );
}

const ICWeather = React.memo(SvgComponent);
export default ICWeather;
