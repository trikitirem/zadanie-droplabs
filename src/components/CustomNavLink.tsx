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
    className={({ isActive }) => (isActive ? "active-link" : undefined)}
  >
    {text}
  </NavLink>
);
