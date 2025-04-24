import { useState } from 'react'
import { Router, Route, Routes } from 'react-router-dom';
import LoginSignup from './components/LoginSignup'
import SignupE from './components/SignupE'

import DashboardS from './components/DashboardS'
import Makequiz from './components/Makequiz'
import Addexpertise from './components/Expert/Addexpertise'
import Questionbank from './components/Questionbank'
import DashboardE from './components/DashboardE'
import Leaderboard from './components/Leaderboard'
import Tasks from './components/Tasks'
import MakeComp from './components/MakeComp'
import CompRound1 from './components/CompRound1'
import CompMCQ from './components/CompMCQ'
import CompSP from './components/CompSP'
import CompShuffle from './components/CompShuffle'
import Buzzer from './components/Buzzer'
import ViewAllQuestions from './components/ViewAllQuestions'
import Makequiz2 from './components/Makequiz2';
import MakequizA from './components/MakequizA';
import MakequizM from './components/MakequizM';
import Questionbandadd from './components/Questionbankadd';
import StudentComp from './components/StudentComp';
import StudentEnrolledComp from './components/StudentEnrolledComp';
import StudentUpcomComp from './components/StudentUpcomComp';
import StudentCompReg from './components/Competition/StudentCompReg';
import StudentCompDetails from './components/StudentCompDetails';
import StudentHistory from './components/StudentHistory';
import StuQuizHistory from './components/StuQuizHistory';
import StuCompHistory from './components/StuCompHistory';
import StudentQuiz from './components/StudentQuiz';
import StudentCompStart from './components/StudentCompStart';
import StuCompRndDate from './components/StuCompRndDate';
import StuCompFRndDate from './components/StuCompFRndDate';
import TeamsQualifiedMcq from './components/TeamsQualifiedMcq';
import StudentTasks from './components/StudentTasks';
import StudentCompMCQ from './components/StudentCompMCQ';
import Addexpertisesub from './components/Expert/Addexpertisesub';
import StuSolveTask from './components/StuSolveTask';
import StudentCompCategory from './components/StudentCompCategory';
import StuCompAddMember from './components/Competition/StuCompAddMember';
import TaskRound from './components/TaskCreationScreens/TaskRound';
import TaskMCQ from './components/TaskCreationScreens/TaskMCQ';
import TaskMakeQuestion from './components/TaskCreationScreens/TaskMakeQuestion';
import QuestionBankScreen from './components/QuestionBank/QuestionBankScreen';
import MCQBank from './components/QuestionBank/MCQBank';
import CodeBank from './components/QuestionBank/CodeBank';
import ShortBank from './components/QuestionBank/ShortBank';
import AddRounds from './components/Competition/AddRounds';
import Form from './components/Form';



