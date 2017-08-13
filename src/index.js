import React from 'react';
import ReactDOM from 'react-dom';
import XKCDComic from './js/XKCDComic.js';
//import Center from './js/center.js'
//import css from './css/index.css'

ReactDOM.render(
    // Create an element of type XKCDComic, with the props `path`, `number` and
    // `altText`.
    React.createElement(XKCDComic, {
        path: 'compiling',
        number: '303',
        altText: "'Are you stealing those LCDs?' 'Yeah, but I'm doing it while my code compiles.'",
    }),
    document.getElementById('root')
)