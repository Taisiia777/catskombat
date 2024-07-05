import React from "react";

const sizes = {
  body_regular: "font-sfprodisplay text-[17px] font-normal not-italic",
  text2xl: "text-sm font-normal not-italic",
  text3xl: "text-base font-normal not-italic",
};

const Text = ({ children, className = "", as, size = "text2xl", ...restProps }) => {
  const Component = as || "p";
  return (
    <Component className={`text-white-a700_01 font-roboto ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
