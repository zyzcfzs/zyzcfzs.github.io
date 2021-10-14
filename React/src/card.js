import React from 'react';
const QUOTEURL =
    'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
const Card = ({ theme, setTheme, randomColor }) => {
    const [data, setData] = React.useState({ quote: '', author: '' });
    const [opacity, setOpacity] = React.useState(1);
    const quotes = React.useRef([]);
    function getRandomQuote(quotes) {
        let quote = quotes[parseInt(Math.random() * quotes.length)];
        if (quote === undefined) return;
        setData(quote);
    }
    React.useEffect(() => {
        fetch(QUOTEURL)
            .then((res) => res.json())
            .then((data) => {
                quotes.current = data.quotes;
                getRandomQuote(quotes.current);
            })
            .catch((err) => {
                throw new Error(err);
            });
    }, []);
    return (
        <div id='quote-box'>
            <div className='textbox' style={{ opacity: opacity }}>
                <div id='text'>
                    <i className='bi bi-chat-square-quote'></i> {data.quote}
                </div>
                <div id='author'> - {data.author}</div>
            </div>
            <div className='shares'>
                <button
                    type='button'
                    id='new-quote'
                    style={{ backgroundColor: theme }}
                    onClick={() => {
                        setTheme(randomColor());
                        getRandomQuote(quotes.current);
                    }}
                >
                    New Quote
                </button>
                <div className='links'>
                    <a
                        id='tweet-quote'
                        className='iconlinks'
                        style={{ backgroundColor: theme, color: '#ffffff' }}
                        title='Tweet this quote!'
                        href='https://www.twitter.com/intent/tweet'
                        rel='noreferrer'
                        target='_blank'
                    >
                        <i className='bi bi-twitter'></i>
                    </a>
                    <a
                        id='facebook-quote'
                        className='iconlinks'
                        style={{ backgroundColor: theme, color: '#ffffff' }}
                        title='Share it on Facebook'
                        href='https://www.facebook.com'
                        rel='noreferrer'
                        target='_blank'
                    >
                        <i className='bi bi-facebook'></i>
                    </a>
                </div>
            </div>
            <div className='info'>
                By{' '}
                <a
                    href='https://zyzcfzs.github.io/'
                    target='_blank'
                    rel='noreferrer'
                >
                    zyzcfzs
                </a>
            </div>
        </div>
    );
};

export default Card;
