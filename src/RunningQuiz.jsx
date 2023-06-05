import { useState } from 'react'
import PropTypes from 'prop-types'
import RadioItem from './RadioItem'
const RunningQuiz = ({ quizzes }) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedChoice, setSelectedChoice] = useState(null)
  const handleNext = () => {
    // 最後の問題に達していないか確認します
    if (currentIndex < quizzes.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setSelectedChoice(null)
    } else {
      console.log('Quiz Finished!')
    }
  }
  return (
    <>
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
            ></RadioItem>
          )
        })}
      </div>
      <button
        onClick={handleNext}
        disabled={!selectedChoice}
        className="mb-12 items-center rounded border-b-4 border-blue-600 bg-blue-500 px-8 py-2 font-bold text-white hover:border-blue-500 hover:bg-blue-400"
      >
        Next
      </button>
    </>
  )
}

RunningQuiz.propTypes = {
  quizzes: PropTypes.array.isRequired,
}

export default RunningQuiz
