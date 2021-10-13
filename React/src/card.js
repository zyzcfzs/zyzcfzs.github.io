import React from 'react';
const URL =
    'https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json';
const Card = ({ theme, setTheme, randomColor }) => {
    const [data, setData] = React.useState({ quote: '', author: '' });
    React.useEffect(() => {
        fetch(URL)
            .then((res) => res.json())
            .then((data) => {
                let { quotes } = data;
                let quote = quotes[parseInt(Math.random() * quotes.length)];
                setData(quote);
            })
            .catch((err) => {
                throw new Error(err);
            });
    }, [theme]);
    return (
        <div id='quote-box'>
            <div id='text'>{data.quote}</div>
            <div id='author'> - {data.author}</div>
            <div className='shares'>
                <button
                    type='button'
                    id='new-quote'
                    onClick={() => {
                        setTheme(randomColor());
                    }}
                >
                    New Quote
                </button>
                <a
                    id='tweet-quote'
                    href='twitter.com/intent/tweet'
                    rel='noreferrer'
                    target='_blank'
                >
                    111
                </a>
            </div>
        </div>
    );
};

export default Card;
