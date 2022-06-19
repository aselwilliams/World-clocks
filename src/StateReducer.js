export const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      const newList = [...state.listOfSelectedTZ, action.payload];
      return {
        ...state,
        listOfSelectedTZ: newList,
      };
    case "REMOVE_ITEM":
      const copyList = state.listOfSelectedTZ.map((el) => ({ ...el }));
      return {
        ...state,
        listOfSelectedTZ: copyList.filter((el) => el.id !== action.payload),
      };
    default:
      return state;
  }
};
