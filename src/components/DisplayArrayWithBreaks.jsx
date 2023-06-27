import PropTypes from 'prop-types'

const DisplayArrayWithBreaks = ({ array }) => {
  return (
    <>
      {array.map((item, index) => (
        <h2
          className={`mb-3 text-base font-semibold md:text-xl ${
            index !== 0 ? 'pl-5' : ''
          }`}
          key={index}
        >
          {index === 0 ? `A. ${item}` : `${item}`}
        </h2>
      ))}
    </>
  )
}

DisplayArrayWithBreaks.propTypes = {
  array: PropTypes.array.isRequired,
}

export default DisplayArrayWithBreaks
