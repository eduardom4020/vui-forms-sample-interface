import React from 'react';
import { Icon, Table, Header, Divider, Grid } from 'semantic-ui-react';

var TableExampleStructured = () => (
    <Table celled structured striped size='small'>
        <Table.Header>
        <Table.Row>
            <Table.HeaderCell rowSpan='2' width='two'>Profissional</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2' width='one'>Identificação</Table.HeaderCell>
            <Table.HeaderCell colSpan='3' width='one'>Contato</Table.HeaderCell>
            <Table.HeaderCell rowSpan='2' width='two'>Endereço</Table.HeaderCell>
        </Table.Row>
        <Table.Row>
            <Table.HeaderCell>Principal</Table.HeaderCell>
            <Table.HeaderCell>Github</Table.HeaderCell>
            <Table.HeaderCell>Instagram</Table.HeaderCell>
        </Table.Row>
        </Table.Header>

        <Table.Body>
        <Table.Row>
            <Table.Cell>
                <Header as='h2'>
                    <Header.Content>
                        Eduardo Melo
                        <Header.Subheader style={{fontSize: '.95rem'}}>26 Anos | Masculino</Header.Subheader>
                        <Header.Subheader>Desenvolvedor Full Stack na empresa Nome da Empresa</Header.Subheader>
                    </Header.Content>
                </Header>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                <Grid columns={1} verticalAlign='middle'>
                    <Grid.Row>
                        <Grid.Column>
                            <Header as='h4'>
                                <Header.Content>
                                    042.583.993-10
                                    <Header.Subheader>CPF</Header.Subheader>
                                </Header.Content>
                            </Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Header as='h4'>
                                <Header.Content>
                                    2007009118100
                                    <Header.Subheader>RG</Header.Subheader>
                                </Header.Content>
                            </Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                <a href='mailto:eduardom4020@gmail.com'>eduardom4020@gmail.com</a>
                <Divider horizontal style={{fontSize: '.8rem'}}>
                    <Icon fitted name='long arrow alternate up' />E-Mail e
                    Telefone<Icon fitted name='long arrow alternate down' />
                </Divider>
                +55 85 9 88578747
            </Table.Cell>
            <Table.Cell textAlign='center'>
                <a href='https://github.com/eduardom4020'>eduardom4020</a>
            </Table.Cell>
            <Table.Cell>
                <a href='https://www.instagram.com/eduardo_melo_b/'>eduardo_melo_b</a>
            </Table.Cell>
            <Table.Cell>
                <Header as='h4'>
                    <Header.Content>
                        Rua Bento Albuquerque 2158
                        <Header.Subheader>Cocó | Fortaleza - CE</Header.Subheader>
                    </Header.Content>
                </Header>
                Apartamento 503 Bloco 1
            </Table.Cell>
        </Table.Row>
        <Table.Row>
            <Table.Cell>
                <Header as='h2'>
                    <Header.Content>
                        Eduardo Melo
                        <Header.Subheader style={{fontSize: '.95rem'}}>26 Anos | Masculino</Header.Subheader>
                        <Header.Subheader>Desenvolvedor Full Stack na empresa Nome da Empresa</Header.Subheader>
                    </Header.Content>
                </Header>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                <Grid columns={1} verticalAlign='middle'>
                    <Grid.Row>
                        <Grid.Column>
                            <Header as='h4'>
                                <Header.Content>
                                    042.583.993-10
                                    <Header.Subheader>CPF</Header.Subheader>
                                </Header.Content>
                            </Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Header as='h4'>
                                <Header.Content>
                                    2007009118100
                                    <Header.Subheader>RG</Header.Subheader>
                                </Header.Content>
                            </Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                <a href='mailto:eduardom4020@gmail.com'>eduardom4020@gmail.com</a>
                <Divider horizontal style={{fontSize: '.8rem'}}>
                    <Icon fitted name='long arrow alternate up' />E-Mail e
                    Telefone<Icon fitted name='long arrow alternate down' />
                </Divider>
                +55 85 9 88578747
            </Table.Cell>
            <Table.Cell textAlign='center'>
                <a href='https://github.com/eduardom4020'>eduardom4020</a>
            </Table.Cell>
            <Table.Cell>
                <a href='https://www.instagram.com/eduardo_melo_b/'>eduardo_melo_b</a>
            </Table.Cell>
            <Table.Cell>
                <Header as='h4'>
                    <Header.Content>
                        Rua Bento Albuquerque 2158
                        <Header.Subheader>Cocó | Fortaleza - CE</Header.Subheader>
                    </Header.Content>
                </Header>
                Apartamento 503 Bloco 1
            </Table.Cell>
        </Table.Row>
        </Table.Body>
    </Table>
);

export default TableExampleStructured;