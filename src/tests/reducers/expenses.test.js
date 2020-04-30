import expensesReducer from "../../reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set the default state", () => {
  const state = expensesReducer(undefined, { type: "@@INIT" });
  expect(state).toEqual([]);
});

test("should remove expense by id", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: expenses[1].id,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expenses if id not found", () => {
  const action = {
    type: "REMOVE_EXPENSE",
    id: "-13",
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test("should add an expense", () => {
  const trip = {
    id: "5",
    description: "Amboseli visit",
    note: "great",
    createdAt: 9700,
    amount: 15000,
  };
  const action = {
    type: "ADD_EXPENSE",
    expense: trip,
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([...expenses, trip]);
});

test("should edit an expense", () => {
  const description = "visit new york";
  const action = {
    type: "EDIT_EXPENSE",
    id: expenses[2].id,
    updates: {
      description,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state[2].description).toBe(description);
});

test("should not edit an expense if id not found", () => {
  const note = "lively";
  const action = {
    type: "EDIT_EXPENSE",
    id: "18",
    updates: {
      note,
    },
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
