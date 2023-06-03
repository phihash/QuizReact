import { db } from './firebase'
import { collection, getDocs } from 'firebase/firestore'

export const fetchQuizzes = async () => {
  const querySnapshot = await getDocs(collection(db, 'quizzes'))
  querySnapshot.forEach(doc => {
    console.log(doc.data())
  })
  return querySnapshot
}
