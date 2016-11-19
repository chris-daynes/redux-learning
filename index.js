const Redux = require('redux')
const reducer = require('./reducer')
const React = require('react')
const ReactDOM = require('react-dom')


const Counter = ({
  value,
  onIncrement,
  onDecrement
}) => (
  <div>
    <h1>{value}</h1>
    <button onClick={onIncrement}>+</button>
    <button onClick={onDecrement}>-</button>
  </div>
)

const { createStore } = Redux
const store = createStore(reducer)
const { getState, dispatch, subscribe } = store

const render =  () => {
  ReactDOM.render(
    <Counter
      value={getState()}
      onIncrement={() =>
        dispatch({
          type: 'INCREMENT'
        })
      }
      onDecrement={() =>
        dispatch({
          type: 'DECREMENT'
        })
      }
    />,
    document.getElementById('root')
  )
}

subscribe(render)
render()
