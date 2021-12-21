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
        d="M19.957 32.198c-4.489 0-9.32-1.755-13.97-5.076C2.511 24.64.365 22.18.275 22.076a1.129 1.129 0 010-1.477c.09-.104 2.236-2.564 5.712-5.046 4.65-3.321 9.481-5.076 13.97-5.076 4.488 0 9.319 1.755 13.969 5.076 3.476 2.482 5.622 4.942 5.712 5.046a1.129 1.129 0 010 1.477c-.09.104-2.235 2.564-5.712 5.046-4.65 3.32-9.48 5.076-13.97 5.076zm-17.28-10.86c.867.884 2.504 2.44 4.667 3.979 2.964 2.11 7.559 4.624 12.613 4.624 5.054 0 9.648-2.515 12.613-4.624a35.62 35.62 0 004.667-3.98 35.617 35.617 0 00-4.667-3.979c-2.965-2.11-7.56-4.624-12.613-4.624-5.054 0-9.649 2.515-12.613 4.624a35.614 35.614 0 00-4.668 3.98z"
        fill="#046FDB"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.957 28.402a7.006 7.006 0 01-6.998-6.998 7.006 7.006 0 016.998-6.998c1.697 0 3.334.615 4.609 1.733a1.129 1.129 0 11-1.487 1.698 4.735 4.735 0 00-3.122-1.173 4.746 4.746 0 00-4.74 4.74 4.746 4.746 0 004.74 4.74 4.746 4.746 0 004.74-4.74 1.129 1.129 0 012.257 0 7.005 7.005 0 01-6.997 6.998z"
        fill="#046FDB"
      />
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.957 23.661a2.26 2.26 0 01-2.258-2.257 2.26 2.26 0 012.258-2.258 2.26 2.26 0 012.257 2.258 2.26 2.26 0 01-2.257 2.257z"
        fill="#046FDB"
      />
      <Path
        d="M20.952 1.17a.952.952 0 00-1.904 0v5.914a.952.952 0 001.904 0V1.169zM7.185 4.623a.952.952 0 00-1.65.952l3 5.195a.952.952 0 001.649-.953L7.185 4.623zM34.722 5.128a.952.952 0 10-1.649-.952l-3.21 5.56a.952.952 0 001.649.953l3.21-5.561zM7.433 36.227c.232.128.5.27.8.424.855.436 1.8.872 2.812 1.278 2.482.999 4.953 1.663 7.287 1.834.386.029.767.043 1.142.043.744 0 1.52-.048 2.327-.143 2.016-.235 4.154-.743 6.323-1.44a45.088 45.088 0 003.854-1.44c.152-.065.26-.113.318-.14a.952.952 0 00-.795-1.731 33.78 33.78 0 01-1.094.463c-.877.352-1.843.705-2.866 1.034-2.06.663-4.082 1.143-5.96 1.362-.737.086-1.44.13-2.107.13-.327 0-.662-.012-1.003-.037-2.111-.155-4.4-.77-6.716-1.702A32.782 32.782 0 019.1 34.955a25.334 25.334 0 01-.996-.538.952.952 0 10-.968 1.641c.056.033.156.09.298.169z"
        fill="#046FDB"
      />
    </Svg>
  );
}

const ICSee = React.memo(SvgComponent);
export default ICSee;