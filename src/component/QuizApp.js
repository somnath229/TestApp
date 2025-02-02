import React, { useState, useEffect } from "react";

const QuizApp = () => {
  const [questions, setQuestions] = useState([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [score, setScore] = useState(0);
  const [quizFinished, setQuizFinished] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log("Fetching data from API...");

    fetch("/Uw5CrX")
      .then((response) => response.json())
      .then((data) => {
        if (data && Array.isArray(data.questions)) {
          setQuestions(data.questions);
        }
        // console.log("API Response Data:", data); // Log the entire JSON data
        // console.log("API Questions:", data.questions); // Access the 'questions' property
      })
      .catch((error) => console.error("Error fetching data:", error))
      .finally(() => setLoading(false));
  }, []);

  // useEffect(() => {
  //   if (questions.length > 0) {
  //     console.log("q", questions[currentQuestionIndex].description);
  //     console.log("qid", questions[currentQuestionIndex].options); // Access the first option
  //   } else {
  //     console.log("No questions available yet.");
  //   }
  // }, [questions]);

  const handleAnswerSelect = (answer) => {
    setSelectedAnswer(answer);
    // console.log("is_correct:", selectedAnswer?.is_correct);
  };

  const handleNextQuestion = () => {
    if (selectedAnswer) {
      if (selectedAnswer?.is_correct) {
        setScore((prevScore) => prevScore + 1);
      }
      setSelectedAnswer(null);
      if (currentQuestionIndex + 1 < questions.length) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      } else {
        setQuizFinished(true);
      }
    }
  };

  if (loading) {
    return <p>Loading questions...</p>;
  }

  const restartQuiz = () => {
    setScore(0);
    setQuizFinished(false);
    setCurrentQuestionIndex(0);
  };

  return (
    <div>
      {quizFinished ? (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "column",
            padding: "1rem",
            margin: "1rem",
          }}>
          <div
            style={{
              fontSize: "1.5rem",
              fontWeight: "700",
              lineHeight: "2em",
            }}>
            Your score:{" "}
            <span>
              {score} / {questions.length}
            </span>
          </div>
          <button
            onClick={restartQuiz}
            style={{
              background: "#7460ac",
              border: "none",
              borderRadius: "1rem",
              color: "#fff",
              padding: "1rem 2rem",
              margin: "1rem",
            }}>
            {" "}
            Start Again
          </button>
        </div>
      ) : (
        <div
          style={{
            maxWidth: "500px",
            margin: "auto",
            marginTop: "50px",
            boxShadow: "0 4px 10px rgba(0,0,0,0.5)",
            padding: "20px",
            background: "#fff",
            borderRadius: "8px",
          }}>
          <h2
            style={{
              fontSize: "24px",
              fontWeight: "bold",
              marginBottom: "20px",
              letterSpacing: "1px",
              wordSpacing: ".4rem",
              padding: "2rem 0",
            }}>
            {" "}
            Q.&nbsp;
            {questions[currentQuestionIndex]?.description ||
              "Question not available"}
          </h2>
          <div
            style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {questions.length > 0 &&
              questions[currentQuestionIndex]?.options?.map((option, index) => (
                <button
                  key={option.id}
                  onClick={() => handleAnswerSelect(option)}
                  style={{
                    padding: "10px",
                    backgroundColor:
                      selectedAnswer === option ? "#4CAF50" : "#f1f1f1",
                    border: "1px solid #ccc",
                    cursor: "pointer",
                    borderRadius: "5px",
                    fontSize: "16px",
                    fontWeight: "500",
                    transition: "background-color 0.3s ease",
                  }}>
                  {option.description}
                </button>
              ))}
          </div>
          <button
            onClick={handleNextQuestion}
            style={{
              marginTop: "20px",
              padding: "12px",
              backgroundColor: "#4CAF50",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              width: "100%",
            }}
            disabled={!selectedAnswer}>
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default QuizApp;
