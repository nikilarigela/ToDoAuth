import {ADD_ITEM, ON_CHANGE_STATE, ON_REMOVE_ELEMENT} from "../actions/actionTypes";


const initialState = {
    todoItems: [],
    todo: "",
    icon: ""
};

const reducer =(state = initialState, action ) => {
    switch (action.type){

        case ADD_ITEM:
            console.log("ADD TODO CALLED");
            console.log(action.todo);

            return {
                ...state,
                todoItems: state.todoItems
                    .concat(action.todo)
            };

        case ON_CHANGE_STATE:
              let changeItems = [...state.todoItems];
            let index = changeItems.indexOf(action.item);
            changeItems[index].status = !changeItems[index].status;

            return{
                ...state,
                todoItems: changeItems
            };

        case ON_REMOVE_ELEMENT:
            let items = [...state.todoItems];
            let removeindex = state.todoItems.indexOf(action.item);
            items.splice(removeindex,1)    
            console.log(items)
            return{
               ...state,
               todoItems: items
           };
        default:
            return state;
    }

};

export default reducer;