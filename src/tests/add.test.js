const add = (a, b) => a + b;
const generateGreeting = (name = "Anonymous") => {
  return `Hi ${name}!`;
};

test("should add two numbers", () => {
  const result = add(4, 4);
  expect(result).toBe(8);
});

test("should generate greeting from name", () => {
  const result = generateGreeting("Cathy");
  expect(result).toBe("Hi Cathy!");
});

test("should generate greeting for no name", () => {
  const result = generateGreeting();
  expect(result).toBe("Hi Anonymous!");
});
