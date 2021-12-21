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
        d="M8.863 40h23.703c.462 0 .434-.375.434-.837V3.721c0-.462.029-.837-.434-.837h-.946V.837A.837.837 0 0030.783 0h-7.866a.837.837 0 00-.836.837v2.047H8.863a.837.837 0 00-.836.837v35.442c0 .462.374.837.836.837zM29.947 1.946v.938H24.03v-.938h5.916zM31 8.076H10V5h21v3.076zm-21 25.06V9.748h21v23.386H10zm0 1.672h21v3.519H10v-3.519z"
        fill="#9013FE"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M23.909 22.587c0-2.475-3.852-8.255-4.29-8.906a.837.837 0 00-1.388 0c-.44.651-4.29 6.431-4.29 8.906a4.99 4.99 0 004.984 4.985 4.99 4.99 0 004.984-4.985zm-1.674 0a3.314 3.314 0 01-3.31 3.311 3.315 3.315 0 01-3.311-3.31c0-1.275 1.817-4.556 3.31-6.91 1.494 2.354 3.311 5.634 3.311 6.91zM29 20.651v-.314c0-.462-.448-.837-1-.837s-1 .375-1 .837v.314c0 .462.448.837 1 .837s1-.375 1-.837zM29 31.123v-8.246c0-.484-.448-.877-1-.877s-1 .393-1 .877v8.246c0 .484.448.877 1 .877s1-.393 1-.877z"
        fill="#9013FE"
      />
    </Svg>
  );
}

const ICDrink = React.memo(SvgComponent);
export default ICDrink;
