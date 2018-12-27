/**
 * @jest-environment jsdom
 */

import * as React from 'react'
import * as enzyme from 'enzyme'
import Counter from './Counter'

it('renders the correct text when counter is zero', () => {
  const counter = enzyme.shallow(<Counter/>)
  expect(counter.find('.counter-display').text()).toEqual('0')
})

it('renders the correct text when counter is one', () => {
  const counter = enzyme.shallow(<Counter counter={1}/>)
  expect(counter.find('.counter-display').text()).toEqual('1')
})

it('callback fires when we increment', () => {
  const mockIncrement = jest.fn()
  const counter = enzyme.shallow(<Counter counter={1} onIncrement={mockIncrement}/>)
  counter.find('#increment-button').simulate('click')
  expect(mockIncrement).toHaveBeenCalled()
})
