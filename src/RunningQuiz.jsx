import { useState } from 'react'
import PropTypes from 'prop-types'
import RadioItem from './RadioItem'
const RunningQuiz = ({
  quizzes,
  score,
  wrongQuizzes,
  setScore,
  setIsQuizFinished,
  setIsQuizStarted,
  setWrongQuizzes,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedChoice, setSelectedChoice] = useState(null)
  // const [wrongQuizzes, setWrongQuizzes] = useState([])

  const checkAnswer = () => {
    if (selectedChoice == quizzes[currentIndex].answer) {
      setScore(score + 1)
    } else {
      setWrongQuizzes([...wrongQuizzes, quizzes[currentIndex]])
    }
  }

  const handleNext = () => {
    // 最後の問題に達していないか確認します
    checkAnswer()
    if (currentIndex < quizzes.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setSelectedChoice(null)
    } else {
      setIsQuizFinished(true)
      setIsQuizStarted(false)
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
        className="mb-12 items-center rounded border-b-4 border-blue-600 bg-blue-500 px-8 py-2 font-bold text-white hover:border-blue-500 hover:bg-blue-400 disabled:border-blue-200 disabled:bg-blue-200"
      >
        Next
      </button>
    </>
  )
}

RunningQuiz.propTypes = {
  quizzes: PropTypes.array.isRequired,
  score: PropTypes.number.isRequired,
  wrongQuizzes: PropTypes.array.isRequired,
  setScore: PropTypes.func.isRequired,
  setIsQuizFinished: PropTypes.func.isRequired,
  setIsQuizStarted: PropTypes.func.isRequired,
  setWrongQuizzes: PropTypes.func.isRequired,
}

export default RunningQuiz
