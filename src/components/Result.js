import React from 'react';
import './Result.css';

function Result({ totalQuestions , answeredCount}) {
    return (
        <div className="result-card">
            <h2>Quiz Completed</h2>
            <p>
                You scored {answeredCount} out of {totalQuestions}
            </p>
        </div>
    );
}

export default Result;