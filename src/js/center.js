import React from 'react';

function Center(props) {
    const style = { textAlign: 'center' }
    return React.createElement('div', { style }, props.children)
}

export default Center;