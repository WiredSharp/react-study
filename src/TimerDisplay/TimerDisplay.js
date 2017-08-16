import React from 'react';
import ReactDOM from 'react-dom';
import { TimerDisplay } from 'react-armory-timer'

// Class components always extend from `React.Component`
class SecondCounter extends React.Component {
    render() {
        // `this` doesn't exist in function components. I guess you'll need to turn
        // this into a class component!
        return React.createElement(TimerDisplay, { time: this.props.count, title: 'ACTUAL' })
    }
}

export default function renderApp(count) {
    ReactDOM.render(
        React.createElement('div', {},
            React.createElement(SecondCounter, { count: count }),
            React.createElement(TimerDisplay, { time: count, title: 'EXPECTED' })
        ),
        document.getElementById('root')
    )
    setTimeout(() => renderApp(count + 1), 1000)
}