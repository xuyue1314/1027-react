import reducers from './reducers'
import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
let middleware =applyMiddleware(thunk)
if(process.env.NODE_ENV==='development'){
  middleware=composeWithDevTools(middleware)
}
export default createStore(reducers,middleware)