export default (state = { list: [], counter:0}, action) => {
  if (action.type === 'add_to_cart') {
    let isDulplicate = false;
    let indexOfDulplicate;
    const itemSize = action.value.size;
    let { list, counter } = state;
    //console.log(list)
    if (list.length === 0) {
      list.push(action.value);
      counter += 1;
    }
    else {
      for(let i in list){
        if (list[i].size === itemSize){
          isDulplicate = true;
          indexOfDulplicate = i;
        }
      }

      if(!isDulplicate){
        list.push(action.value); 
        counter += 1;
      }
      else{
        list[indexOfDulplicate].quantity += 1;
        counter += 1;
      }
    } 
    return {...state, list,counter};
  }
  //console.log(state,action)
}