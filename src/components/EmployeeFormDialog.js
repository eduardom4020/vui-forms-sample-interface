import React from 'react';
import { Segment } from 'semantic-ui-react';
import EmployeeCreationForm from './EmployeeCreationForm';
import { CenteredFlexDiv } from '../styles/components';

var EmployeeFormDialog = props => {
    
    return (
        <CenteredFlexDiv style={{position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2, backgroundColor: '#00000070'}} >
            <Segment >
                <EmployeeCreationForm />
            </Segment>
        </CenteredFlexDiv>
    );
}

export default EmployeeFormDialog;