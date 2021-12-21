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
        d="M33.472 32.934C29.968 36.216 25.378 38 20.596 38c-.812 0-1.63-.052-2.45-.156C7.996 36.55.826 27.492 2.16 17.652 3.495 7.813 12.837.86 22.99 2.155c.26.034.519.075.776.118a.972.972 0 01.77.658.932.932 0 01-.257.964c-2.3 2.152-3.866 4.82-4.598 7.788h-2.014a17.504 17.504 0 013.895-7.75c-.337-.02-.672-.03-1.005-.03-8.2 0-15.353 5.908-16.45 13.998C2.912 26.7 9.326 34.8 18.403 35.957c4.417.562 8.799-.596 12.283-3.2a18.596 18.596 0 01-7.9-4.457h3.002a16.843 16.843 0 007.17 3.012.972.972 0 01.77.658.93.93 0 01-.256.963z"
        fill="#3B5998"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M38 25.294c0-.525-.44-.952-.982-.952H32.35l5.298-5.186a.931.931 0 00.209-1.036.983.983 0 00-.906-.585h-6.954c-.542 0-.982.426-.982.952s.44.952.982.952h4.6l-5.298 5.186a.931.931 0 00-.208 1.035c.152.355.51.585.906.585h7.022c.542 0 .982-.425.982-.951zM26.734 25.293c0-.525-.44-.952-.982-.952h-8.663l9.254-9.058a.93.93 0 00.208-1.036.983.983 0 00-.905-.585h-10.91c-.542 0-.982.426-.982.951 0 .526.44.952.982.952h8.556l-9.254 9.059a.93.93 0 00-.208 1.036c.153.354.51.585.906.585h11.016c.542 0 .982-.426.982-.952z"
        fill="#3B5998"
      />
    </Svg>
  );
}

const ICSleep = React.memo(SvgComponent);
export default ICSleep;
