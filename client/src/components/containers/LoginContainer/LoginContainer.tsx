import React, { CSSProperties, ReactNode } from "react";
import './LoginContainer.scss';

interface ChildrenProps {
  children?: ReactNode;
  styles?: CSSProperties;
}

const LoginContainer = ({ children, styles }: ChildrenProps) => {
  return (
    <div
      className="LoginContainer"
      style={styles}
    >
      {children}
    </div>
  );
};

export default LoginContainer;