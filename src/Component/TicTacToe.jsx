import React, { useRef, useState } from "react";
import "./TicTacToe.css";
import cross_icon from "../assets/cross.png";
import circle_icon from "../assets/circle.png";

let data = ["", "", "", "", "", "", "", "", ""];

const TicTacToe = () => {
  const [count, setCount] = useState(0);
  const [lock, setLock] = useState(false);
  const titleRef = useRef(null);
  const [plaer1, setPlayer1] = useState("");
  const [plaer2, setPlayer2] = useState("");

  const toggle = (e, num) => {
    if (lock) {
      return 0;
    }

    setCount((count) => {
      const newCount = count + 1;

      if (count % 2 === 0) {
        // when click is even display x and add it in data array
        e.target.innerHTML = `<img  src='${cross_icon}'>`;
        data[num] = "x";
      } else {
        //   when click is odd display o and add in data array
        e.target.innerHTML = `<img src='${circle_icon}'>`;
        data[num] = "o";
      }

      checkWin();
      return newCount;
    });
  };

  const checkWin = () => {
    if (data[0] === data[1] && data[1] === data[2] && data[2] !== "") {
      won(data[2]);
    } else if (data[3] === data[4] && data[4] === data[5] && data[5] !== "") {
      won(data[5]);
    } else if (data[6] === data[7] && data[7] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[3] && data[3] === data[6] && data[6] !== "") {
      won(data[6]);
    } else if (data[1] === data[4] && data[4] === data[7] && data[7] !== "") {
      won(data[7]);
    } else if (data[2] === data[5] && data[5] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[0] === data[4] && data[4] === data[8] && data[8] !== "") {
      won(data[8]);
    } else if (data[6] === data[4] && data[4] === data[2] && data[2] !== "") {
      won(data[2]);
    }
  };

  const won = (winner) => {
    setLock(true);
    if (winner === "x") {
      titleRef.current.innerHTML = `Congratulations: <img src='${cross_icon}'> won `;
    } else {
      titleRef.current.innerHTML = `Congratulations: <img src='${circle_icon}'> won`;
    }
  };

  const resetGame = () => {
    data = ["", "", "", "", "", "", "", "", ""];
    setCount(0);
    setLock(false);
    const boxes = document.querySelectorAll(".boxes");
    boxes.forEach((box) => (box.innerHTML = ""));
  };

  return (
    <div className="container">
      <h1 className="title">
        Tic Tac Toe Game in <span>React</span>
      </h1>
      <div className="board">
        <div className="row1">
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 0);
            }}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 1);
            }}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 2);
            }}
          ></div>
        </div>
        <div className="row2">
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 3);
            }}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 4);
            }}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 5);
            }}
          ></div>
        </div>
        <div className="row3">
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 6);
            }}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 7);
            }}
          ></div>
          <div
            className="boxes"
            onClick={(e) => {
              toggle(e, 8);
            }}
          ></div>
        </div>
      </div>
      <button className="reset" onClick={resetGame}>
        Reset
      </button>
      <div className="winner">
        <div ref={titleRef}></div>
      </div>
    </div>
  );
};

export default TicTacToe;
