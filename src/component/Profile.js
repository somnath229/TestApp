import React, { useEffect } from "react";
import QuizApp from "./QuizApp";
import Navbar from "./Navbar";

export default function Profile() {
  return (
    <div>
      <div>
        <Navbar />
        <QuizApp />
      </div>
    </div>
  );
}
