import React from 'react';

const Content = (props: any) => {
    const data = props.data
    return (
        <div
            key={props.index}
            style={
                props.activeTabId === props.index 
                ? { display: "block"}
                : { display: "none" }
            }
        >
            {props.index}
        </div>
    )
}

export default Content;