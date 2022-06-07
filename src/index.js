import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import App from './App';
import Dashboard from './Dashboard';
import reportWebVitals from './reportWebVitals';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import SignUpPage from './SignUpPage';
import SignInPage from './SignInPage';
import OnboardPage from './OnboardPage';
import GoalPage from './GoalPage';
import OverviewPage from './firstpage';
import EngineeringPage from './samplepage';
import MachineLearningPage from './MachineLearningPage';
import OutputPage from './OutputPage';
import ProfilePage from './ProfilePage';
import VisualizationPage from './VisualizationPage';
import RecommendationPage from './RecommandationPage';
import GraphModelPage from './GraphModelPage';
import RecommendationOutput from './RecommandationOutput';
import GraphModelOutput from './GraphModelOutput';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Router>
            <Routes>
              <Route path='/' element={<SignInPage />} />
              <Route path='/SignUp' element={<SignUpPage />} />
              <Route path='Dashboard' element={<Dashboard />} >
                <Route  path='Goal' element={<GoalPage />} />
                <Route  path='Onboard' element={<OnboardPage />} />
                <Route  path='Overview' element={<OverviewPage />} />      
                <Route  path='Engineering' element={<EngineeringPage />} />
                <Route  path='Visualization' element={<VisualizationPage />} />
                <Route  path='ML' element={<MachineLearningPage />} />
                  <Route  path='/Dashboard/ML/Recommendation' element={<RecommendationPage />} />
                  <Route  path='/Dashboard/ML/GraphModel' element={<GraphModelPage />} />
                <Route  path='Output' element={<OutputPage />} />
                  <Route  path='/Dashboard/Output/Recommendation' element={<RecommendationOutput />} />
                  <Route  path='/Dashboard/Output/GraphModel' element={<GraphModelOutput />} />
                <Route  path='Profile' element={<ProfilePage />} />
              </ Route>
            </Routes>
          </Router>      
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
