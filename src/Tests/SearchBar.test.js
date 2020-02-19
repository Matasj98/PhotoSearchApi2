import React from "react";
import { render, fireEvent, cleanup } from "@testing-library/react";
import { initialState, searchTerm } from "../Reducers/searchTerm";
import { setSearchTerm } from "../Actions/setSearchTerm";
import SearchBar from "../Components/SearchBar/SearchBar.component";
import { createStore } from "redux";
import { Provider } from "react-redux";

afterEach(cleanup);
describe("test the reducer and actions", () => {
  it("should return the initial state", () => {
    expect(initialState).toEqual({ term: null });
  });

  it("should change term from null to 'Hello'", () => {
    expect(searchTerm(initialState, setSearchTerm("Hello"))).toEqual({
      term: "Hello"
    });
  });
});

//Need to comment term and input value in SearchBar component to work
describe("Test searchBar input", () => {
  function renderWithRedux(
    ui,
    { initialState, store = createStore(searchTerm, initialState) } = {}
  ) {
    return {
      ...render(<Provider store={store}>{ui}</Provider>),
      store
    };
  }

  test("test if input value changes", () => {
    const { getByLabelText } = renderWithRedux(<SearchBar />, {
      initialState: { term: null }
    });
    fireEvent.change(getByLabelText("search input"), {
      target: { value: 'Dog' }
    });
    expect(getByLabelText("search input").value).toBe("Dog");
  });
});
