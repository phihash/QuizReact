import { useState, useEffect } from 'react'
import RunningQuiz from './components/RunningQuiz'
import './App.css'
import { fetchQuizzes } from './fetchQuizzes'
import ShareButton from './components/ShareButton'
import DisplayArrayWithBreaks from './components/DisplayArrayWithBreaks'

const sharedButtonStyle =
  'h-full w-32 cursor-pointer bg-gray-300 text-gray-600 outline-none hover:bg-gray-400 hover:text-gray-700'

function App() {
  const [totalQuestions, setTotalQuestions] = useState(5) //ユーザーが解く問題の数を格納する
  const [quizzes, setQuizzes] = useState([])
  const [score, setScore] = useState(0)
  const [quizState, setQuizState] = useState('beforeTheQuiz')
  const [isLoading, setIsLoading] = useState(false)
  const [wrongQuizzes, setWrongQuizzes] = useState([])
  useEffect(() => {
    setIsLoading(true)
    const fetchData = async () => {
      if (quizState === 'InProgress') {
        const quizList = await fetchQuizzes(totalQuestions)
        setQuizzes(quizList)
        setIsLoading(false)
      }
    }

    fetchData()
  }, [quizState, totalQuestions])

  const startQuiz = () => {
    setQuizState('InProgress')
  }

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

  const retryQuiz = () => {
    setQuizState('beforeTheQuiz')
    setQuizzes([])
    setWrongQuizzes([])
    setScore(0)
  }

  return (
    <div className="min-h-screen bg-amber-600">
      <div className="mx-auto max-w-screen-xl px-4 pb-48 pt-12 md:px-8">
        <div className="rounded-lg bg-gray-100 p-4 sm:p-8">
          <div className="flex flex-col items-center">
            <h2 className="my-10 text-center text-4xl font-bold text-gray-600 sm:mb-8">
              React Quiz
            </h2>

            {quizState === 'beforeTheQuiz' && (
              <>
                <div className="mb-8 flex w-full max-w-md items-center justify-center gap-6">
                  <div className="custom-number-input flex h-10 w-40 sm:w-40">
                    <div className="relative flex h-10 w-full flex-row rounded-lg bg-transparent">
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
                    onClick={startQuiz}
                    className="items-center rounded border-b-4 border-amber-600 bg-amber-500 px-8 py-2 font-bold text-white hover:border-amber-500 hover:bg-amber-400"
                  >
                    Start
                  </button>
                </div>
                <p className="mb-2 text-center text-sm font-semibold text-gray-500">
                  問題数(1-100)を選択してください
                </p>
              </>
            )}

            {quizState === 'InProgress' ? (
              isLoading ? (
                <p className="mb-4 text-2xl font-semibold text-gray-700">
                  Loading....
                </p>
              ) : quizzes.length ? (
                <RunningQuiz
                  quizzes={quizzes}
                  score={score}
                  wrongQuizzes={wrongQuizzes}
                  setScore={setScore}
                  setQuizState={setQuizState}
                  setWrongQuizzes={setWrongQuizzes}
                />
              ) : (
                <p className="text-2xl font-semibold text-gray-700">
                  クイズが登録されていません
                </p>
              )
            ) : (
              <></>
            )}
          </div>
          {quizState === 'finished' && (
            <>
              <p className="my-12 text-center text-xl font-semibold font-semibold text-gray-800 md:text-2xl">
                あなたは {totalQuestions}点中 {score}点 でした！
              </p>
              {wrongQuizzes.map((wrongQuiz, index) => {
                return (
                  <div key={index} className="px-8">
                    <h1 className="mb-3 text-xl font-semibold md:text-2xl">
                      Q.{wrongQuiz.question}
                    </h1>
                    {wrongQuiz.isMultipleAnswer ? (
                      <DisplayArrayWithBreaks array={wrongQuiz.answer} />
                    ) : (
                      <h2 className="mb-3 text-base font-semibold md:text-xl">
                        A. {wrongQuiz.answer}
                      </h2>
                    )}
                    <p className="mb-8 text-sm md:text-lg">
                      {wrongQuiz.explanation}
                    </p>
                  </div>
                )
              })}
              <div className="flex justify-center gap-3">
                <button
                  onClick={retryQuiz}
                  className="my-12 rounded border-b-4 border-teal-600 bg-teal-500 px-8 py-2 font-bold text-white hover:border-teal-500 hover:bg-teal-400 disabled:border-blue-200 disabled:bg-blue-200"
                >
                  Retry
                </button>
                <ShareButton totalQuestions={totalQuestions} score={score} />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

export default App
