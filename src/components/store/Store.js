import { createStore } from "redux";
const initialValue = {
  image: [],
  filterImage: [],
  
};
const reducer = (state = initialValue, action) => {
  if (action.type == "Butter Roti") {
    state.image.push({
      image: action.image,
      totalCount: action.count,
      name: action.type,
      price: 15,
      id: Math.random(),
    });
  }
  if (action.type == "Pickle") {
    state.image.push({
      image: action.image,
      totalCount: action.count,
      name: action.type,
      price: 10,
      id: Math.random(),
    });
  }
  if (action.type == "Curd") {
    state.image.push({
      image: action.image,
      totalCount: action.count,
      name: action.type,
      price: 30,
      id: Math.random(),
    });
  }
  if (action.type == "Daal Makhni") {
    state.image.push({
      image: action.image,
      totalCount: action.count,
      name: action.type,
      price: 180,
      id: Math.random(),
    });
  }
  if (action.type == "Paneer Lababdar") {
    state.image.push({
      image: action.image,
      totalCount: action.count,
      name: action.type,
      price: 220,
      id: Math.random(),
    });
  }
  if (action.type == "Gulab Jamun") {
    state.image.push({
      image: action.image,
      totalCount: action.count,
      name: action.type,
      price: 40,
      id: Math.random(),
    });
  }
  if (action.type == "filter") {
    state.filterImage.push(action.data);
  }
  return state;
};
const Store = createStore(reducer);
export default Store;
