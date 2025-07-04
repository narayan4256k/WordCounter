import React, { useState } from 'react';

export default function About() {
  const [myStyle, setMyStyle] = useState({
    color: 'black',
    backgroundColor: 'white',
    transition: 'all 0.3s ease'
  });

  const [btnText, setBtnText] = useState('Enable Dark Mode');

  const changeMode = () => {
    if (myStyle.color === 'black') {
      setMyStyle({
        color: 'white',
        backgroundColor: '#1c1c1c',
        transition: 'all 0.3s ease'
      });
      setBtnText('Enable Light Mode');
    } else {
      setMyStyle({
        color: 'black',
        backgroundColor: 'white',
        transition: 'all 0.3s ease'
      });
      setBtnText('Enable Dark Mode');
    }
  };

  return (
    <div className='container' style={myStyle}>
      <h1 className='my-4'>About Word Counter</h1>
      <div className="accordion" id="accordionExample">
        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
              🔍 What is Word Counter?
            </button>
          </h2>
          <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Word Counter is a clean, powerful app built using React to help you count words and characters in real-time. Perfect for students, writers, developers — basically anyone who writes stuff 😎.
            </div>
          </div>
        </div>

        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
              ⚙️ Technologies Used
            </button>
          </h2>
          <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              This project uses:
              <ul>
                <li>React.js</li>
                <li>Bootstrap</li>
                <li>React Router DOM</li>
                <li>GitHub Pages for deployment</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="accordion-item" style={myStyle}>
          <h2 className="accordion-header">
            <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
              👨‍💻 About the Developer
            </button>
          </h2>
          <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
            <div className="accordion-body">
              Made with ❤️ by Narayan — a chill dev who vibes with clean UI, good UX, and functional code. Follow me on <a href="https://github.com/narayan4256k" target="_blank" rel="noopener noreferrer">GitHub</a> for more cool stuff.
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <button type='button' className='btn btn-primary my-3' onClick={changeMode}>
          {btnText}
        </button>
      </div>
    </div>
  );
}
