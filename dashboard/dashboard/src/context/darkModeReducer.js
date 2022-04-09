const DarkModeReducer = (state, action) => {
  
  switch (action.type) {
    case "LIGHT": {
      // console.log('action', action)
      return {
        darkMode: false,
      };
    }
    case "DARK": {
      return {
        darkMode: true,
      };
    }
    case "TOGGLE": {
      return {
        darkMode: !state.darkMode,
      };
    }
    default:
      return state;
  }
};

export default DarkModeReducer;