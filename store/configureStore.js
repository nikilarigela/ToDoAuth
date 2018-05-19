import { createStore,combineReducers ,applyMiddleware} from 'redux';
import methodsReducers from './reducers/methodsAndState';
import logger from 'redux-logger'

const rootReducer  = combineReducers({
    methods: methodsReducers
});
const configureStore = () =>{

    return createStore(rootReducer,applyMiddleware(logger));
};
export default  configureStore;