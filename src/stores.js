import { writable } from "svelte/store";

export const FeedbackStore = writable([
  {
    id: 1,
    rating: 10,
    text: "Your recent project submission has been impressive! The level of detail and thoughtfulness you've put into the work really stands out. The design is clean and user-friendly, and the functionality is robust and reliable.",
  },
  {
    id: 2,
    rating: 30,
    text: "Keep up the excellent effort, and continue pushing the boundaries of your creativity and technical skills!",
  },
  {
    id: 3,
    rating: 50,
    text: "The design is clean and user-friendly, and the functionality is robust and reliable.",
  },
  {
    id: 4,
    rating: 60,
    text: "Keep up the excellent effort, and continue pushing the boundaries of your creativity and technical skills!",
  },
]);
