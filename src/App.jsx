import PuppyRoster from './components/PuppyRoster'
import PuppyDetails from './components/PuppyDetails'
import { Routes, Route} from "react-router-dom";
import './App.css'
const App = () => {
  

  return (
    <>
      <h1>Puppy Bowl 🏁</h1>
      {/* <PuppyRoster /> */}
      <div>
        <Routes>
          <Route path='/' element = {<PuppyRoster />} />
          <Route path='/PuppyDetails/:puppyId' element = {<PuppyDetails />} />
        </Routes>
      </div>
      
    </>
  )
}

export default App
