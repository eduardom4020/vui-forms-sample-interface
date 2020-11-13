import React from 'react';
import { Table } from 'semantic-ui-react';
import { EmployeeRow } from './EmployeeRow';

var EmployeeTable = ({rows=[]}) => (
    <Table celled structured striped size='small'>
        <Table.Header>
            <Table.Row>
                <Table.HeaderCell rowSpan='2' width='three' style={{padding: '.1rem .7rem'}}>Profissional</Table.HeaderCell>
                <Table.HeaderCell rowSpan='2' width='one' style={{padding: '.1rem .7rem'}}>Identificação</Table.HeaderCell>
                <Table.HeaderCell colSpan='3' width='one' style={{padding: '.1rem .7rem'}}>Contato</Table.HeaderCell>
                <Table.HeaderCell rowSpan='2' width='two' style={{padding: '.1rem .7rem'}}>Endereço</Table.HeaderCell>
            </Table.Row>
            <Table.Row>
                <Table.HeaderCell width='one' style={{padding: '.1rem .7rem'}}>Telefone</Table.HeaderCell>
                <Table.HeaderCell width='two' style={{padding: '.1rem .7rem'}}>Email</Table.HeaderCell>
                <Table.HeaderCell width='one' style={{padding: '.1rem .7rem'}}>Outros</Table.HeaderCell>
            </Table.Row>
        </Table.Header>
            {rows.map(EmployeeRow)}
        <Table.Body>
        </Table.Body>
    </Table>
);

export default EmployeeTable;