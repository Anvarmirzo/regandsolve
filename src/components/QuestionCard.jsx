import React from 'react';

export const QuestionCard = ({
	question,
	answers,
	callback,
	userAnswer,
	questionNumber,
	totalQuestions,
}) => (
	<div>
		<p className='number'>
			Question: {questionNumber}/{totalQuestions}
		</p>
		<p dangerouslySetInnerHTML={{ __html: question }}></p>
		<ul className='answer__list'>
			{answers.map((answer) => (
				<li key={answer}>
					<button
						className={`answer__btn ${
							userAnswer?.correctAnswer === answer ? 'correct__answer' : ''
						} ${userAnswer?.answer === answer ? 'selected__answer' : ''}`}
						disabled={!!userAnswer}
						value={answer}
						onClick={callback}
					>
						<span dangerouslySetInnerHTML={{ __html: answer }}></span>
					</button>
				</li>
			))}
		</ul>
	</div>
);
