import { useState } from 'react'
import PropTypes from 'prop-types'
import RadioItem from './RadioItem'
import CheckBoxItem from './CheckBoxItem'
const RunningQuiz = ({
  quizzes,
  score,
  wrongQuizzes,
  setScore,
  setQuizState,
  setWrongQuizzes,
}) => {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedChoice, setSelectedChoice] = useState(null)
  const [selectedCheckBox, setSelectedCheckBox] = useState([])

  const checkMultipleAnswer = (a, b) => {
    if (a.length !== b.length) return false

    for (let i = 0; i < a.length; i++) {
      if (a[i] !== b[i]) return false
    }

    return true
  }

  const checkAnswer = () => {
    if (quizzes[currentIndex].isMultipleAnswer) {
      //checkbox
      if (checkMultipleAnswer(selectedCheckBox, quizzes[currentIndex].answer)) {
        setScore(score + 1)
      } else {
        setWrongQuizzes([...wrongQuizzes, quizzes[currentIndex]])
      }
    } else {
      if (selectedChoice === quizzes[currentIndex].answer) {
        //radio
        setScore(score + 1)
      } else {
        setWrongQuizzes([...wrongQuizzes, quizzes[currentIndex]])
      }
    }
  }

  const handleNext = () => {
    checkAnswer()
    if (currentIndex < quizzes.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setSelectedChoice(null)
      setSelectedCheckBox([])
    } else {
      setQuizState('finished')
    }
  }
  return (
    <>
      <p className="mt-8 text-center text-2xl font-semibold text-gray-700">
        {quizzes[currentIndex].question}
      </p>

      {quizzes[currentIndex].isMultipleAnswer ? (
        <div className="my-8 grid space-y-2">
          {quizzes[currentIndex].choices.map(choice => {
            return (
              <CheckBoxItem
                key={choice}
                choice={choice}
                selectedCheckBox={selectedCheckBox}
                setSelectedCheckBox={setSelectedCheckBox}
              />
            )
          })}
        </div>
      ) : (
        <div className="my-8 grid space-y-2">
          {quizzes[currentIndex].choices.map((choice, index) => {
            return (
              <RadioItem
                key={choice}
                index={index}
                choice={choice}
                setSelectedChoice={setSelectedChoice}
              />
            )
          })}
        </div>
      )}

      <button
        onClick={handleNext}
        disabled={
          !quizzes[currentIndex].isMultipleAnswer
            ? !selectedChoice
            : selectedCheckBox.length === 0
        }
        className=" mb-12 items-center rounded border-b-4 border-blue-600 bg-blue-500 px-8 py-2 font-bold text-white hover:border-blue-500 hover:bg-blue-400 disabled:border-blue-200 disabled:bg-blue-200"
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
  setQuizState: PropTypes.func.isRequired,
  setWrongQuizzes: PropTypes.func.isRequired,
}

export default RunningQuiz
