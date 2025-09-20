import React, { useState, useEffect } from 'react';
import './App.css';

// Componente de Card
const Card = ({ title, description, icon }) => (
  <div className="card">
    <div className="card-icon">{icon}</div>
    <h3>{title}</h3>
    <p>{description}</p>
  </div>
);

// Componente de Contador
const Counter = () => {
  const [count, setCount] = useState(0);
  
  return (
    <div className="counter">
      <h3>Contador Interativo</h3>
      <div className="counter-display">{count}</div>
      <div className="counter-buttons">
        <button onClick={() => setCount(count - 1)}>-</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <button onClick={() => setCount(count + 1)}>+</button>
      </div>
    </div>
  );
};

// Componente de Relógio
const Clock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="clock">
      <h3>Relógio em Tempo Real</h3>
      <div className="time-display">
        {time.toLocaleTimeString('pt-BR')}
      </div>
      <div className="date-display">
        {time.toLocaleDateString('pt-BR', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        })}
      </div>
    </div>
  );
};

// Componente principal
function App() {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const cards = [
    {
      title: "React",
      description: "Uma biblioteca JavaScript para criar interfaces de usuário",
      icon: "⚛️"
    },
    {
      title: "Componentes",
      description: "Reutilizáveis e modulares para desenvolvimento eficiente",
      icon: "🧩"
    },
    {
      title: "Hooks",
      description: "Funcionalidades modernas para gerenciar estado e efeitos",
      icon: "🎣"
    },
    {
      title: "JSX",
      description: "Sintaxe que combina JavaScript com HTML de forma elegante",
      icon: "💎"
    }
  ];

  return (
    <div className={`App ${theme}`}>
      <header className="header">
        <div className="header-content">
          <h1>🚀 Meu App React</h1>
          <button className="theme-toggle" onClick={toggleTheme}>
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
        </div>
      </header>

      <main className="main">
        <section className="hero">
          <h2>Bem-vindo ao React!</h2>
          <p>Uma aplicação moderna criada com React, hooks e componentes funcionais.</p>
        </section>

        <section className="features">
          <h2>Recursos Principais</h2>
          <div className="cards-grid">
            {cards.map((card, index) => (
              <Card
                key={index}
                title={card.title}
                description={card.description}
                icon={card.icon}
              />
            ))}
          </div>
        </section>

        <section className="interactive">
          <div className="interactive-grid">
            <Counter />
            <Clock />
          </div>
        </section>

        <section className="info">
          <h2>Como usar</h2>
          <div className="info-content">
            <div className="info-step">
              <span className="step-number">1</span>
              <p>Execute <code>npm start</code> para iniciar o servidor de desenvolvimento</p>
            </div>
            <div className="info-step">
              <span className="step-number">2</span>
              <p>Abra <code>http://localhost:3000</code> no seu navegador</p>
            </div>
            <div className="info-step">
              <span className="step-number">3</span>
              <p>Edite os arquivos em <code>src/</code> e veja as mudanças em tempo real!</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <p>Feito com ❤️ usando React</p>
      </footer>
    </div>
  );
}

export default App;
