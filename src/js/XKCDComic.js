import React from 'react';

// XKCDComic React Component
// Steals Randall Munroe's work from xkcd.com
function XKCDComic(props) {
    return React.createElement(
        'a', { href: `https://xkcd.com/${props.number}/` },
        React.createElement('img', {
            src: `https://imgs.xkcd.com/comics/${props.path}.png`,
            title: props.altText,
        }),
    )
}

export default XKCDComic;