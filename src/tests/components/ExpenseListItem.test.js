import React from "react";
import { shallow } from "enzyme";
import expenses from "../fixtures/expenses";
import ExpenseListItem from "../../components/ExpenseListItem";

test("should render ExpenseListItem correctly", () => {
  const wrapper = shallow(
    <ExpenseListItem
      id={expenses[1].id}
      description={expenses[1].description}
      amount={expenses[1].amount}
      createdAt={expenses[1].createdAt}
    />
  );
  expect(wrapper).toMatchSnapshot();
});
