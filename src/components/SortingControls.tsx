import React from "react";
import { SortBy } from "../types";

type SortingControlsProps = {
  sortBy: SortBy;
  setSortBy(sortBy: SortBy): void;
};

type SortingControlsButtonProps = {
  label: string;
  onClick: VoidFunction;
  isActive?: boolean;
};

const SortingControlsButton: React.FC<SortingControlsButtonProps> = ({
  label,
  onClick,
  isActive,
}) => {
  return (
    <button
      className={`border-none px-2 py-1 rounded ${isActive && "bg-blue-900 text-white"}`}
      onClick={onClick}
    >
      {label.toLocaleLowerCase()}
    </button>
  );
};

export const SortingControls: React.FC<SortingControlsProps> = ({
  sortBy,
  setSortBy,
}) => {
  return (
    <div>
      <span>Sort by: </span>
      {Object.values(SortBy).map((label) => (
        <SortingControlsButton
          key={label}
          label={label}
          onClick={() => setSortBy(label)}
          isActive={sortBy === label}
        />
      ))}
    </div>
  );
};
