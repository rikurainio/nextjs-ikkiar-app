import { useState } from 'react'

const Togglable = (props) => {
  const [visible, setVisible] = useState(false)

  const hideWhenVisible = { display: visible ? 'none' : '' }
  const showWhenVisible = { display: visible ? '' : 'none' }

  const toggleVisibility = () => {
    setVisible(!visible)
  }

  return (
    <div>
      <div style={hideWhenVisible}>
        <div className='flex justify-end mr-2 text-sm hover:text-ikkiarDark'>
            <button onClick={toggleVisibility}>{props.buttonLabel}</button>
        </div>
      </div>
      <div style={showWhenVisible}>
        {props.children}
        <div className='flex justify-end mr-2 text-sm hover:text-ikkiarDark'>
            <button onClick={toggleVisibility}>show less</button>
        </div>
      </div>
    </div>
  )
}

export default Togglable