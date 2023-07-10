import PropTypes from 'prop-types'
import { useId } from 'react'

const RadioItem = ({ choice, setSelectedChoice }) => {
  const radioId = useId()
  return (
    <div>
      <label
        htmlFor={radioId}
        className="flex w-full max-w-xs cursor-pointer rounded-md p-3 text-sm"
      >
        <input
          type="radio"
          name="hs-vertical-radio-in-form"
          className="pointer-events-none mt-0.5 shrink-0 rounded-full border-gray-200 text-blue-600"
          id={radioId}
          value={choice}
          onChange={e => setSelectedChoice(e.target.value)}
        />
        <span className="ml-3 text-lg font-semibold text-gray-600">
          {choice}
        </span>
      </label>
    </div>
  )
}

RadioItem.propTypes = {
  choice: PropTypes.string.isRequired,
  setSelectedChoice: PropTypes.func.isRequired,
}

export default RadioItem
