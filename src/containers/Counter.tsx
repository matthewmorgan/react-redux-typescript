import Counter from '../components/Counter'
import * as actions from '../actions/'
import { StoreState } from '../types/index'
import { connect } from 'react-redux'
import { Dispatch } from 'redux'

const mapStateToProps = ({ counter }: StoreState) => ({ counter })

const mapDispatchToProps = (dispatch: Dispatch<actions.CounterAction>) => ({
  onIncrement: () => dispatch(actions.incrementCounter()),
  onDecrement: () => dispatch(actions.decrementCounter())
})

export default connect(mapStateToProps, mapDispatchToProps)(Counter)
