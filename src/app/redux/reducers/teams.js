const initialState = {
  isFetching: false,
  items: [],
  selected: {},
}

const teams = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_TEAMS':
      return {
        ...state,
        isFetching: true
      }

    case 'RECEIVE_TEAMS':
      return {
        ...state,
        isFetching: false,
        items: action.items
      }

    case 'RECEIVE_SELECTED_TEAM':
      return {
        ...state,
        isFetching: false,
        selected: action.selected
      }

    default:
      return state
  }
}

export default teams
