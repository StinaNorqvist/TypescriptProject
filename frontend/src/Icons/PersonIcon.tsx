import React from "react";

const PersonIcon: React.FunctionComponent<React.SVGProps<SVGSVGElement>> = (
  props
) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="2em"
      viewBox="0 0 300 300"
      {...props}
    >
      <path
        fill="currentColor"
        d="M128 28a100 100 0 1 0 100 100A100.11 100.11 0 0 0 128 28M68.87 198.42a68 68 0 0 1 118.26 0a91.8 91.8 0 0 1-118.26 0m124.3-5.55a75.61 75.61 0 0 0-44.51-34a44 44 0 1 0-41.32 0a75.61 75.61 0 0 0-44.51 34a92 92 0 1 1 130.34 0M128 156a36 36 0 1 1 36-36a36 36 0 0 1-36 36"
      ></path>
    </svg>
  );
};

export default PersonIcon;
