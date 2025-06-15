import "@testing-library/jest-dom";
import React from "react";
import { render } from "@testing-library/react";
import { fireEvent } from "@testing-library/dom";
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
    const { getByPlaceholderText } = render(
      <SearchFiltersBar
        filters={filters}
        setFilters={setFilters}
        onSubmit={onSubmit}
        showMoveInDate={true}
      />
    );

    const locationInput = getByPlaceholderText(/city \/ area \/ zip code/i);
    fireEvent.change(locationInput, { target: { value: "Berlin" } });
    expect(setFilters).toHaveBeenCalledWith({ location: "Berlin" });
  });

  it("submits when Search button is clicked", () => {
    const { getByRole } = render(
      <SearchFiltersBar
        filters={filters}
        setFilters={setFilters}
        onSubmit={onSubmit}
        showMoveInDate={true}
      />
    );
    const button = getByRole("button", { name: /search now/i });
    fireEvent.click(button);
    expect(onSubmit).toHaveBeenCalled();
  });

  it("renders property type options", () => {
    const { getByText } = render(
      <SearchFiltersBar
        filters={filters}
        setFilters={setFilters}
        onSubmit={onSubmit}
        showMoveInDate={true}
      />
    );
    fireEvent.mouseDown(getByText(/property type/i));
    expect(getByText("Apartment")).toBeInTheDocument();
    expect(getByText("House")).toBeInTheDocument();
  });
});
