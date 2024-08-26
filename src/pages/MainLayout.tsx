import { Outlet, useNavigation } from "react-router-dom";
import { Routes } from "../router";
import "./styles.css";
import { CustomNavLink } from "../components";

export const MainLayout = () => {
  const { state } = useNavigation();

  return (
    <>
      <nav>
        <ul className="nav-links">
          <li>
            <CustomNavLink route={Routes.HOME} text="Home" />
          </li>
          <li>
            <CustomNavLink route={Routes.PRODUCTS} text="Products" />
          </li>
        </ul>
      </nav>
      <main>{state === "loading" ? <div>Loading...</div> : <Outlet />}</main>
    </>
  );
};
