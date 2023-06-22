import PropTypes from 'prop-types'
import { useId } from 'react'

const CheckBoxItem = ({ choice, setSelectedChoice }) => {
  const checkId = useId()
  return (
    <>
      <div>
        <label
          className="flex w-full max-w-xs rounded-md p-3 text-sm"
          htmlFor={checkId}
        >
          <input
            type="checkbox"
            value={choice}
            id={checkId}
            onChange={e => setSelectedChoice(e.target.value)}
            name="bordered-checkbox"
            className="mt-0.5 shrink-0 rounded-full border-gray-200 text-blue-600"
          />
          <span className="ml-3 text-lg font-semibold text-gray-600">
            {choice}
          </span>
        </label>
      </div>
    </>
  )
}

CheckBoxItem.propTypes = {
  choice: PropTypes.string.isRequired,
  setSelectedChoice: PropTypes.func.isRequired,
}

export default CheckBoxItem
