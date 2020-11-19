import React from 'react';
import { Button } from 'semantic-ui-react';

var FAB = props => (
    <Button
        circular
        size='huge'
        {...props}
        style={{...props.style, position: 'fixed', bottom:'1rem', right: '1rem'}}
    />
);

export default FAB;