import React, { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(0); // Время в миллисекундах
  const [isRunning, setIsRunning] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false); // Тема (светлая/темная)

  useEffect(() => {
    let interval;
    if (isRunning) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10); // Увеличиваем на 10 мс
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning]);

  const formatTime = (time) => {
    const hours = String(Math.floor(time / 3600000)).padStart(2, "0");
    const minutes = String(Math.floor((time % 3600000) / 60000)).padStart(2, "0");
    const seconds = String(Math.floor((time % 60000) / 1000)).padStart(2, "0");
    const milliseconds = String(time % 1000).padStart(3, "0").slice(0, 2);

    return `${hours}:${minutes}:${seconds}.${milliseconds}`;
  };

  return (
    <div style={{ ...styles.container, backgroundColor: isDarkMode ? "#222" : "#f4f4f4" }}>
      <h1 style={{ ...styles.timer, color: isDarkMode ? "white" : "black" }}>{formatTime(time)}</h1>
      <div style={styles.buttonContainer}>
        <button
          style={{ ...styles.button, backgroundColor: isDarkMode ? "#28a745" : "#007BFF" }}
          onClick={() => setIsRunning(!isRunning)}
        >
          {isRunning ? "Стоп" : "Старт"}
        </button>
        {time > 0 && (
          <button
            style={{ ...styles.button, backgroundColor: "#DC3545" }}
            onClick={() => setTime(0)}
          >
            Сброс
          </button>
        )}
        <button
          style={{ ...styles.button, backgroundColor: isDarkMode ? "#ffc107" : "#555" }}
          onClick={() => setIsDarkMode(!isDarkMode)}
        >
          {isDarkMode ? "Светлая тема" : "Темная тема"}
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    transition: "background-color 0.3s ease",
  },
  timer: {
    fontSize: "48px",
    fontWeight: "bold",
    marginBottom: "20px",
    transition: "color 0.3s ease",
  },
  buttonContainer: {
    display: "flex",
    gap: "10px",
  },
  button: {
    fontSize: "20px",
    padding: "10px 20px",
    cursor: "pointer",
    borderRadius: "5px",
    border: "none",
    color: "white",
    transition: "background-color 0.3s ease",
  },
};

export default Timer;