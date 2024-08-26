import React from "react";
import { Routes } from "../router";
import { NavLink } from "react-router-dom";

type CustomNavLinkProps = {
  route: Routes;
  text?: string;
};

export const CustomNavLink: React.FC<CustomNavLinkProps> = ({
  route,
  text,
}) => (
  <NavLink
    to={route}
    className={({ isActive }) =>
      `inline-block text-white px-4 py-2 hover:bg-blue-800 ${isActive && "bg-blue-800"}`
    }
  >
    {text}
  </NavLink>
);
