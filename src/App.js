import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import JobSearch from './pages/JobSearch';
import JobListing from './pages/JobListing';
import ResumeBuilder from './pages/ResumeBuilder';
import InterviewPrep from './pages/InterviewPrep';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<JobSearch />} />
          <Route path="/job/:id" element={<JobListing />} />
          <Route path="/resume-builder" element={<ResumeBuilder />} />
          <Route path="/interview-prep" element={<InterviewPrep />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;