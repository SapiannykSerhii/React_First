import { createStore, combineReducers } from 'redux';
import initialState from './initialState.js';
import listsReducer from './listRedux';
import columnsReducer from './columnRedux';
import cardsReducer from './cardRedux';
import searchStringReducer from './searchStringRedux';
// const reducer = (state, action) => {
//   if(action.type === 'ADD_COLUMN') return {...state, columns: [...state.columns, {...action.newColumn, id: shortid()} ]}
//   return state;
// }


const subreducers = {

    lists: listsReducer,
    columns: columnsReducer,
    cards: cardsReducer,
    searchString: searchStringReducer
};
const reducer = combineReducers(subreducers)

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;