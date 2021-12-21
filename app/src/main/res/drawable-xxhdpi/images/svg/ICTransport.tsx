import * as React from "react";
import Svg, { SvgProps, Path, Ellipse } from "react-native-svg";

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
        d="M12.507 34.732a1 1 0 10-1.016-1.722l1.016 1.722zM5.492 36.55a1 1 0 001.017 1.723l-1.017-1.723zm22.617-3.54a1 1 0 10-1.016 1.723l1.016-1.722zm4.981 5.263a1 1 0 101.017-1.723l-1.017 1.723zM11.491 33.01l-5.999 3.539 1.017 1.723 5.998-3.54-1.016-1.722zm15.602 1.722l5.997 3.54 1.017-1.723-5.998-3.54-1.016 1.723z"
        fill="#353B48"
      />
      <Path
        d="M17.4 5.366a1 1 0 000-2v2zm-7.8-1v1-1zM7.8 17.567l.33.944a1 1 0 00.67-.944h-1zm24 0h-1a1 1 0 00.67.944l.33-.944zM22.2 3.365a1 1 0 100 2v-2zM6.6 23.428a1 1 0 100 2v-2zm26.4 2a1 1 0 000-2v2zM17.4 3.366H9.6v2h7.8v-2zm-7.8 0c-1.53 0-2.8 1.225-2.8 2.77h2c0-.41.342-.77.8-.77v-2zm-2.8 2.77v11.431h2V6.137h-2zm.67 10.487c-.492.172-.904.439-1.216.814a2.73 2.73 0 00-.555 1.186c-.155.717-.1 1.616-.1 2.269h2c0-.887-.04-1.406.055-1.845a.753.753 0 01.139-.332c.044-.053.131-.132.337-.204l-.66-1.888zM5.6 20.892v9.438h2v-9.438h-2zm0 9.438c0 2.523 2.075 4.54 4.6 4.54v-2c-1.452 0-2.6-1.153-2.6-2.54h-2zm4.6 4.54h19.2v-2H10.2v2zm19.2 0c2.525 0 4.6-2.017 4.6-4.54h-2c0 1.387-1.148 2.54-2.6 2.54v2zm4.6-4.54v-9.438h-2v9.438h2zm0-9.438c0-.653.056-1.552-.1-2.27a2.73 2.73 0 00-.554-1.185c-.312-.375-.724-.642-1.216-.814l-.66 1.888c.206.072.293.15.337.204.048.058.1.153.14.332.094.439.053.958.053 1.845h2zm-1.2-3.325V6.136h-2v11.431h2zm0-11.431c0-1.546-1.27-2.77-2.8-2.77v2c.457 0 .8.36.8.77h2zM30 3.366h-7.8v2H30v-2zM6.6 25.427H33v-2H6.6v2z"
        fill="#046FDB"
      />
      <Ellipse
        cx={19.8}
        cy={4.363}
        rx={2.4}
        ry={2.361}
        stroke="#FE4365"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Ellipse
        cx={13.8}
        cy={18.528}
        rx={1.2}
        ry={1.18}
        stroke="#FE4365"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Ellipse
        cx={25.8}
        cy={18.528}
        rx={1.2}
        ry={1.18}
        stroke="#FE4365"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M7.8 12.625h24"
        stroke="#046FDB"
        strokeWidth={2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

const ICTransport = React.memo(SvgComponent);
export default ICTransport;
