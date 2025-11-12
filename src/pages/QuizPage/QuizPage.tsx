import React, { useState } from 'react';
import { NavbarComponent } from "../../components/navbar/navbar";
import { DailyTipCard } from '../../components/DailyTipCard/DailyTipCard';
import './QuizPage.css';

interface QuizQuestion {
  question: string;
  options: string[];
  correctIndex: number;
}

const quizData: QuizQuestion[] = [
  {
    question: 'What is the company’s mission statement?',
    options: [
      'To innovate and grow',
      'To maximize profits only',
      'To hire as many employees as possible',
      'To follow competitors blindly'
    ],
    correctIndex: 0
  },
  {
    question: 'Which tool do we use for internal communication?',
    options: ['Slack', 'Zoom', 'Email', 'WhatsApp'],
    correctIndex: 0
  },
  {
    question: 'How often should you update your password?',
    options: ['Every month', 'Every year', 'Never', 'Only when hacked'],
    correctIndex: 0
  }
];

const QuizPage = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  const nextQuestion = () => {
    if (currentQuestion < quizData.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedOption(null);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
      setSelectedOption(null);
    }
  };

  return (
    <div className="quiz-page-container">
      
      {/* Navbar stânga */}
      <div className="quiz-navbar">
        <NavbarComponent />
      </div>

      {/* Mijloc */}
      <div className="quiz-main">
        <h2 className="quiz-title">Quiz: Company Knowledge</h2>

        <div className="quiz-card">
          <p className="quiz-question">{quizData[currentQuestion].question}</p>
          <div className="quiz-options">
            {quizData[currentQuestion].options.map((option, idx) => (
              <button
                key={idx}
                className={`quiz-option ${selectedOption === idx ? 'selected' : ''}`}
                onClick={() => setSelectedOption(idx)}
              >
                {option}
              </button>
            ))}
          </div>

          <div className="quiz-navigation">
            <button onClick={prevQuestion} disabled={currentQuestion === 0}>Previous</button>
            <button onClick={nextQuestion} disabled={currentQuestion === quizData.length - 1}>Next</button>
          </div>
        </div>
      </div>

      {/* Dreapta */}
      <div className="quiz-right">
        <div className="right-bottom-card">
          Tip: Take your time and read each question carefully.
        </div>
      </div>
    </div>
  );
};

export default QuizPage;
