const initialState = {
  isFetching: false,
  items: {
    search: [],
    proMatches: [],
    publicMatches: [],
  },
  selected: {},
}

const matches = (state = initialState, action) => {
  switch (action.type) {
    case 'REQUEST_MATCHES':
      return {
        ...state,
        isFetching: true,
      }

    case 'RECEIVE_SELECTED_MATCH':
      return {
        ...state,
        isFetching: false,
        selected: action.selected,
      }

    case 'RECEIVE_MATCHES':
      return {
        ...state,
        isFetching: false,
        items: {
          ...state.items,
          search:
            Array.isArray(action.items)
              ? action.items
              : [action.items],
        },
      }

    case 'RECEIVE_PRO_MATCHES':
      return {
        ...state,
        isFetching: false,
        items: {
          ...state.items,
          proMatches: action.proMatches,
        },
      }

    case 'RECEIVE_PUBLIC_MATCHES':
      return {
        ...state,
        isFetching: false,
        items: {
          ...state.items,
          publicMatches: action.publicMatches,
        },
      }

    case 'RECEIVE_ALL_MATCHES':
      return {
        ...state,
        isFetching: false,
        items: {
          ...state.items,
          proMatches: action.proMatches,
          publicMatches: action.publicMatches,
        },
      }

    default:
      return state
  }
}

export default matches
