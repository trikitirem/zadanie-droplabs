import { Outlet, useNavigation } from "react-router-dom";
import { Routes } from "../router";
import { CustomNavLink } from "../components";

export const MainLayout = () => {
  const { state } = useNavigation();

  return (
    <>
      <nav className="bg-blue-700">
        <ul className="flex">
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
