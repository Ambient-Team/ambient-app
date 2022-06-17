import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Dashboard from './Dashboard';
import SignUpPage from './SignUpPage';
import SignInPage from './SignInPage';
import OnboardPage from './OnboardPage';
import GoalPage from './GoalPage';
import OverviewPage from './OverviewPage';
import EngineeringPage from './EngineeringPage';
import MachineLearningPage from './MachineLearningPage';
import OutputPage from './OutputPage';
import ProfilePage from './ProfilePage';
import VisualizationPage from './VisualizationPage';
import RecommendationPage from './RecommandationPage';
import GraphModelPage from './GraphModelPage';
import RecommendationOutput from './RecommandationOutput';
import GraphModelOutput from './GraphModelOutput';

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
