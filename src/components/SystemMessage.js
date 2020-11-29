import React, { useState, useEffect } from 'react';
import { Message, Transition, Progress } from 'semantic-ui-react';

var SystemMessage = ({success, warning, error, onClose, ...props}) => {
    var [ timeoutId, setTimeoutId ] = useState(null);
    var [ closed, close ] = useState(false);
    console.log({props})
    useEffect(() => {
        if(timeoutId === null) {
            var timeout = setTimeout(() => close(true), 2000);
            setTimeoutId(timeout);
        }
    }, [timeoutId]);

    useEffect(() => {
        if(onClose && closed) onClose(props.key);
    }, [closed]);

    return (
        <Transition.Group animation='swing left' duration={200} >
            {
                !closed &&
                    <Message
                        onDismiss={() => close(true)}
                        {...props}
                    >
                        {/* <Progress {...{success, warning, error}} indicating /> */}
                    </Message>
            }
        </Transition.Group>
    );
}

export default SystemMessage;