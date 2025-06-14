
import "@testing-library/jest-dom";
import React from "react";
import { render } from "@testing-library/react";
import { screen, fireEvent } from "@testing-library/dom";
import SearchFiltersBar from "../components/SearchFiltersBar";

describe("SearchFiltersBar", () => {
  const filters = { location: "", propertyType: "", moveInDate: "" };
  let setFilters: jest.Mock;
  let onSubmit: jest.Mock;

  beforeEach(() => {
    setFilters = jest.fn();
    onSubmit = jest.fn();
  });

  it("renders SearchFiltersBar and updates location", () => {
    render(
      <SearchFiltersBar
        filters={filters}
        setFilters={setFilters}
        onSubmit={onSubmit}
        showMoveInDate={true}
      />
    );

    const locationInput = screen.getByPlaceholderText(/city \/ area \/ zip code/i);
    fireEvent.change(locationInput, { target: { value: "Berlin" } });
    expect(setFilters).toHaveBeenCalledWith({ location: "Berlin" });
  });

  it("submits when Search button is clicked", () => {
    render(
      <SearchFiltersBar
        filters={filters}
        setFilters={setFilters}
        onSubmit={onSubmit}
        showMoveInDate={true}
      />
    );
    const button = screen.getByRole("button", { name: /search now/i });
    fireEvent.click(button);
    expect(onSubmit).toHaveBeenCalled();
  });

  it("renders property type options", () => {
    render(
      <SearchFiltersBar
        filters={filters}
        setFilters={setFilters}
        onSubmit={onSubmit}
        showMoveInDate={true}
      />
    );
    fireEvent.mouseDown(screen.getByText(/property type/i));
    expect(screen.getByText("Apartment")).toBeInTheDocument();
    expect(screen.getByText("House")).toBeInTheDocument();
  });
});
