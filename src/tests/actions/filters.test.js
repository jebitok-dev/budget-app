import moment from "moment";
import {
  setTextFilter,
  setStartDate,
  setEndDate,
  sortByDate,
  sortByAmount
} from "../../actions/filters";

test("should generate set text filter with text value", () => {
  const text = "seattle";
  const action = setTextFilter(text);
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text
  });
});

test("should generate set text filter with default value", () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: "SET_TEXT_FILTER",
    text: ""
  });
});

test("should generate set start date action object", () => {
  const action = setStartDate(moment(350));
  expect(action).toEqual({
    type: "SET_START_DATE",
    startDate: moment(350)
  });
});

test("should generate set end date action object", () => {
  const action = setEndDate(moment(500));
  expect(action).toEqual({
    type: "SET_END_DATE",
    endDate: moment(500)
  });
});

test("should generate action object for sort by date", () => {
  const action = sortByDate();
  expect(action).toEqual({ type: "SORT_BY_DATE" });
});

test("should generate action object for sort by amount", () => {
  expect(sortByAmount()).toEqual({ type: "SORT_BY_AMOUNT" });
});
