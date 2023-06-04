import PropTypes from 'prop-types'
import RadioItem from './RadioItem'
const RunningQuiz = ({
  quitQuiz,
  quizzes,
  currentIndex,
  setCurrentIndex,
  setSelectedChoice,
  selectedChoice,
}) => {
  console.log(quizzes)
  const handleNext = () => {
    // 最後の問題に達していないか確認します
    if (currentIndex < quizzes.length - 1) {
      //条件式に何か答えが選択されていることも増やしておく
      setCurrentIndex(currentIndex + 1)
      setSelectedChoice(null)
    } else {
      // ここで何か終了処理を行います（例：結果画面に移行する等）
      console.log('Quiz Finished!')
    }
  }
  return (
    <>
      <button
        onClick={quitQuiz}
        className="items-center rounded border-b-4 border-red-700 bg-red-600 px-8 py-2 font-bold text-white hover:border-red-600 hover:bg-red-500"
      >
        Quit
      </button>

      <p className="mt-8 text-center text-2xl font-semibold text-gray-700">
        {quizzes[currentIndex].question}
      </p>

      <div className="my-8 grid space-y-2">
        {quizzes[currentIndex].choices.map((choice, index) => {
          return (
            <RadioItem
              key={choice}
              index={index}
              choice={choice}
              setSelectedChoice={setSelectedChoice}
              selectedChoice={selectedChoice}
            ></RadioItem>
          )
        })}
      </div>
      <button
        onClick={handleNext}
        disabled={!selectedChoice}
        className="items-center rounded border-b-4 border-blue-600 bg-blue-500 px-8 py-2 font-bold text-white hover:border-blue-500 hover:bg-blue-400"
      >
        Next
      </button>
    </>
  )
}

RunningQuiz.propTypes = {
  quizzes: PropTypes.array.isRequired,
  quitQuiz: PropTypes.func.isRequired,
  currentIndex: PropTypes.number.isRequired,
  setCurrentIndex: PropTypes.func.isRequired,
  selectedChoice: PropTypes.bool.isRequired,
  setSelectedChoice: PropTypes.func.isRequired,
}

export default RunningQuiz
