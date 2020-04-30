import moment from "moment";
export default [
  {
    id: "1",
    description: "Espresso",
    note: "great",
    amount: 1195,
    createdAt: moment(0).valueOf(),
  },
  {
    id: "2",
    description: "Coffee",
    note: "awesome",
    amount: 2590,
    createdAt: moment(0).subtract(4, "days").valueOf(),
  },
  {
    id: "3",
    description: "Road trip",
    note: "fantastic",
    amount: 7850,
    createdAt: moment(0).add(4, "days").valueOf(),
  },
];
