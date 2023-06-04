import PropTypes from 'prop-types'

const RadioItem = ({ choice, index }) => {
  return (
    <div>
      <label
        htmlFor={`choice-${index}`}
        className="block flex w-full max-w-xs rounded-md p-3 text-sm"
      >
        <input
          type="radio"
          name="hs-vertical-radio-in-form"
          className="pointer-events-none mt-0.5 shrink-0 rounded-full border-gray-200 text-blue-600"
          id={`choice-${index}`}
          value={choice}
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
  index: PropTypes.number.isRequired,
}

export default RadioItem
