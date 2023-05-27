import { useState } from 'react'
import './App.css'

function App() {
  const [totalQuestions, setTotalQuestions] = useState(5) //ユーザーが解く問題の数を格納する
  const sharedButtonStyle =
    'h-full w-20 cursor-pointer bg-gray-300 text-gray-600 outline-none hover:bg-gray-400 hover:text-gray-700'

  const incrementTotalQuestions = () => {setTotalQuestions(totalQuestions + 1)}
  const decrementTotalQuestions = () => {
    if (totalQuestions > 1) {
      setTotalQuestions(totalQuestions - 1)
    } else{
      alert("1問以上でお願いします")
    }
  }

  const [score,setScore] = useState(0)
  return (
    <div className="bg-amber-600 h-screen">
      <div className="pt-14 mx-auto max-w-screen-lg px-10">
        <div className="flex flex-row items-center justify-between rounded-xl bg-stone-50 p-8">
          <div>
            <h2 className="text-2xl font-bold text-amber-500">React Quiz</h2>
            <p className="font-semibold text-amber-500">{score}点</p>
          </div>

          <div className="flex items-center gap-4">
           <p className="px-4 py-2 text-gray-500 text-sm font-semibold">問題数を選択してください</p>
              <div className="custom-number-input h-10 w-32">
                <div className="relative  flex h-10 w-full flex-row rounded-lg bg-transparent">
                  <button
                    data-action="decrement"
                    className={`${sharedButtonStyle} rounded-l`}
                    onClick={decrementTotalQuestions}
                  >
                    <span className="m-auto text-2xl font-bold">-</span>
                  </button>
                  <input
                    type="number"
                    className="my-0 text-md md:text-basecursor-default w-full appearance-none bg-gray-300 text-center font-semibold text-gray-700 outline-none hover:text-black focus:text-black focus:outline-none"
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
                    <span className="m-auto text-2xl font-semibold">+</span>
                  </button>
                </div>
              </div>

            <button className="rounded border-b-4 border-amber-600 bg-amber-500 px-4 py-2 font-bold text-white hover:border-amber-500 hover:bg-amber-400">
              Start
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
