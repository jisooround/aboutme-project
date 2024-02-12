import React, { useState } from "react";

type Props = {
  color: string;
  colorHover?: string;
};

const GoSvgUi = ({ color, colorHover }: Props) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <svg
        width="22"
        height="22"
        viewBox="0 0 25 26"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M0.999953 0.5H25V24.5H23V3.91421L1.70706 25.2071L0.292847 23.7929L21.5857 2.5H0.999953V0.5Z"
          fill={colorHover && isHovered ? colorHover : color}
        />
      </svg>
    </div>
  );
};

export default GoSvgUi;
