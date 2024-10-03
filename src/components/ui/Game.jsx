import React, { useState, useEffect } from 'react';

const GRID_SIZE = 16;

const Game = ({ setShowGame }) => {
  const [snake, setSnake] = useState([{ x: 10, y: 10 }]);
  const [food, setFood] = useState(generateFood());
  const [direction, setDirection] = useState({ x: 0, y: 0 });
  const [gameOver, setGameOver] = useState(false);
  const [foodLeft, setFoodLeft] = useState(10);
  const [score, setScore] = useState(0);
  const [speed, setSpeed] = useState(200);

  function generateFood() {
    let newFood;
    do {
      newFood = { x: Math.floor(Math.random() * GRID_SIZE), y: Math.floor(Math.random() * GRID_SIZE) };
    } while (snake.some(segment => segment.x === newFood.x && segment.y === newFood.y));
    return newFood;
  }

  useEffect(() => {
    const handleKeyDown = (e) => {
      switch (e.key) {
        case 'ArrowUp':
          if (direction.y === 0) setDirection({ x: 0, y: -1 });
          break;
        case 'ArrowDown':
          if (direction.y === 0) setDirection({ x: 0, y: 1 });
          break;
        case 'ArrowLeft':
          if (direction.x === 0) setDirection({ x: -1, y: 0 });
          break;
        case 'ArrowRight':
          if (direction.x === 0) setDirection({ x: 1, y: 0 });
          break;
        default:
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [direction]);

  useEffect(() => {
    if (gameOver) return;

    const moveSnake = () => {
      setSnake((prev) => {
        const newSnake = [...prev];
        const head = {
          x: (newSnake[0].x + direction.x + GRID_SIZE) % GRID_SIZE,
          y: (newSnake[0].y + direction.y + GRID_SIZE) % GRID_SIZE,
        };

        if (newSnake.some((segment, index) => index !== 0 && segment.x === head.x && segment.y === head.y)) {
          setGameOver(true);
          return prev;
        }

        newSnake.unshift(head);

        if (head.x === food.x && head.y === food.y) {
          setFood(generateFood());
          setFoodLeft((prevFoodLeft) => prevFoodLeft - 1);
          setScore((prevScore) => prevScore + 1);

          if (speed > 50) {
            setSpeed((prevSpeed) => prevSpeed - 10);
          }
        } else {
          newSnake.pop();
        }

        return newSnake;
      });
    };

    const interval = setInterval(moveSnake, speed);
    return () => clearInterval(interval);
  }, [snake, direction, gameOver, food]);

  const startGame = () => {
    setSnake([{ x: 10, y: 10 }]);
    setFood(generateFood());
    setDirection({ x: 0, y: 0 });
    setFoodLeft(10);
    setGameOver(false);
    setScore(0);
    setSpeed(200);
    alert("use key arrow to play game")
  };

  return (
    <div className='flex flex-col items-center justify-center rounded-lg z-50'>
      {gameOver ? (
        <div className="flex flex-col items-center">
          <p className="text-white text-2xl mb-4">Game Over</p>
          <p className="text-white">Score: {score}</p>
          <button
            onClick={startGame}
            className='bg-green-500 text-white px-4 py-2 rounded'
          >
            Restart Game
          </button>
        </div>
      ) : (
        <>
          <div className='grid grid-cols-20'>
            {Array.from({ length: GRID_SIZE }, (_, row) => (
              <div className='flex' key={row}>
                {Array.from({ length: GRID_SIZE }, (_, col) => (
                  <div
                    key={col}
                    className={`w-5 h-5 ${snake.some((segment) => segment.x === col && segment.y === row) ? 'bg-green-400' : food.x === col && food.y === row ? 'bg-red-600 rounded-full ' : 'bg-green-400 opacity-30'}`}
                  />
                ))}
              </div>
            ))}
          </div>
          <div className="text-white mt-4">
            <p>Score: {score}</p>
          </div>
          <div className='flex gap-2'>
            <button
              className='mt-4 bg-gradient-to-r from-orange-500 to bg-pink-600 text-white px-4 py-2 rounded outline-none'
              onClick={startGame}
            >
              Start Game
            </button>
            <button
              className='mt-4 bg-gradient-to-r  from-purple-500 text-white to-blue-600 px-4 py-2 rounded outline-none'
              onClick={() => setShowGame(false)}
            >
              Hide Game
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Game;