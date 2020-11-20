import React from 'react';
import { Table } from 'semantic-ui-react';
import { EmployeeRow } from './EmployeeRow';
import { SmallHeaderCell } from '../styles/components';

var EmployeeTable = ({rows=[]}) => (
    <Table celled structured striped size='small'>
        <Table.Header>
            <Table.Row>
                <SmallHeaderCell rowSpan='2' width='three'>Profissional</SmallHeaderCell>
                <SmallHeaderCell rowSpan='2' width='one'>Identificação</SmallHeaderCell>
                <SmallHeaderCell colSpan='3' width='one'>Contato</SmallHeaderCell>
                <SmallHeaderCell rowSpan='2' width='two'>Endereço</SmallHeaderCell>
            </Table.Row>
            <Table.Row>
                <SmallHeaderCell width='one'>Telefone</SmallHeaderCell>
                <SmallHeaderCell width='two'>Email</SmallHeaderCell>
                <SmallHeaderCell width='one'>Outros</SmallHeaderCell>
            </Table.Row>
        </Table.Header>
            {rows.map(largeForm => <EmployeeRow largeForm={largeForm}/>)}
        <Table.Body>
        </Table.Body>
    </Table>
);

export default EmployeeTable;