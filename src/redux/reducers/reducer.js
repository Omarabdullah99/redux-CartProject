const INIT_STATE = {
  carts: [],
};
console.log("INIT_STATE",INIT_STATE)

export const cartreducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case "ADD_CART":
    
    //qunty and cart mix related
    const ItemIndex= state.carts.findIndex((iteam)=> iteam.id === action.payloade.id)
    if(ItemIndex >=0){
      state.carts[ItemIndex].qnty +=1
    }
    else{
      const temp= {...action.payloade, qnty:1}
      return{
        ...state,
        carts: [...state.carts, temp]
      }
    }

    //first state add cart
      // return {
      //   ...state,
      //   carts: [...state.carts, action.payloade],
      // };


    case "RMV_CART":
      const data= state.carts.filter((el)=> el.id !== action.payloade)
      return{
        ...state,
        carts:data
      }

      //details page quantiy drcirment
      case "RMv_ONE":
      const ItemIndex_dec= state.carts.findIndex((iteam)=> iteam.id === action.payloade.id)
      if(state.carts[ItemIndex_dec].qnty >= 1){
        const dltitems = state.carts[ItemIndex_dec].qnty -=1
        return {
          ...state,
          carts:[...state.carts]
        }
      }
      else if(state.carts[ItemIndex_dec].qnty === 1){
        const data= state.carts.filter((el)=> el.id !== action.payloade)
      return{
        ...state,
        carts:data
      }
      }

    default:
      return state;
  }
};
