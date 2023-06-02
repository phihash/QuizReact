import PropTypes from 'prop-types'
const RunningQuiz = ({ quitQuiz }) => {
  return (
    <>
      <button
        onClick={quitQuiz}
        className="items-center rounded border-b-4 border-red-700 bg-red-600 px-8 py-2 font-bold text-white hover:border-red-600 hover:bg-red-500"
      >
        Quit
      </button>
      <p className="text-center text-2xl font-semibold text-gray-800">
        クイズをここにかいていく
      </p>
    </>
  )
}

RunningQuiz.propTypes = {
  quitQuiz: PropTypes.func.isRequired,
}

export default RunningQuiz
