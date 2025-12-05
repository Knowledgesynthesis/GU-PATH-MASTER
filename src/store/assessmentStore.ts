import { create } from 'zustand';

interface Answer {
  questionId: string;
  selectedOption: string;
  isCorrect: boolean;
}

interface AssessmentState {
  answers: Answer[];
  addAnswer: (answer: Answer) => void;
  clearAnswers: () => void;
  getScore: () => { correct: number; total: number };
}

export const useAssessmentStore = create<AssessmentState>((set, get) => ({
  answers: [],
  addAnswer: (answer) =>
    set((state) => {
      const filteredAnswers = state.answers.filter(
        (a) => a.questionId !== answer.questionId
      );
      return { answers: [...filteredAnswers, answer] };
    }),
  clearAnswers: () => set({ answers: [] }),
  getScore: () => {
    const answers = get().answers;
    const correct = answers.filter((a) => a.isCorrect).length;
    return { correct, total: answers.length };
  },
}));
