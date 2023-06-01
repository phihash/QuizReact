import { useState } from 'react'
import './App.css'

const sharedButtonStyle =
  'h-full w-32 cursor-pointer bg-gray-300 text-gray-600 outline-none hover:bg-gray-400 hover:text-gray-700'

function App() {
  const [totalQuestions, setTotalQuestions] = useState(5) //ユーザーが解く問題の数を格納する
  const [isQuizStarted, setIsQuizStarted] = useState(false)
  // const [isQuizFinished , setIsQuizFinished] = useState(false)
  // const [isReviewMode   , setIsReviewMode] = useState(false)

  const incrementTotalQuestions = () => {
    if (totalQuestions > 99) {
      alert('100問以下でお願いします')
    } else {
      setTotalQuestions(totalQuestions + 1)
    }
  }
  const decrementTotalQuestions = () => {
    if (totalQuestions > 1) {
      setTotalQuestions(totalQuestions - 1)
    } else {
      alert('1問以上でお願いします')
    }
  }

  const changeTotalQuestions = e => {
    const inputNumber = parseInt(e.target.value)
    if (inputNumber >= 1 && inputNumber <= 100) {
      setTotalQuestions(inputNumber)
    }
  }

  const isStarted = () => {
    setIsQuizStarted(true)
  }

  const isQuit = () => {
    setIsQuizStarted(false)
  }

  const [score, setScore] = useState(0)
  return (
    <div className="min-h-screen bg-amber-600">
      <div className="mx-auto max-w-screen-xl px-4 pb-48 pt-12 md:px-8">
        <div className="flex flex-col items-center rounded-lg bg-gray-100 p-4 sm:p-8">
          <div className="mb-4 sm:mb-8">
            <h2 className="text-center text-2xl font-bold text-gray-600 sm:text-3xl lg:text-4xl">
              React Quiz
            </h2>
            <p className="mt-2 text-center font-semibold text-gray-500">
              {score}点
            </p>
          </div>

          {!isQuizStarted && (
            <div className="mb-3 flex w-full max-w-md items-center justify-center gap-6">
              <div className="custom-number-input flex h-10 w-40 sm:w-40">
                <div className="relative  flex h-10 w-full flex-row rounded-lg bg-transparent">
                  <button
                    className={`${sharedButtonStyle} rounded-l`}
                    onClick={decrementTotalQuestions}
                  >
                    <span className="m-auto text-lg font-bold sm:text-2xl">
                      -
                    </span>
                  </button>
                  <input
                    type="number"
                    className="sm:text-md w-full  bg-gray-300 text-center text-lg font-semibold text-gray-700 outline-none hover:text-black focus:text-black focus:outline-none md:text-base"
                    name="custom-input-number"
                    value={totalQuestions}
                    min="1"
                    max="100"
                    onChange={changeTotalQuestions}
                  />
                  <button
                    className={`${sharedButtonStyle} rounded-r`}
                    onClick={incrementTotalQuestions}
                  >
                    <span className="m-auto text-lg font-semibold sm:text-2xl">
                      +
                    </span>
                  </button>
                </div>
              </div>

              <button
                onClick={isStarted}
                className="items-center rounded border-b-4 border-amber-600 bg-amber-500 px-8 py-2 font-bold text-white hover:border-amber-500 hover:bg-amber-400"
              >
                Start
              </button>
            </div>
          )}

          {isQuizStarted && (
            <button
              onClick={isQuit}
              className="items-center rounded border-b-4 border-red-700 bg-red-600 px-8 py-2 font-bold text-white hover:border-red-600 hover:bg-red-500"
            >
              Quit
            </button>
          )}

          {isQuizStarted && (
            <p className="text-center text-2xl font-semibold text-gray-800">
              クイズをここにかいていく
            </p>
          )}

          {!isQuizStarted && (
            <p className="text-center text-sm font-semibold text-gray-500">
              問題数(1-100)を選択してください
            </p>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
