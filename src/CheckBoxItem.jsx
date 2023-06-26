import PropTypes from 'prop-types'
import { useId } from 'react'

const CheckBoxItem = ({ choice, selectedCheckBox, setSelectedCheckBox }) => {
  const checkId = useId()
  const handleCheckChange = e => {
    if (e.target.checked) {
      setSelectedCheckBox([...selectedCheckBox, choice])
    } else {
      setSelectedCheckBox(selectedCheckBox.filter(item => item !== choice))
    }
  }
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
            checked={selectedCheckBox.includes(choice)}
            onChange={handleCheckChange}
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
  selectedCheckBox: PropTypes.array.isRequired,
  setSelectedCheckBox: PropTypes.func.isRequired,
}

export default CheckBoxItem
