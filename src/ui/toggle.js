/**
 * Imports
 */

import element from 'vdux/element'
import {Block, Flex, Input} from 'vdux-ui'
import flatten from 'flatten'

/**
 * Toggle component
 */

function render ({props, children}) {
  const {
    w, value, name, label, labelClass, color = 'secondary', bgColor = 'primary',
    labelPosition = 'left', labelProps = {}, active, ...restProps
  } = props

  const labelBlock = (
    <Block
      tag='label'
      align='start center'
      w='calc(100% - 38px)'
      relative
      overflow='visible'
      flex
      cursor='pointer'
      {...labelProps}
      class={'vui-toggle-label'}>
      {label}
    </Block>
  )

  return (
    <Block
      w={w}
      relative
      cursor='pointer'
      onFocus={[props.onFocus, stopEvent]}
      onBlur={[props.onBlur, stopEvent]}
      onClick={[() => props.onClick(name), stopEvent]}
      {...restProps}>
      <Input absolute wide tall opacity='0' pointerEvents='none' name={name} value={active} type='checkbox'/>
      <Flex cursor='pointer' align='start center'>
        {(label && labelPosition === 'left') && labelBlock}
        <Block relative p='4px 0px 4px 2px' w='36px'>
          <Block
            wide
            pill='30px'
            h='14px'
            opacity='0.5'
            transition='background .3s ease-in-out'
            pointerEvents='none'
            bgColor={active ? bgColor : 'darkgrey'}/>
          <Block
            absolute
            circle
            top='1px'
            lh='24px'
            sq='20px'
            highlight={active}
            ml={active ? '18px' : '0px'}
            bgColor={active ? bgColor : 'lightgray'}
            transition='all .3s ease-in-out'
            pointerEvents='none'
            boxShadow='rgba(0, 0, 0, 0.117647) 0px 1px 6px, rgba(0, 0, 0, 0.117647) 0px 1px 4px' />
        </Block>
        {(label && labelPosition === 'right') && labelBlock}
      </Flex>
    </Block>

  )
}

function stopEvent (e) {
  e.stopPropagation()
  e._rawEvent.stopPropagation()
}

export default {
  render
}
