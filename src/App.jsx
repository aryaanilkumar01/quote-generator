import React, { useState, useEffect } from 'react';

function App() {
    const [quote, setQuote] = useState({});

    useEffect(() => {
        fetchQuote();
    }, []);

    const fetchQuote = async () => {
        try {
            const response = await fetch('https://api.quotable.io/random');
            const data = await response.json();
            setQuote(data);
        } catch (error) {
            console.error('Error fetching quote:', error);
        }
    };

    return (
        <div style={{textAlign:'center',justifyContent:'center'}} className='mt-5'>
            <h1 style={{fontFamily:'serif',fontSize:'95px'}}>Quote Generator</h1>
            <blockquote>
                <p style={{fontFamily:'cursive'}}>{quote.content}</p>
                <footer>{quote.author}</footer>
            </blockquote>
            <button style={{color:'orange',backgroundColor:'white',border: 'none',padding:' 10px 20px',cursor:' pointer'}} onClick={fetchQuote}>Generate Quote</button>
        </div>
    );
}

export default App;