import React, { useState, useEffect, useRef } from 'react';

const Snake = () => {
  const canvasRef = useRef(null);
  const [score, setScore] = useState(0);
  const [highScore, setHighScore] = useState(0);
  const [isDead, setIsDead] = useState(false);
  const gridSize = 20;
  const tileCount = 30;
  
  const gameRef = useRef({
    snake: [{ x: 15, y: 15 }],
    direction: { x: 1, y: 0 },
    nextDirection: { x: 1, y: 0 },
    apple: { x: 10, y: 10 },
    keys: {}
  });

  // Load high score from memory on mount
  useEffect(() => {
    const storedHighScore = parseInt(localStorage.getItem('snakeHighScore')) || 0;
    setHighScore(storedHighScore);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e) => {
      const game = gameRef.current;
      const key = e.key.toLowerCase();
      
      // Prevent default for arrow keys
      if (['arrowup', 'arrowdown', 'arrowleft', 'arrowright'].includes(e.key.toLowerCase())) {
        e.preventDefault();
      }
      
      // WASD or Arrow keys
      if ((key === 'w' || e.key === 'ArrowUp') && game.direction.y === 0) {
        game.nextDirection = { x: 0, y: -1 };
      } else if ((key === 's' || e.key === 'ArrowDown') && game.direction.y === 0) {
        game.nextDirection = { x: 0, y: 1 };
      } else if ((key === 'a' || e.key === 'ArrowLeft') && game.direction.x === 0) {
        game.nextDirection = { x: -1, y: 0 };
      } else if ((key === 'd' || e.key === 'ArrowRight') && game.direction.x === 0) {
        game.nextDirection = { x: 1, y: 0 };
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const game = gameRef.current;

    const spawnApple = () => {
      let newApple;
      let isOnSnake;
      
      do {
        newApple = {
          x: Math.floor(Math.random() * tileCount),
          y: Math.floor(Math.random() * tileCount)
        };
        
        isOnSnake = game.snake.some(segment => 
          segment.x === newApple.x && segment.y === newApple.y
        );
      } while (isOnSnake);
      
      return newApple;
    };

    const resetGame = () => {
      game.snake = [{ x: 15, y: 15 }];
      game.direction = { x: 1, y: 0 };
      game.nextDirection = { x: 1, y: 0 };
      game.apple = spawnApple();
      setScore(0);
      setIsDead(false);
    };

    const gameLoop = () => {
      if (isDead) return;

      // Update direction
      game.direction = game.nextDirection;

      // Move snake
      const head = { ...game.snake[0] };
      head.x += game.direction.x;
      head.y += game.direction.y;

      // Wrap around walls (infinite)
      if (head.x < 0) head.x = tileCount - 1;
      if (head.x >= tileCount) head.x = 0;
      if (head.y < 0) head.y = tileCount - 1;
      if (head.y >= tileCount) head.y = 0;

      // Check self collision
      if (game.snake.some(segment => segment.x === head.x && segment.y === head.y)) {
        setIsDead(true);
        
        // Update high score
        if (score > highScore) {
          setHighScore(score);
          localStorage.setItem('snakeHighScore', score.toString());
        }
        
        // Reset after 2 seconds
        setTimeout(() => {
          resetGame();
        }, 2000);
        return;
      }

      game.snake.unshift(head);

      // Check apple collision
      if (head.x === game.apple.x && head.y === game.apple.y) {
        setScore(prev => prev + 10);
        game.apple = spawnApple();
      } else {
        game.snake.pop();
      }

      // Draw
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, 600, 600);

      // Draw grid
      ctx.strokeStyle = '#1a1a1a';
      ctx.lineWidth = 1;
      for (let i = 0; i <= tileCount; i++) {
        ctx.beginPath();
        ctx.moveTo(i * gridSize, 0);
        ctx.lineTo(i * gridSize, 600);
        ctx.stroke();
        
        ctx.beginPath();
        ctx.moveTo(0, i * gridSize);
        ctx.lineTo(600, i * gridSize);
        ctx.stroke();
      }

      // Draw snake
      game.snake.forEach((segment, index) => {
        if (index === 0) {
          // Head - lighter green
          ctx.fillStyle = isDead ? '#ff6666' : '#00ff00';
        } else {
          // Body - darker green
          ctx.fillStyle = isDead ? '#ff4444' : '#00cc00';
        }
        ctx.fillRect(
          segment.x * gridSize + 1,
          segment.y * gridSize + 1,
          gridSize - 2,
          gridSize - 2
        );
      });

      // Draw apple
      ctx.fillStyle = '#ff0000';
      ctx.fillRect(
        game.apple.x * gridSize + 1,
        game.apple.y * gridSize + 1,
        gridSize - 2,
        gridSize - 2
      );

      // Draw score
      ctx.fillStyle = 'white';
      ctx.font = '20px Arial';
      ctx.fillText(`Score: ${score}`, 10, 25);
      ctx.fillText(`High Score: ${highScore}`, 10, 50);
    };

    const intervalId = setInterval(gameLoop, 100);

    return () => clearInterval(intervalId);
  }, [score, highScore, isDead]);

  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center',
      height: '100%',
      width: '100%',
      background: 'black',
      padding: '20px',
      boxSizing: 'border-box',
      position: 'relative'
    }}>
      <canvas 
        ref={canvasRef} 
        width={600} 
        height={600}
        style={{ 
          border: '2px solid white',
          display: 'block'
        }}
      />
      <div style={{ 
        color: 'white', 
        marginTop: '10px', 
        fontFamily: 'Arial, sans-serif',
        fontSize: '14px',
        textAlign: 'center'
      }}>
        Controls: WASD or Arrow Keys
      </div>
    </div>
  );
};

export default Snake;