import React from "react";
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AboutusPage from './components/routes/AboutUs';
import BrowsetopicsPage from './components/routes/BrowseTopics';
import ExamplesPage from './components/routes/Examples';
import FaqsPage from './components/routes/Faqs';
import HelpPage from './components/routes/Help';
import HistoryPage from './components/routes/history.tsx';
import SavedquestionsPage from './components/routes/SavedQuestions.tsx';
import ErrorPage from './components/routes/ErrorPage.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/history",
    element: <HistoryPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/savedquestions",
    element: <SavedquestionsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/topics",
    element: <BrowsetopicsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/examples",
    element: <ExamplesPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/aboutus",
    element: <AboutusPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/faqs",
    element: <FaqsPage />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/help",
    element: <HelpPage />,
    errorElement: <ErrorPage />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
