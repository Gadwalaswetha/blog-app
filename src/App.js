import React from 'react';
import './App.css';

function App() {
    return (
        <div className="container">
            <header className="header">
                <h1>Why should I use Flashcards for revision?</h1>
                <p>August 25, 2024 - Student Name</p>
            </header>

            <div className="main-content">
                <div className="image-placeholder">
                    Title Image Place holder
                </div>

                <div className="contents">
                    <h2>Contents</h2>
                    <ul>
                        <li><a href="#why-use-flashcards">Why should I use Flashcards for revision?</a></li>
                        <li><a href="#how-to-use">How to use Save My Exams Flashcards?</a></li>
                        <li><a href="#other-ways">Are there other ways to use Flashcards to aid my revision?</a></li>
                        <li><a href="#conclusion">Conclusion</a></li>
                    </ul>
                </div>

                <section id="why-use-flashcards">
                    <h2>Why should I use Flashcards for revision?</h2>
                    <p>
                        Flashcards are a tried and tested method for revision. By using flashcards, you can quickly test your knowledge on key topics, allowing for repeated exposure to the material and increasing the likelihood of retaining the information.
                    </p>
                </section>

                <section id="how-to-use">
                    <h2>How to use Save My Exams Flashcards?</h2>
                    <p>
                        Save My Exams offers a wide range of flashcards that are designed to cover essential topics for your exams. These flashcards are easy to use and can be accessed on any device, making them perfect for revision on the go.
                    </p>
                    <img src="https://via.placeholder.com/600x300" alt="Example Flashcards" className="content-image" />
                </section>

                <section id="other-ways">
                    <h2>Are there other ways to use Flashcards to aid my revision?</h2>
                    <p>
                        Besides using flashcards for self-testing, you can also use them for group study sessions. Flashcards are great for breaking down complex topics into manageable pieces of information.
                    </p>
                </section>

                <section id="conclusion">
                    <h2>Conclusion</h2>
                    <p>
                        In conclusion, Flashcards are a powerful tool for revision, offering a portable and effective way to enhance your study sessions.
                    </p>
                </section>
            </div>
        </div>
    );
}

export default App;
