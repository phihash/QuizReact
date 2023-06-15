import { db } from './firebase'
import { query, limit, collection, getDocs } from 'firebase/firestore'

export const fetchQuizzes = async num => {
  const q = query(collection(db, 'quizzes'), limit(num))
  const querySnapshot = await getDocs(q)
  // const querySnapshot = await getDocs(collection(db, 'quizzes'))
  const quizList = querySnapshot.docs.map(doc => {
    return doc.data()
  })
  return quizList
}
