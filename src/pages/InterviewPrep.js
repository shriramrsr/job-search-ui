import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { styled } from '@mui/material/styles';

const QuestionHeading = styled(Typography)(({ theme }) => ({
  fontSize: theme.typography.pxToRem(15),
  fontWeight: theme.typography.fontWeightRegular,
}));

function InterviewPrep() {
  const questions = [
    {
      question: 'Tell me about yourself',
      answer: 'Start with a brief overview of your professional background, highlighting key achievements and skills relevant to the position you’re applying for.',
    },
    {
      question: 'What are your strengths?',
      answer: 'Focus on 3-5 key strengths that are directly related to the job requirements. Provide specific examples of how you’ve demonstrated these strengths in your past roles.',
    },
    {
      question: 'Why do you want to work for our company?',
      answer: 'Research the company beforehand and mention specific aspects of their culture, projects, or mission that align with your career goals and values.',
    },
  ];

  const miniBlogs = [
    {
      title: 'C Basics',
      content: 'C is a powerful general-purpose programming language. It is fast, portable, and available on all platforms. Key concepts include variables, data types, pointers, functions, and memory management.',
    },
    {
      title: 'C++ Basics',
      content: 'C++ is an extension of C with object-oriented programming features. It introduces concepts such as classes, inheritance, polymorphism, encapsulation, and templates.',
    },
    {
      title: 'Python Basics',
      content: 'Python is an interpreted, high-level programming language with dynamic typing and memory management. It’s known for its simplicity and readability. Python is widely used in web development, data science, automation, and more.',
    },
    {
      title: 'DSA Basics',
      content: 'Data Structures and Algorithms (DSA) are the building blocks of efficient programming. Key topics include arrays, linked lists, stacks, queues, trees, graphs, sorting, searching, and dynamic programming.',
    },
    {
      title: 'Operating Systems Basics',
      content: 'An operating system (OS) is system software that manages computer hardware and software resources. Key concepts include process management, memory management, file systems, and concurrency.',
    },
    {
      title: 'Networking Basics',
      content: 'Networking involves connecting computers and other devices to share resources. Key concepts include the OSI model, TCP/IP protocols, IP addressing, routing, and network security.',
    },
  ];

  return (
    <Container sx={{ py: 4 }}>
      <Typography variant="h4" gutterBottom>
        Interview Preparation
      </Typography>
      <Typography variant="body1" paragraph>
        Practice answering these common interview questions:
      </Typography>
      {questions.map((item, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}a-content`}
            id={`panel${index}a-header`}
          >
            <QuestionHeading>{item.question}</QuestionHeading>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{item.answer}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}

      <Typography variant="h5" gutterBottom sx={{ mt: 4 }}>
        Preparations
      </Typography>
      <Typography variant="body1" paragraph>
        Expand each section to read about the basics of important technical topics:
      </Typography>
      {miniBlogs.map((blog, index) => (
        <Accordion key={index}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={`panel${index}b-content`}
            id={`panel${index}b-header`}
          >
            <QuestionHeading>{blog.title}</QuestionHeading>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{blog.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
    </Container>
  );
}

export default InterviewPrep;
