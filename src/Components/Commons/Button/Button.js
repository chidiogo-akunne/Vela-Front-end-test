import React from 'react';

export default function Button (props) {
    return (
        <button type="button" className={props.className} style={props.ButtonStyle}>{props.children}</button>
    )
}