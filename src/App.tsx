import questionsData from './data/questions.json';
import { useMemo } from 'react'
import './App.css'
import CountdownTimer from '@/components/CountdownTimer'
import DailyChallengeCard from '@/components/DailyChallengeCard'
import Footer from '@/components/Footer'
import { ProfileCard } from '@/components/ProfileCard';
import { getDailyQuestionIndex } from './utils/dailyLogic';
import { Analytics } from '@vercel/analytics/react';


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
      
          <div className="min-h-screen bg-[#2d528b] flex flex-col items-center justify-between pt-12 pb-4 px-4 font-sans selection:bg-blue-200 selection:text-blue-900">
            
            {/* Main Grid/Flex Container */}
            {/* lg:flex-row puts them side-by-side on desktop. flex-col stacks them on mobile */}
            <div className="flex flex-col lg:flex-row gap-8 w-full max-w-6xl items-stretch justify-center flex-1">
              
              {/* Left Side: Profile Card */}
              <aside className="w-full lg:w-1/3 max-w-md mx-auto lg:mx-0">
                <ProfileCard />
              </aside>
      
              {/* Right Side: The Math App */}
              <main className="bg-[#f8f9fa] w-full lg:w-2/3 rounded-3xl shadow-2xl p-6 md:p-12 flex flex-col">
                
                <h1 className="text-[2.5rem] font-bold text-center text-[#214073] mt-2 mb-10 tracking-tight">
                  A Day Math
                </h1>
      
                <div className="bg-[#f8f9fa] border border-gray-200 rounded-2xl py-2 px-4 mb-8 flex justify-center">
                  <CountdownTimer />
                </div>
      
                <div className="flex-1">
                  <DailyChallengeCard question={todayQuestion} />
                </div>
                <Analytics />
              </main>
            </div>
      
            {/* Bottom Footer */}
            <Footer />
      
          </div>
    </>
  )
}

export default App
