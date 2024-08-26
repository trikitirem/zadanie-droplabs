export enum LocalStorageKey {
  LATEST_VISITED = "LATEST_VISITED",
}

export const useLocalStorage = (storageKey: LocalStorageKey) => {
  const writeToLocalStorage = (value: number) =>
    localStorage.setItem(storageKey, value.toString());

  const readFromLocalStorage = (): number | null => {
    const value = localStorage.getItem(storageKey);
    return value ? +value : null;
  };

  return { writeToLocalStorage, readFromLocalStorage };
};
