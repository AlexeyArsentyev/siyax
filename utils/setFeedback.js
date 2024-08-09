import { collection, addDoc, getDocs } from 'firebase/firestore';
import { db } from './firebase';

export const setFeedback = async (email, name, message) => {
  const docRef = await addDoc(collection(db, 'feedback'), {
    email,
    name,
    message,
  });
};
