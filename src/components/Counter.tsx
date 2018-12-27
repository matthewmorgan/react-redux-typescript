import * as React from 'react'

import './counter.css'

export interface Props {
  counter?: number
  onIncrement?: () => void
  onDecrement?: () => void
}

function Counter({ counter = 0, onIncrement, onDecrement }: Props) {
  return (
      <div className='counter'>
        <div className='counter counter-display'>
          {counter}
        </div>
        <div>
          <button id='decrement-button' onClick={onDecrement}>-</button>
          <button id='increment-button' onClick={onIncrement}>+</button>
        </div>
      </div>
  )
}

export default Counter
