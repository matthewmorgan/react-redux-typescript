import * as React from 'react'
import * as ReactDOM from 'react-dom'
import { CounterAction } from './actions'
import Counter from './containers/Counter'
import { Provider } from 'react-redux'

import './index.css'
import registerServiceWorker from './registerServiceWorker'

import { createStore, StoreEnhancer } from 'redux'
import { counter } from './reducers/index'
import { StoreState } from './types/index'

const store = createStore<StoreState, CounterAction, StoreEnhancer, any>(
    counter,
    { counter: 1 },
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
)

ReactDOM.render(
    <Provider store={store}>
      <Counter/>
    </Provider>,
    document.getElementById('root') as HTMLElement
)

registerServiceWorker()
