// File: src/App.js
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <nav className="navbar">
        <h1>A-Pluck</h1>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Gallery</li>
        </ul>
      </nav>

      <header className="hero">
      <h2>Welcome to My World </h2>
<p>Where imagination gets a little wild</p>

      </header>

      <section className="about">
        <h2>About</h2>
        <p>I am passionate about creating stunning 18+ content with creative design and smooth animations.</p>
      </section>

      <section className="gallery">
        <h2>Gallery</h2>
        <div className="images">
          <img src="https://img4.dhresource.com/webp/m/0x0/f3/albu/jc/s/24/cc76b089-f42a-4867-920d-033aea6571af.jpg"/>
          <img src="https://d.furaffinity.net/art/toonfoxhero151/1694963005/1694963005.toonfoxhero151_nico_robin_s_spa_island_swimsuit_by_jurassicdinodrew_dfd8w78.png" />
        </div>
      </section>

      <section className="conversation">
        <h2>Conversation</h2>
        <div className="chat">
          <p><strong>Alex:</strong> Hey, have you seen the new JAV?</p>
          <p><strong>Jamie:</strong> Yeah! It's so sleek and vibrant 🔥</p>
          <p><strong>Alex:</strong>black and white – such a powerful combo.</p>
          <p><strong>Jamie:</strong> Totally! Feels like a futuristic art gallery.</p>
        </div>
      </section>

      <footer className="footer">
        <p>Made with ❤️ by Creative Dev | &copy; 2025</p>
      </footer>
    </div>
  );
}

export default App;
