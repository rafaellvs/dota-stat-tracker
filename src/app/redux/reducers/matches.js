const initialState = {
  isFetching: false,
  items: [],
  selected: {}
}

const matches = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_MATCHES':
      return {
        ...state,
        isFetching: true
      }

    case 'RECEIVE_MATCHES':
      return {
        ...state,
        isFetching: false,
        items: Array.isArray(action.items) ? action.items : [action.items]
      }

    case 'RECEIVE_SELECTED_MATCH':
      return {
        ...state,
        isFetching: false,
        selected: action.selected
      }

    default:
      return state
  }
}

export default matches
