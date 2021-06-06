import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducer/index';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(rootReducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(thunk)
));

export default store;

// createStore有三个参数,后两个是可选参数
// 关于为什么第二个参数不传,可以直接传第三个参数
// createStore接受参数的源码是这样的
// export default function createStore(reducer, preloadedState, enhancer) {
//     if (typeof preloadedState === 'function' && typeof enhancer === 'undefined') {
//         enhancer = preloadedState
//         preloadedState = undefined
//     }

//     if (typeof enhancer !== 'undefined') {
//         if (typeof enhancer !== 'function') {
//             throw new Error('Expected the enhancer to be a function.')
//         }

//         return enhancer(createStore)(reducer, preloadedState)
//     }
// }
// 如果第二个参数是函数并且没传第三个参数,第二个参数会当成第三个参数