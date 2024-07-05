import React from "react";

const sizes = {
  textxs: "text-[8px] font-medium",
  texts: "text-[9px] font-medium",
  textmd: "text-[10px] font-medium",
  textlg: "text-[11px] font-medium",
  textxl: "text-xs font-medium",
  text4xl: "text-[17px] font-medium",
  text5xl: "text-lg font-medium",
  headingxs: "text-[10px] font-bold",
  headingmd: "text-sm font-semibold",
  headinglg: "text-base font-bold",
  headingxl: "text-lg font-semibold",
  heading2xl: "text-2xl font-bold",
  heading3xl: "text-[26px] font-semibold sm:text-[22px]",
  heading4xl: "text-[28px] font-bold sm:text-2xl",
  heading5xl: "text-[32px] font-semibold sm:text-[28px]",
  heading6xl: "text-[40px] font-bold sm:text-4xl",
};

const Heading = ({ children, className = "", size = "textxl", as, ...restProps }) => {
  const Component = as || "h6";
  return (
    <Component className={`text-white-a700_01 font-roboto ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
