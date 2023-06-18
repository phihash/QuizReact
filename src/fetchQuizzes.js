import { db } from './firebase'
import { query, collection, getDocs } from 'firebase/firestore'

export const fetchQuizzes = async num => {
  const q = query(collection(db, 'quizzes'))
  const querySnapshot = await getDocs(q)
  const quizList = querySnapshot.docs.map(doc => {
    return doc.data()
  })
  return shuffleArray(quizList).slice(0, num)
}

const shuffleArray = array => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1))
    ;[array[i], array[j]] = [array[j], array[i]]
  }
  return array
}
