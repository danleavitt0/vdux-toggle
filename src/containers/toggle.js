import {CSSContainer} from 'vdux-containers'
import element from 'vdux/element'
import Toggle from '../ui/toggle'
import handleActions from '@f/handle-actions'
import createAction from '@f/create-action'
import omit from '@f/omit'

function initialState ({props}) {
  const {startActive = false} = props
  return {
    active: startActive
  }
}

function render ({props, children, state, local}) {
  const {ui: Ui = Toggle, onClick} = props
  const {active} = state

  return (
    <Ui zIndex='999' cursor='pointer' onClick={[onClick, local(setActive)]} active={active} {...omit('onClick', props)}/>
  )
}

const setActive = createAction('<Toggle/>: setActive')

const reducer = handleActions({
  [setActive]: (state, active) => ({...state, active: !state.active})
})

export default {
  initialState,
  render,
  reducer
}
