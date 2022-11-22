//********LEVEL 1 ********* *//

const myArray = [3, 6, 7, 8, 4, 2];

const findTheNumberOfOddNumbers = (pArray) => {
  const result = pArray.filter((item) => item % 2 === 1);
  return result.length;
};

//********LEVEL 2 ********* *//

const myArray2 = [45, "Hi", false, true, 23, "Coders"];

const getIndexOfFalseItem = (pArray) => {
  const result = pArray.findIndex((item) => item === false);
  return result;
};

//********LEVEL 3 ********* *//

const myArray3 = [false, "Hi", true, 23, "false", 55];

const filterNumbers = (pNumber) => {
  const result = pNumber.filter((item) => typeof item === "number");
  return result;
};

//********LEVEL 4 ********* *//

const myArray4 = ["Huseyin", "Ahmet", "Mehmet"];

const generateEmailAddress = (pEmail) => {
  const result = pEmail.map((item) => item.toLowerCase() + "@gmail.com");
  return result;
};

export {
  findTheNumberOfOddNumbers,
  getIndexOfFalseItem,
  filterNumbers,
  generateEmailAddress,
};
