import {ADD_ITEM, ON_CHANGE_STATE,ON_REMOVE_ELEMENT} from './actionTypes';

export const addItem = (todo) => {
    return {
        type: ADD_ITEM,
        todo: todo
    }
};

export const changeState = (item) => {
    return{
        type:ON_CHANGE_STATE,
        item:item
    }
};

export const removeItem = (item) => {
    return{
        type:ON_REMOVE_ELEMENT,
        item:item
    }
};