import React, {useState, useEffect} from 'react';
import { Segment, Icon } from 'semantic-ui-react';
import EmployeeCreationForm from './EmployeeCreationForm';
import { CenteredFlexDiv } from '../styles/components';
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

var EmployeeFormDialog = ({handleClose, handleSubmit}) => {
    var [mousePosition, setMousePosition] = useState(MousePosition.Outside);
    var [animation, setAnimation] = useState(null);

    useEffect(() => {
        if(animation === 'test') {
            setTimeout(() => setAnimation('test2'), 700)
        }
    }, [animation]);

    return (
        <CenteredFlexDiv
            style={BACKGROUND_STYLE}
            onClick={() => mousePosition === MousePosition.Outside && handleClose()}
        >
            <Segment
                style={{transition: 'height .7s ease-in-out', height: animation != null ? '5rem' : '37rem'}}
                onMouseEnter={() => animation == null && setMousePosition(MousePosition.Inside)}
                onMouseLeave={() => animation == null && setMousePosition(MousePosition.Outside)}
            >
                {
                    animation !== 'test2' &&
                        <EmployeeCreationForm 
                            handleSubmit={handleSubmit}
                            afterSubmit={() => animation == null && setAnimation('test')}
                        />
                }
                {
                    animation === 'test2' && <Icon name='envelope'/>
                }
            </Segment>
        </CenteredFlexDiv>
    );
}

export default EmployeeFormDialog;