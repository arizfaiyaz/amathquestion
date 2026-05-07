import { useEffect, useState } from "react";

interface Question {
  id: number;
  questionText: string;
  correctAnswer: string;
}

interface Props {
  question: Question;
}

export default function DailyChallengeCard({ question }: Props) {
  const [answer, setAnswer] = useState('');
  const [status, setStatus] = useState<'correct' | 'incorrect' | 'idle'>('idle');

  // Check if the user already solved the problem today
  useEffect(() => {
    const solvedDate = localStorage.getItem('adaymath_last_solved');
    const today = new Date().toDateString();

    if (solvedDate === today) {
      setStatus('correct');
    } else {
      setStatus('idle');
      setAnswer(''); // Reset input for the day
    }
  }, [question.id]);

  const handleSubmit = (e: React.SyntheticEvent<HTMLFormElement>) => {
    e.preventDefault();
    
    const cleanAnswer = answer.trim().toLowerCase();
    const cleanCorrectAnswer = question.correctAnswer.trim().toLowerCase()

    if (cleanAnswer === cleanCorrectAnswer) {
      setStatus('correct');
      localStorage.setItem('adaymath_last_solved', new Date().toDateString());
    } else {
      setStatus('incorrect');
      setTimeout(() => setStatus('idle'), 2500);
    }
  };

  if (status === 'correct') {
      return (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 text-center text-green-700 font-medium">
          <h2 className="text-2xl font-bold mb-2">Great Job! 🎉</h2>
          <p>You've solved today's math challenge. Come back tomorrow for a new one.</p>
        </div>
      );
    }
  
    // Render the active form
    return (
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
        <h2 className="text-xl font-bold text-gray-800 mb-6">Today's Question</h2>
        
        <p className="text-lg text-gray-600 mb-8 font-medium leading-relaxed">
          {question.questionText}
        </p>
  
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input 
            type="text" 
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            placeholder="Type your answer here..."
            className={`w-full border rounded-xl p-4 outline-none transition-all ${
              status === 'incorrect' 
                ? 'border-red-400 focus:border-red-500 bg-red-50' 
                : 'border-gray-200 focus:border-blue-600'
            }`}
          />
          {status === 'incorrect' && (
            <p className="text-red-500 text-sm mt-8px font-medium">Incorrect answer, try again!</p>
          )}
          <button 
            type="submit"
            className="w-full bg-[#2d528b] hover:bg-[#214073] text-white font-semibold py-4 rounded-xl transition-colors mt-2"
          >
            SUBMIT ANSWER
          </button>
        </form>
      </div>
    );

  
}
