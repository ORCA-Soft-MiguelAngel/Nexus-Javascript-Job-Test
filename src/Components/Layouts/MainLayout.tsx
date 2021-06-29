import React from "react";
import Menu from "./Menu";

interface props {
  children: React.ReactNode;
}

const MainLayout: React.FC<props> = ({ children }) => {
  return (
    <div>
      <div className="box-content">
        <Menu />
      </div>
      <div>{children}</div>
    </div>
  );
};

export default MainLayout;
