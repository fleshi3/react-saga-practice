const initialState = {
  title: 'Book',
  genre: 'Adventure',
  availability: true,
};

const test = (state = initialState, action) => {
  switch (action.type) {
    case 'INITIAL':
      return state;
    default:
      return state;
  }
};

export default test;
