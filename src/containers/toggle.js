import {CSSContainer} from 'vdux-containers'
import {component, element} from 'vdux'
import Toggle from '../ui/toggle'
import omit from '@f/omit'

export default component ({
  initialState ({props}) {
    const {startActive = false} = props
    return {
      active: startActive
    }
  },
  render ({props, state, actions}) {
    const {ui: Ui = Toggle, onClick} = props
    const {active} = state

    return (
      <Ui zIndex='999' cursor='pointer' onClick={[onClick, actions.setActive]} active={active} {...omit('onClick', props)}/>
    )
  },
  reducer: {
    setActive: (state) => ({active: !state.active})
  }
})
