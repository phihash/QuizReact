import PropTypes from 'prop-types'

const ShareButton = ({ totalQuestions, score }) => {
  const shareUrl = 'https://example.com'
  const title = 'ReactQuiz'
  const text = `あなたは${totalQuestions}点中${score}点でした`

  const encodedShareUrl = encodeURIComponent(shareUrl)
  const encodedText = encodeURIComponent(text)
  const encodedTitle = encodeURIComponent(title)

  return (
    <a
      href={`https://twitter.com/share?url=${encodedShareUrl}&hashtags=${encodedTitle}&text=${encodedText}`}
      target="_blank"
      rel="noopener noreferrer"
      className="my-12 rounded border-b-4 border-sky-600 bg-sky-500 px-8 py-2 font-bold text-white hover:border-sky-400 hover:bg-sky-300"
    >
      Share on Twitter
    </a>
  )
}

ShareButton.propTypes = {
  score: PropTypes.number.isRequired,
  totalQuestions: PropTypes.number.isRequired,
}

export default ShareButton
