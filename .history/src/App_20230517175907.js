import FeedbackList from "./components/FeedbackList"
import Header from "./components/Header"
import FeedbackStats from "./components/FeedbackStats"
import FeedbackForm from './components/FeedbackForm'
import AboutPage from './pages/AboutPage'
import {BrowserRouter as Router,Route, Routes} from 'react-router-dom'
import AboutIconLink from './components/AboutIconLink'
import { FeedbackProvider } from './context/FeedbackContext'

function App() {   
    
    return (
        <FeedbackProvider>
        <Router>
            <Header text="Review Poll" />
            <div className="container">
                <Routes>
                    <Route
                        exact path='/'
                        element={
                            <>
                                <FeedbackForm/>
                                <FeedbackStats/>
                                <FeedbackList/>  
                            </>
}/>
                    <Route path='/about' element={<AboutPage />} />
                    
                </Routes>
                 <AboutIconLink/>
            </div>           
        </Router> 
        </FeedbackProvider>
    )
}


export default App