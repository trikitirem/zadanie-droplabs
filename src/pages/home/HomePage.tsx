import { LocalStorageKey, useLocalStorage } from "../../hooks";
import { generatePath, Link } from "react-router-dom";
import { Routes } from "../../router";

export const HomePage = () => {
  // NOTE: Jak widać do przechowywania ostatniego odwiedzonego produktu używam LocalStorage.
  // Można by tutaj użyć reactowych kontekstów lub biblioteki jak redux, ale w tym przypadku byłby to tak zwany "overkill"
  const { readFromLocalStorage } = useLocalStorage(
    LocalStorageKey.LATEST_VISITED,
  );
  const latestVisited = readFromLocalStorage();

  return (
    <>
      {latestVisited && (
        <Link
          to={generatePath(Routes.PRODUCT_DETAILS, {
            id: latestVisited.toString(),
          })}
        >
          Wróć do przeglądania produktu
        </Link>
      )}
    </>
  );
};
