import { db } from './firebase'
import { collection, getDocs } from 'firebase/firestore'

export const fetchQuizzes = async () => {
  const querySnapshot = await getDocs(collection(db, 'quizzes'))
  const quizList = querySnapshot.docs.map(doc => {
    return doc.data()
  })
  return quizList
}
