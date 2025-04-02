import { useEffect, useRef } from "react";

const BouncingName = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");

    // Устанавливаем размер canvas
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    let x = 100;
    let y = 100;
    let dx = 2;
    let dy = 2;
    const fontSize = 40;
    const name = "NURBEK";

    function getRandomColor() {
      return `rgb(${Math.random() * 255}, ${Math.random() * 255}, ${Math.random() * 255})`;
    }

    let color = getRandomColor();

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = color;
      ctx.font = `${fontSize}px Arial`;
      ctx.fillText(name, x, y);

      const textWidth = ctx.measureText(name).width;
      const textHeight = fontSize;

      if (x + textWidth >= canvas.width || x <= 0) {
        dx = -dx;
        color = getRandomColor();
      }
      if (y >= canvas.height || y - textHeight <= 0) {
        dy = -dy;
        color = getRandomColor();
      }

      x += dx;
      y += dy;

      requestAnimationFrame(draw);
    }

    draw();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return <canvas ref={canvasRef} style={{ position: "absolute", top: 0, left: 0 }} />;
};

export default BouncingName;