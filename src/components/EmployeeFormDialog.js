import React, {useState, useEffect} from 'react';
import { Transition, Icon, Message } from 'semantic-ui-react';
import EmployeeCreationForm from './EmployeeCreationForm';
import { CenteredFlexDiv, CenteredFlexSegment } from '../styles/components';
import { MousePosition } from '../enums/mousePositionEnum'; 

const BACKGROUND_STYLE = {
    position: 'fixed', 
    top: 0, 
    left: 0, 
    width: '100%', 
    height: '100%', 
    zIndex: 2, 
    backgroundColor: '#00000070'
};

var EmployeeFormDialog = ({handleClose, handleSubmit, submitTotalTime}) => {
    var [mousePosition, setMousePosition] = useState(MousePosition.Outside);
    var [animation, setAnimation] = useState(0);
    var [timeoutId, setTimeoutId] = useState(null);
    var [errorMessage, setErrorMessage] = useState(null);

    useEffect(() => {
        var id = null;
        switch(animation) {
            case 1:
                id = setTimeout(() => setAnimation(2), submitTotalTime * .2);
                break;
            case 2:
                id = setTimeout(() => setAnimation(3), submitTotalTime * .2);
                break;
            case 3:
                id = setTimeout(() => setAnimation(4), submitTotalTime * .1);
                break;
            case 4:
                id = setTimeout(() => setAnimation(5), submitTotalTime * .3);
                break;
            case 5:
                id = setTimeout(() => {
                    setAnimation(0);
                    handleClose();
                }, submitTotalTime * .2);
                break;
            default:
                break;
        }
        setTimeoutId(id);
    }, [animation, submitTotalTime]);

    return (
        <CenteredFlexDiv
            style={BACKGROUND_STYLE}
            onClick={() => mousePosition === MousePosition.Outside && handleClose()}
        >
            <CenteredFlexSegment
                style={{
                    transition: 'height .7s ease-in-out, transform .3s ease-in-out', 
                    height: animation >= 1 ? '5rem' : errorMessage ? '42rem' : '37rem', 
                    width: '60rem',
                    transform: animation >= 5 ? 'translateX(200%)' : 'translateX(0)',
                    flexDirection: 'column'
                }}
                onMouseEnter={() => animation === 0 && setMousePosition(MousePosition.Inside)}
                onMouseLeave={() => animation === 0 && setMousePosition(MousePosition.Outside)}
            >
                {
                    errorMessage && animation === 0 &&
                        <Message error>
                            <Icon name='warning circle' />
                            {errorMessage}
                        </Message>
                }
                <EmployeeCreationForm 
                    handleSubmit={handleSubmit}
                    onSend={() => {
                        setErrorMessage(null);
                        if(animation === 0) setAnimation(1);
                    }}
                    onFailure={(message) => {
                        setErrorMessage(message);
                        if(timeoutId != null) clearTimeout(timeoutId);
                        if(animation > 0) setAnimation(0);
                    }}
                    hide={animation >= 2}
                />
                <Transition.Group 
                    animation='jiggle'
                    duration={300}
                    unmountOnHide
                    transitionOnMount
                >
                    {
                        animation >= 3 && animation <= 5 &&
                            <Icon name={`envelope${animation === 3 ? ' open' : ''}`} size='huge'/>
                    }
                </Transition.Group>
            </CenteredFlexSegment>
        </CenteredFlexDiv>
    );
}

export default EmployeeFormDialog;