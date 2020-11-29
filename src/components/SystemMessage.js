import React, { useState, useEffect } from 'react';
import { Message, Transition, Progress, Segment } from 'semantic-ui-react';

const TOTAL_TIME = 5000;

var SystemMessage = ({success, warning, error, onClose, ...props}) => {
    var [ timeoutId, setTimeoutId ] = useState(null);
    var [ closed, close ] = useState(false);
    var [ percent, setPercent ] = useState(0);

    useEffect(() => () => {
        setTimeoutId(null);
        close(false);
        setPercent(0);
    }, []);
    
    useEffect(() => {
        if(timeoutId === null) {
            var timeout = setTimeout(() => close(true), TOTAL_TIME);
            setTimeoutId(timeout);
        }
    }, [timeoutId]);

    useEffect(() => {
        if(onClose && closed) onClose(props.key);
    }, [closed]);

    useEffect(() => {
        setTimeout(() => setPercent(percent + 1.1), TOTAL_TIME / 100);
    }, [percent]);

    return (
        <Transition.Group animation='swing left' duration={500}>
            {
                !closed &&
                    <Segment style={{padding: 0}}>
                        <Message
                            attached='top'
                            onDismiss={() => close(true)}
                            {...props}
                            {...{success, warning, error}}
                        />
                        <Progress 
                            attached='bottom'
                            indicating
                            {...{success, warning, error, percent}}
                        />
                    </Segment>
            }
        </Transition.Group>
    );
}

export default SystemMessage;