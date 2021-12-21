import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

function SvgComponent(props: SvgProps) {
  return (
    <Svg
      width={80}
      height={80}
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M23.556 44.962a2 2 0 001.728-3.608l-1.728 3.608zm16.13-17.426a2 2 0 103.667-1.598l-3.666 1.598zM31.867 4a2 2 0 00-4 0h4zm-4 7.579a2 2 0 104 0h-4zM9.6 33.789a2 2 0 000-4v4zm-7.6-4a2 2 0 100 4v-4zm9.519-19.121A2 2 0 008.694 13.5l2.825-2.832zm2.622 8.264a2 2 0 002.825-2.832l-2.825 2.832zM51.04 13.5a2 2 0 00-2.825-2.832L51.04 13.5zm-8.271 2.6a2 2 0 002.824 2.832L42.768 16.1zM16.966 47.48a2 2 0 10-2.825-2.833l2.825 2.832zm-8.272 2.599a2 2 0 102.825 2.832l-2.825-2.832zm16.59-8.725a10.623 10.623 0 01-5.909-11.295l-3.947-.646a14.623 14.623 0 008.128 15.549l1.728-3.608zm-5.909-11.295a10.651 10.651 0 019.207-8.838l-.494-3.97c-6.454.803-11.611 5.752-12.66 12.162l3.947.646zm9.207-8.838c4.7-.584 9.22 1.99 11.105 6.315l3.666-1.598c-2.594-5.955-8.811-9.489-15.265-8.686l.494 3.97zM27.867 4v7.579h4V4h-4zM9.6 29.79H2v4h7.6v-4zM8.694 13.5l5.447 5.432 2.825-2.832-5.447-5.432L8.694 13.5zm39.52-2.832L42.768 16.1l2.824 2.832L51.04 13.5l-2.825-2.832zM14.141 44.647l-5.447 5.432 2.825 2.832 5.447-5.432-2.825-2.832z"
        fill="#FDC066"
      />
      <Path
        d="M78 46.947c0-6.976-5.671-12.632-12.667-12.632-2.91-7.073-10.332-11.208-17.899-9.97-7.566 1.237-13.275 7.519-13.767 15.15H32.4a10.128 10.128 0 00-9.753 7.578"
        stroke="#046FDB"
        strokeWidth={4}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M22.267 52.525a2 2 0 100 4v-4zm55.606 4a2 2 0 000-4v4zm-50.54 6.106a2 2 0 100 4v-4zm45.474 4a2 2 0 000-4v4zm-35.34 6.105a2 2 0 100 4v-4zm30.273 4a2 2 0 100-4v4zm-42.813-4a2 2 0 100 4v-4zm4.94 4a2 2 0 100-4v4zm-7.6-20.21h55.606v-4H22.267v4zm5.066 10.105h45.474v-4H27.333v4zm10.134 10.105H67.74v-4H37.467v4zm-12.54 0h4.94v-4h-4.94v4z"
        fill="#046FDB"
      />
    </Svg>
  );
}

const ICWeatherSun = React.memo(SvgComponent);
export default ICWeatherSun;
