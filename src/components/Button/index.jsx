import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  square: "rounded-[0px]",
  round: "rounded-lg",
};

const variants = {
  fill: {
    white_A700_0f: "bg-white-a700_0f",
    white_A700_33: "bg-white-a700_33",
    gray_900_99: "bg-gray-900_99 text-white-a700_01",
    cyan_600: "bg-cyan-600 text-white-a700_01",
    blue_gray_900: "bg-blue-gray-900",
  },
  gradient: {
    deep_purple_A200_cyan_600_01: "bg-gradient text-white-a700_01",
  },
};

const sizes = {
  "3xl": "h-[60px] px-[34px] text-xl",
  "2xl": "h-[48px] px-6 text-base",
  "4xl": "h-[70px] px-4",
  md: "h-[36px] px-1",
  "5xl": "h-[78px] px-[34px] text-xl",
  sm: "h-[32px] px-1",
  lg: "h-[40px] px-2.5 text-xs",
  xl: "h-[42px] px-2",
  xs: "h-[20px]",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape,
  variant = "fill",
  size = "xs",
  color = "blue_gray_900",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex flex-row items-center justify-center text-center cursor-pointer ${shape && shapes[shape]} ${size && sizes[size]} ${variant && variants[variant]?.[color]}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "square", "round"]),
  size: PropTypes.oneOf(["3xl", "2xl", "4xl", "md", "5xl", "sm", "lg", "xl", "xs"]),
  variant: PropTypes.oneOf(["fill", "gradient"]),
  color: PropTypes.oneOf([
    "white_A700_0f",
    "white_A700_33",
    "gray_900_99",
    "cyan_600",
    "blue_gray_900",
    "deep_purple_A200_cyan_600_01",
  ]),
};

export { Button };
