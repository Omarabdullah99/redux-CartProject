const INIT_STATE = {
  carts: [],
};
console.log("INIT_STATE",INIT_STATE)

export const cartreducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_CART":
      return {
        ...state,
        carts: [...state.carts, action.payloade],
      };


    case "RMV_CART":
      const data= state.carts.filter((el)=> el.id !== action.payloade)
      return{
        ...state,
        carts:data
      }

    default:
      return state;
  }
};
