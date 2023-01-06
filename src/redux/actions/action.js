export const ADD = (item) => {
  console.log("action",item)
  return {
    type: "ADD_CART",
    payloade: item,
  };
};


export const DLT = (id) => {
  
  return {
    type: "RMV_CART",
    payloade: id,
  };
};