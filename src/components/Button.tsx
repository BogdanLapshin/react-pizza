import React from "react";
type ButtonPropsType = {
  children?: any;
};
const Button: React.FC<ButtonPropsType> = ({children}) => {
  return <div className="button button--cart">{children}</div>;
};

export default Button;
