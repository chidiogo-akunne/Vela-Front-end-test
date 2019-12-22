import React from 'react';

export default function Button (props) {
    return (
        <button type="button" className={props.ClassName} style={props.ButtonStyle}>{props.children}</button>
    )
}