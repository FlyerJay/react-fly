import { createStore, applyMiddleware} from 'redux';
import reducer from '../reducer';
var store = createStore(
    reducer
)
export default store;