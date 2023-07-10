import PropTypes from 'prop-types'

const DisplayArrayWithBreaks = ({ wrongQuizzes }) => {
  return (
    <>
      {wrongQuizzes.map((item, index) => (
        <h2 className={`mb-3 text-base font-semibold md:text-xl`} key={index}>
          {index === 0 ? `A. ${item}` : `->${item}`}
        </h2>
      ))}
    </>
  )
}

DisplayArrayWithBreaks.propTypes = {
  wrongQuizzes: PropTypes.array.isRequired,
}

export default DisplayArrayWithBreaks
