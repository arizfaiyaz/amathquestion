import questionsData from './data/questions.json';
import { useMemo } from 'react'
import './App.css'
import CountdownTimer from './components/CountdownTimer'
import DailyChallengeCard from './components/DailyChallengeCard';
import { getDailyQuestionIndex } from './utils/dailyLogic';

function App() {
  const todayQuestion = useMemo(() => {
    if (!questionsData || questionsData.length == 0) {
      return { id: 0, questionText: "Loading..", correctAnswer: "0" };
    }
    const index = getDailyQuestionIndex(questionsData.length);
    return questionsData[index]
  }, []);
  
  return (
    <>
      <div className="min-h-screen bg-[#2d528b] flex flex-col items-center justify-center py-12 px-4 font-sans selection:bg-blue-200 selection:text-blue-900">
        <main className="bg-[#f8f9fa] w-full max-w-2xl rounded-3xl shadow-2xl p-6 md:p-12">
          <h1 className="text-[2.5rem] font-bold text-center text-[#214073] mt-2 mb-10 tracking-tight">
                    A Day Math
          </h1>
          <div className="bg-[#f8f9fa] border border-gray-200 rounded-2xl py-2 px-4 mb-8 flex justify-center">
            <CountdownTimer />
          </div>
          <DailyChallengeCard question={todayQuestion} />
        </main>
      </div>
    </>
  )
}

export default App
