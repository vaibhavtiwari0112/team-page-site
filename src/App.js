import React, { useEffect,useState } from 'react';
import './App.css';
import { universities, mentors } from './data';
import MentorCard from './MentorCard';

function App() {
  const [showFooter, setShowFooter] = useState(false);
  useEffect(() => {
    
    const confettiContainer = document.querySelector('.ConfettiContainer');
    setTimeout(() => {
      confettiContainer.style.display = 'none';
    }, 8000);
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowFooter(true);
      } else {
        setShowFooter(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Team Page</h1>
      </header>
      <section className="AnimatedMessage">
        <marquee behavior="scroll" direction="left">
          Learn from scientists, research scholars from top institutes of the world!!!!
        </marquee>
      </section>
      <section className="Universities">
<h2 className='SectionHeadingButton'>Universities</h2>
<div className="UniversityCards">
  {universities.map((university, index) => (
    <div key={index} className="UniversityCard">
      <img src={`/images/building1.png`} alt={university} />
      <p>{university}</p>
    </div>
  ))}
</div>
</section>
      <section className="Mentors">
        <h2 className="SectionHeadingButton">Meet Your Mentor</h2>
        <div className="MentorCards">
          {mentors.map((mentor, index) => (
            <MentorCard
              key={index}
              name={mentor.name}
              university={mentor.university}
              avatar={mentor.avatar}
            />
          ))}
        </div>
      </section>
      <section className="Mentors">
        <h2 className="SectionHeadingButton">Mentors and Advisors</h2>
        <div className="MentorCards">
          {mentors.map((mentor, index) => (
            <div key={index} className="MentorCard">
              <img src={`avatars/${mentor.avatar}`} alt={mentor.name} />
              <h3>{mentor.name}</h3>
              <p>{mentor.university}</p>
              <button className="MessageButton">Message Him Now</button>
            </div>
          ))}
        </div>
      </section>
      <footer className={`Footer ${showFooter ? 'ShowFooter' : ''}`}>
        <p>&copy; 2023 Vaibhav Tiwari. All rights reserved.</p>
      </footer>
      <div className="ConfettiContainer">
        {[...Array(200)].map((_, index) => (
          <div
            key={index}
            className="Confetti"
            style={{ left: `${Math.random() * 100}vw`, animationDelay: `${Math.random() * 8}s` }}
          />
        ))}
      </div>
    </div>
  );
}

export default App;



