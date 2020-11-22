import { Container, Header, Table, Segment, Button } from 'semantic-ui-react';
import styled, {css} from 'styled-components';

var CenteredFlexStyle = css`
    display: flex;
    justify-content: center;
    align-items: center;
`;

var StartFlexStyle = css`
    display: flex;
    justify-content: flex-start;
    align-items: center;
`;

export var StartTableCell = styled(Table.Cell)`${StartFlexStyle}`;

export var CenteredFlexDiv = styled.div`${CenteredFlexStyle}`;
export var CenteredFlexSegment = styled(Segment)`${CenteredFlexStyle}`;

export var MainContainer = styled(Container)`
    width: 80%;
    padding: 0 0 2rem 0;
`;

export var TableShadowedContainer = styled.div`
    box-shadow: 0 .4rem .5rem .8rem ${props => props.color || '#00000050'};
`;


export var SmallHeaderCell = styled(Table.HeaderCell)`
    padding: .1rem .7rem;
`;

export var TinySubheader = styled(Header.Subheader)`
    font-size: .75rem;
`;

export var ActionButton = styled(Button)`
    border-radius: 0 !important;
    height: 2.5rem !important;
    width: 2.5rem !important;

    &:hover {
        color: ${props => props.textColor} !important;
        border: solid 1px ${props => props.textColor} !important;
    }
`;

export var ActionButtonGroup = styled(Button.Group)`
    position: absolute;
    left: -2.5rem; 
    top: 0; 
    height: 5rem;
    cursor: pointer;
`;