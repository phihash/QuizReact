import { useState } from 'react'
import './App.css'

function App() {
  const [totalQuestions, setTotalQuestions] = useState(5) //ユーザーが解く問題の数を格納する
  const sharedButtonStyle =
    'h-full w-20 cursor-pointer bg-gray-300 text-gray-600 outline-none hover:bg-gray-400 hover:text-gray-700'

  const incrementTotalQuestions = () => {
    setTotalQuestions(totalQuestions + 1)
  }
  const decrementTotalQuestions = () => {
    if (totalQuestions > 1) {
      setTotalQuestions(totalQuestions - 1)
    } else {
      alert('1問以上でお願いします')
    }
  }

  const [score, setScore] = useState(0)
  return (
    <div className="h-screen bg-amber-600">
      <div className="mx-auto max-w-screen-xl px-4 pt-12 md:px-8">
        <div className="flex flex-col items-center rounded-lg bg-gray-100 p-4 sm:p-8">
          <div className="mb-4 sm:mb-8">
            <h2 className="text-center text-2xl font-bold text-gray-600 sm:text-3xl lg:text-4xl">
              React Quiz
            </h2>
            <p className="text-center font-semibold text-gray-500 mt-2">{score}点</p>
          </div>

          <div className="mb-3 flex items-center w-full max-w-md justify-center gap-6">

              <div className="flex custom-number-input h-10 w-24 sm:w-40">
                <div className="relative  flex h-10 w-full flex-row rounded-lg bg-transparent">
                  <button
                    data-action="decrement"
                    className={`${sharedButtonStyle} rounded-l`}
                    onClick={decrementTotalQuestions}
                  >
                    <span className="m-auto text-sm font-bold sm:text-2xl">
                      -
                    </span>
                  </button>
                  <input
                    type="number"
                    className="sm:text-md md:text-basecursor-default w-full appearance-none bg-gray-300 text-center text-sm font-semibold text-gray-700 outline-none hover:text-black focus:text-black focus:outline-none"
                    name="custom-input-number"
                    value={totalQuestions}
                    min="1"
                    max="100"
                  ></input>
                  <button
                    data-action="increment"
                    className={`${sharedButtonStyle} rounded-r`}
                    onClick={incrementTotalQuestions}
                  >
                    <span className="m-auto text-sm font-semibold sm:text-2xl">
                      +
                    </span>
                  </button>
                </div>

            </div>

            <button className="items-center rounded border-b-4 border-amber-600 bg-amber-500 px-8 py-2 font-bold text-white hover:border-amber-500 hover:bg-amber-400">
              Start
            </button>
          </div>

          <p className="text-center text-sm font-semibold text-gray-500">
            問題を選択してください
          </p>
        </div>
      </div>
    </div>
  )
}

export default App
