import { httpsCallable } from "firebase/functions";
import { functions } from './firebaseConfig';

const analyzeTone = httpsCallable(functions, "analyzeTone");

export {
    analyzeTone,
}