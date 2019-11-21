const courseReducer = (state = [], action) => {
  const newArr = [...state];
  const newObj = action.course;
  newArr[newArr.length] = (newObj);
  switch (action.type) {
    case "CREATE_COURSE":
      // return [...state, { ...action.course }];
      return newArr;
    default:
      return state;
  }
};

export default courseReducer;
