import PropTypes from 'prop-types'

const Review = ({ wrongQuizzes }) => {
  console.log(wrongQuizzes)
  return (
    <>
      {wrongQuizzes.map((wrongQuiz, index) => {
        return (
          <div className="" key={index}>
            <h1 className="">Q.{wrongQuiz.question}</h1>
            <h2 className="">A. {wrongQuiz.answer}</h2>
            <p className="">{wrongQuiz.explanation}</p>
          </div>
        )
      })}
    </>
  )
}

Review.propTypes = {
  wrongQuizzes: PropTypes.array.isRequired,
}

export default Review
