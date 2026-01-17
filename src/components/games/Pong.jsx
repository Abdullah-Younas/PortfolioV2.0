import React, { useState, useEffect, useRef } from 'react';

const Pong = () => {
  const canvasRef = useRef(null);
  const [scores, setScores] = useState({ player: 0, computer: 0 });
  const gameRef = useRef({
    ball: { x: 400, y: 300, dx: 4, dy: 4, radius: 8 },
    player: { x: 20, y: 250, width: 10, height: 100, dy: 0 },
    computer: { x: 770, y: 250, width: 10, height: 100 },
    keys: {}
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    const game = gameRef.current;

    const handleKeyDown = (e) => {
      game.keys[e.key] = true;
    };

    const handleKeyUp = (e) => {
      game.keys[e.key] = false;
    };

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    const gameLoop = () => {
      // Clear canvas
      ctx.fillStyle = 'black';
      ctx.fillRect(0, 0, 800, 600);

      // Draw center line
      ctx.strokeStyle = 'white';
      ctx.setLineDash([10, 10]);
      ctx.beginPath();
      ctx.moveTo(400, 0);
      ctx.lineTo(400, 600);
      ctx.stroke();
      ctx.setLineDash([]);

      // Player movement
      if (game.keys['w'] && game.player.y > 0) {
        game.player.y -= 6;
      }
      if (game.keys['s'] && game.player.y < 600 - game.player.height) {
        game.player.y += 6;
      }

      // Computer AI
      const computerCenter = game.computer.y + game.computer.height / 2;
      const ballY = game.ball.y;
      
      if (ballY < computerCenter - 10 && game.computer.y > 0) {
        game.computer.y -= 2;
      } else if (ballY > computerCenter + 10 && game.computer.y < 600 - game.computer.height) {
        game.computer.y += 2;
      }

      // Ball movement
      game.ball.x += game.ball.dx;
      game.ball.y += game.ball.dy;

      // Ball collision with top/bottom
      if (game.ball.y - game.ball.radius <= 0 || game.ball.y + game.ball.radius >= 600) {
        game.ball.dy *= -1;
      }

      // Ball collision with paddles
      // Player paddle
      if (
        game.ball.x - game.ball.radius <= game.player.x + game.player.width &&
        game.ball.x + game.ball.radius >= game.player.x &&
        game.ball.y >= game.player.y &&
        game.ball.y <= game.player.y + game.player.height
      ) {
        game.ball.dx = Math.abs(game.ball.dx);
        const hitPos = (game.ball.y - game.player.y) / game.player.height;
        game.ball.dy = (hitPos - 0.5) * 8;
      }

      // Computer paddle
      if (
        game.ball.x + game.ball.radius >= game.computer.x &&
        game.ball.x - game.ball.radius <= game.computer.x + game.computer.width &&
        game.ball.y >= game.computer.y &&
        game.ball.y <= game.computer.y + game.computer.height
      ) {
        game.ball.dx = -Math.abs(game.ball.dx);
        const hitPos = (game.ball.y - game.computer.y) / game.computer.height;
        game.ball.dy = (hitPos - 0.5) * 8;
      }

      // Score and reset
      if (game.ball.x - game.ball.radius <= 0) {
        setScores(prev => ({ ...prev, computer: prev.computer + 1 }));
        game.ball.x = 400;
        game.ball.y = 300;
        game.ball.dx = 4;
        game.ball.dy = 4;
      } else if (game.ball.x + game.ball.radius >= 800) {
        setScores(prev => ({ ...prev, player: prev.player + 1 }));
        game.ball.x = 400;
        game.ball.y = 300;
        game.ball.dx = -4;
        game.ball.dy = 4;
      }

      // Draw paddles
      ctx.fillStyle = 'white';
      ctx.fillRect(game.player.x, game.player.y, game.player.width, game.player.height);
      ctx.fillRect(game.computer.x, game.computer.y, game.computer.width, game.computer.height);

      // Draw ball
      ctx.beginPath();
      ctx.arc(game.ball.x, game.ball.y, game.ball.radius, 0, Math.PI * 2);
      ctx.fill();

      // Draw scores
      ctx.font = '48px Arial';
      ctx.fillText(scores.player.toString(), 250, 80);
      ctx.fillText(scores.computer.toString(), 520, 80);
    };

    const intervalId = setInterval(gameLoop, 1000 / 60);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, [scores]);

  return (
    <div 
      style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        alignItems: 'center', 
        justifyContent: 'center',
        height: '100%',
        width: '100%',
        background: 'black',
        padding: '20px',
        boxSizing: 'border-box'
      }}
    >
      <canvas 
        ref={canvasRef} 
        width={800} 
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
        fontSize: '14px'
      }}>
        Controls: W/S to move
      </div>
    </div>
  );
};

export default Pong;