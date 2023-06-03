import { db } from './firebase'
import { collection, getDocs } from 'firebase/firestore'

export const fetchQuizzes = async () => {
  const quizList = []
  const querySnapshot = await getDocs(collection(db, 'quizzes'))
  querySnapshot.forEach(doc => {
    quizList.push(doc.data())
    console.log(doc.data())
  })
  return quizList
}
