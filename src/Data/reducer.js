//intialState
export const intialState={
    basket:[],
    user:null
}


//selector
export const getBasketDetail=(basket)=>
    basket?.reduce((amount,item)=>item.price+amount,0);


//reducer
export const reducer=(state,action)=>{
 switch(action.type){
     case "ADD_TO_BASKET":
         return {
             ...state,
             basket:[...state.basket,action.item]
         }
       case "REMOVE_FROM_BASKET":
        const index=state.basket.findIndex((basketItem)=>basketItem._ID===action.id);
        let newBasket=[...state.basket];
        if(index>=0){
             newBasket.splice(index,1); 
        }   else{
            console.warn(`can not remove product (_ID:${action.id}) as is not in basket`);
        } 
       return {
               ...state,
               basket:newBasket
           } 
        case "EMPTY_BASKET":
            return{
                ...state,
                basket:[]
            }
        case 'SET_USER':
            return {
                ...state,
                user:action.user
            }    
 default :
   return{
        state
      }  
 }

}