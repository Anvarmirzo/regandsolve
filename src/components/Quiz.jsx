import React, { useState } from 'react';
import { QuestionCard } from '.';
import { fetchQuizQuestions } from '../API/API';

export function Quiz() {
	const [loading, setLoading] = useState(false);
	const [questions, setQuestions] = useState([]);
	const [number, setNumber] = useState(0);
	const [userAnswers, setUserAnswers] = useState([]);
	const [score, setScore] = useState(0);
	const [gameOver, setGameOver] = useState(true);
	const TOTAL_QUESTIONS = 10;

	const startTrivia = async () => {
		setLoading(true);
		setGameOver(false);

		const newQuestions = await fetchQuizQuestions(TOTAL_QUESTIONS, 'easy');

		setQuestions(newQuestions);
		setScore(0);
		setUserAnswers([]);
		setNumber(0);
		setLoading(false);
	};
	const checkAnswer = (e) => {
		if (!gameOver) {
			// Users answer
			const answer = e.currentTarget.value;
			// Check answer against correct answer
			const correct = questions[number].correct_answer === answer;
			// Add score if answer is correct
			if (correct) setScore((prev) => prev + 1);
			// Save answer in the array for user answers
			const answerObject = {
				question: questions ? questions[number].question : 1,
				answer,
				correct,
				correctAnswer: questions[number].correct_answer,
			};
			setUserAnswers((prev) => [...prev, answerObject]);
		}
	};

	const nextQuestion = () => {
		// Move on to the next question if not the last question
		const nextQuestion = number + 1;
		if (userAnswers.length === TOTAL_QUESTIONS) {
			setGameOver(true);
		} else {
			setNumber(nextQuestion);
		}
	};

	return (
		<div className='quiz-wrapper'>
			{gameOver || userAnswers.length === TOTAL_QUESTIONS ? (
				<>
					<h2 className='quiz__title'>Let's start solving tests.</h2>
					<button className='btn start__btn' onClick={startTrivia}>
						Start
					</button>
				</>
			) : null}
			{!gameOver ? (
				<p className='score'>
					You scored <span className='current__score'>{score}</span> points
				</p>
			) : null}
			{loading ? <p className='score'>Loading questions...</p> : null}
			{!loading && !gameOver && userAnswers.length !== TOTAL_QUESTIONS && (
				<QuestionCard
					questionNumber={number + 1}
					totalQuestions={TOTAL_QUESTIONS}
					question={questions[number].question}
					answers={questions[number].answers}
					userAnswer={userAnswers ? userAnswers[number] : undefined}
					callback={checkAnswer}
				/>
			)}
			{!gameOver &&
			!loading &&
			userAnswers.length === number + 1 &&
			number !== TOTAL_QUESTIONS - 1 ? (
				<button className='btn next__btn' onClick={nextQuestion}>
					Continue
				</button>
			) : null}
		</div>
	);
}
