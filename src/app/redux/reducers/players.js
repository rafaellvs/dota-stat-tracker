const initialState = {
  isFetching: false,
  items: [],
  selected: {},
}

const players = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_PLAYERS':
      return {
        ...state,
        isFetching: true,
      }

    case 'RECEIVE_PLAYERS':
      return {
        ...state,
        isFetching: false,
        items: action.items,
      }

    case 'RECEIVE_SELECTED_PLAYER':
      return {
        ...state,
        isFetching: false,
        selected: action.selected,
      }

    default:
      return state
  }
}

export default players
