
const initialState = {
  count: 0,
  data: {

  },
  amigos: ["Franco", "Toni"],
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return {
        ...state,
        count: state.count + 1,
      }
    case 'DECREMENT':
      return {
        ...state,
        count: state.count - 1,
      }
    case 'RESET':
      return {
        ...state,
        count: 0,
      }
    case 'ADD_FRIEND':
      state.amigos.push("Tito");// esta mal, ya que me modifica el estado antiguo, y reacto solo detecta estados nuevos por lo tanto, se modifica el return de la siguiente manera:
      return {
        ...state,
       // amigos: state.amigos
       amigos: [...state.amigos, 'Tito']//así modificaríamos el estado a uno nuevo
      };
    default:
      return {...state}
  }
}