function App() {

  return (
    <>
   
    <Routes>
      <Route path='/home' element={<DashboardE/>}/>
      <Route path='/homes' element={<DashboardS/>}/>
      <Route path='/leaderboard' element={<Leaderboard/>}/>
      <Route path='/competitions' element={<MakeComp/>}/>
      <Route path='/competitionsS' element={<MakeComp/>}/>
      <Route path='/expertise' element={<Addexpertise/>}/>
      <Route path='/questionbank' element={<Questionbank/>}/>
      <Route path='/logout' element={<LoginSignup/>}/>
      <Route path='/makequiz' element={<Makequiz/>}/>
      <Route path='/compround1' element={<CompRound1/>}/>
      <Route path='/compmcq' element={<CompMCQ/>}/>
      <Route path='/compsp' element={<CompSP/>}/>
      <Route path='/compshuffle' element={<CompShuffle/>}/>
      <Route path='/buzzer' element={<Buzzer/>}/>
      <Route path='/signupe' element={<SignupE/>}/>
      <Route path='/tasks' element={<Tasks/>}/>
      <Route path='/viewallquestions' element={<ViewAllQuestions/>}/>
      <Route path='/questionbank/viewallquestions' element={<ViewAllQuestions />} />
      <Route path='/makequiz2' element={<Makequiz2 />} />
      <Route path='/makequiza' element={<MakequizA />} />
      <Route path='/makequizm' element={<MakequizM />} />
      <Route path='/stutask' element={<StudentTasks />} />
      <Route path='/questionbankadd' element={<Questionbandadd />} />
      <Route path='/history' element={<StuQuizHistory />} />
      <Route path='/studentcomp' element={<StudentComp />} />
      <Route path='/studentcompdetails' element={<StudentCompDetails />} />
      <Route path='/studentcompreg' element={<StudentCompReg />} />
      <Route path='/studentcompstart' element={<StudentCompStart />} />
      <Route path='/studentenrolledcomp' element={<StudentEnrolledComp />} />
      <Route path='/studentupcomingcomp' element={<StudentUpcomComp />} />
      <Route path='/studentcomphistory' element={<StuCompHistory />} />
      <Route path='/studentcompfrnddate' element={<StuCompFRndDate />} />
      <Route path='/stucomprnddate' element={<StuCompRndDate />} />
      <Route path='/studentcompmcq' element={<StudentCompMCQ />} />
      <Route path='/addexpertisesub' element={<Addexpertisesub />} />
      <Route path='/stusolvetask' element={<StuSolveTask />} />
      <Route path='/studentcompcategory' element={<StudentCompCategory />} />
      <Route path='/stucompaddmember' element={<StuCompAddMember />} />
      <Route path='/taskround' element={<TaskRound />} />
      <Route path='/taskmcq' element={<TaskMCQ />} />
      <Route path='/taskmakequestion' element={<TaskMakeQuestion />} />
      <Route path='/questionbankscreen' element={<QuestionBankScreen />} />
      <Route path='/mcqbank' element={<MCQBank />} />
      <Route path='/codebank' element={<CodeBank />} />
      <Route path='/shortbank' element={<ShortBank />} />
      <Route path='/addrounds' element={<AddRounds />} />
      <Route path='/form' element={<Form />} />

      
    </Routes>
  


    {/* <LoginSignup/> */}
    {/* <Form/> */}
    {/* <SignupE/>   */}
    {/* <TaskMCQ/> */}
    {/* <DashboardS/> */}
    {/* <Makequiz/> */}
    {/* <Addexpertise/> */}
    {/* <Questionbank/> */}
    {/* <DashboardE/> */}
    {/* <Tasks/> */}
    {/* <MakeComp/> */}
    {/* <CompRound1/> */}
    {/* <CompMCQ/> */}
    {/* <CompSP/> */}
    {/* <CompShuffle/> */}
    {/* <Buzzer/> */}
    {/* <Leaderboard/> */}
    {/* <ViewAllQuestions/> */}
    {/* <Makequiz2/> */}
    {/* <MakequizM/> */}
    {/* <MakequizA/> */}
    {/* <Questionbandadd/> */}
    {/* <DashboardS/> */}
    {/* <StudentTasks/> */}
     {/* <StudentComp/> */}
    {/* <StudentCompStart/> */}
    {/* <StuCompRndDate/> */}
    {/* <StuCompFRndDate/> */}
    {/* <TeamsQualifiedMcq/> */}
    {/* <StudentEnrolledComp/>
    <StudentUpcomComp/> */}
    {/* <StudentCompReg/> */}
    {/* <StudentCompDetails/> */}
    {/* <StudentHistory/> */}
    {/* <StuQuizHistory/> */}
    {/* <StuCompHistory/> */}
    {/* <StudentCompMCQ/> */}
    {/* <StudentQuiz/> */}
    {/* <Addexpertisesub/> */}
    {/* <StuSolveTask/> */}
    {/* <StudentCompCategory/> */}
    {/* <StuCompAddMember/> */}
    {/* <TaskRound/> */}
    {/* <TaskMakeQuestion/> */}
    {/* <QuestionBankScreen/> */}
    {/* <MCQBank/> */}
    {/* <CodeBank/>
    <ShortBank/> */}
    {/* <AddRounds/> */}
   
    </>
  )
}

export default App
