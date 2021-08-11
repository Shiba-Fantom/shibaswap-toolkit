import React from "react";
import Svg from "../../../components/Svg/Svg";
import { SvgProps } from "../../../components/Svg/types";

const Icon: React.FC<SvgProps> = (props) => {
  return (
    <Svg viewBox="0 0 21 19" {...props}>
      <path d="M3.75405 15.8158C3.79516 14.7394 4.2806 13.8014 5.19614 13.1446C6.41369 12.272 7.25647 11.1637 7.84944 9.83805C8.20364 9.04599 8.78712 8.43028 9.65205 8.1247C10.7921 7.72183 12.0176 8.15663 12.7908 9.21778C12.9948 9.49751 13.1561 9.79852 13.2921 10.1132C13.7791 11.2413 14.5191 12.1762 15.5343 12.9227C16.5273 13.6524 17.2183 14.5752 17.2467 15.831C17.2958 17.9548 15.5516 19.3534 13.3885 18.9217C12.7608 18.797 12.1425 18.6222 11.5306 18.4367C10.8411 18.2284 10.1707 18.2467 9.47812 18.4322C8.76814 18.6222 8.07555 18.8822 7.33554 18.9643C5.27677 19.1923 3.73666 17.8605 3.75405 15.8158Z"/>
      <path d="M9.64602 4.21786C9.62863 4.81837 9.548 5.3231 9.32663 5.80199C8.54391 7.48797 6.38709 7.73273 5.21856 6.26415C4.51016 5.37479 4.36944 4.3486 4.45324 3.27377C4.50543 2.61397 4.62719 1.96481 4.93553 1.36279C5.00194 1.23356 5.06677 1.10282 5.14899 0.982717C5.95384 -0.206138 7.27891 -0.324719 8.28774 0.712108C9.08152 1.5285 9.41043 2.54404 9.58437 3.61887C9.62074 3.84539 9.63179 4.07191 9.64602 4.21786Z"/>
      <path d="M16.5765 3.81308C16.5702 4.54281 16.4437 5.32119 15.9725 6.00987C15.4064 6.8369 14.6411 7.33555 13.5785 7.21089C12.4701 7.08015 11.7838 6.39146 11.5403 5.40024C11.107 3.64433 11.5276 2.02979 12.7768 0.68131C13.7477 -0.366159 15.1455 -0.173084 15.895 1.03553C16.3314 1.74246 16.5639 2.66375 16.5765 3.81308Z"/>
      <path d="M5.0881 9.77343C5.09284 11.1493 4.55047 11.9748 3.59856 12.2712C2.68461 12.5555 1.9098 12.2591 1.24568 11.657C0.478782 10.9623 0.192595 10.0516 0.0566084 9.08322C-0.0335221 8.4447 -0.0303627 7.80771 0.172036 7.18439C0.608457 5.84503 1.84972 5.41936 3.02457 6.26007C4.33384 7.19504 4.9442 8.5116 5.0881 9.77343Z"/>
      <path d="M21.0005 8.40465C20.9499 9.51293 20.7523 10.5786 19.9664 11.4528C19.3892 12.0944 18.6698 12.4775 17.7622 12.3528C16.6648 12.2023 15.8963 11.3175 15.9184 10.159C15.9485 8.58861 16.6395 7.27965 17.9108 6.31276C19.1853 5.34435 20.5894 5.90533 20.9136 7.45144C20.98 7.76614 21.0005 8.08388 21.0005 8.40465Z"/>
    </Svg>
  );
};

export default Icon;