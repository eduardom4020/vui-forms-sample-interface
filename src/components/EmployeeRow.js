import React from 'react';
import { Icon, Table, Header, Grid } from 'semantic-ui-react';
import { GITHUB_FAVICON, INSTAGRAM_FAVICON } from '../constants';
import { CreateGithubLink, CreateInstagramLink, CreateMailToLink, CreateMapsLink } from '../functions/linkFunctions';
import { PhoneTextToComponent } from '../functions/phoneFunctions';
import { TinySubheader } from '../styles/components';

export var EmployeeRow = props => {
    var { largeForm } = props; 

    return (
        <Table.Row>
            <Table.Cell>
                <Header as='h4'>
                    <Header.Content>
                        {largeForm.name} {largeForm.lastName}
                        <TinySubheader>{largeForm.age} Anos | {largeForm.gender}</TinySubheader>
                        <Header.Subheader>{largeForm.job} na empresa {largeForm.company}</Header.Subheader>
                    </Header.Content>
                </Header>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                <Grid columns={1} verticalAlign='middle' centered>
                    <Grid.Row style={{padding: '.2rem'}}>
                        <Grid.Column>
                            <Header as='h5'>
                                <Header.Content>
                                    {largeForm.taxId}
                                    <TinySubheader>CPF</TinySubheader>
                                </Header.Content>
                            </Header>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{padding: '.2rem'}}>
                        <Grid.Column>
                            <Header as='h5'>
                                <Header.Content>
                                    {largeForm.identityNumber}
                                    <TinySubheader>RG</TinySubheader>
                                </Header.Content>
                            </Header>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Table.Cell>
            <Table.Cell textAlign='center'>
                {PhoneTextToComponent(largeForm.phone)}
            </Table.Cell>
            <Table.Cell textAlign='center'>
                <a href={CreateMailToLink(largeForm.email)}>{largeForm.email}</a>
            </Table.Cell>
            <Table.Cell>
                <Grid columns={1} verticalAlign='middle' centered>
                    <Grid.Row style={{padding: '.2rem'}}>
                        <Grid.Column>
                            <div style={{display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}}>
                                <img src={GITHUB_FAVICON} style={{width: 24, margin: 2}}/>
                                <a href={CreateGithubLink(largeForm.github)}>{largeForm.github}</a>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row style={{padding: '.2rem'}}>
                        <Grid.Column>
                            <div style={{display: 'inline-flex', justifyContent: 'center', alignItems: 'center'}}>
                                <img src={INSTAGRAM_FAVICON} style={{width: 24, margin: 2}}/>
                                <a href={CreateInstagramLink(largeForm.instagram)}>{largeForm.instagram}</a>
                            </div>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Table.Cell>
            <Table.Cell>
                <Header as='h5' style={{position: 'relative'}}>
                    <Header.Content>
                        {largeForm.address} {largeForm.number}
                        <Header.Subheader>{largeForm.neighborhood} | {largeForm.city} - {largeForm.state}</Header.Subheader>
                        <TinySubheader>{largeForm.complement}</TinySubheader>
                    </Header.Content>
                    <a 
                        href={CreateMapsLink(largeForm.address, largeForm.number, largeForm.neighborhood, largeForm.city, largeForm.state)} 
                        target='_blank' style={{color: '#0f0f0f'}}
                    >
                        <Icon 
                            name='external alternate' 
                            style={{position: 'absolute', right: '-1rem', bottom: '.2rem', fontSize: '1rem'}}
                        />
                    </a>
                </Header>
            </Table.Cell>
        </Table.Row>
    );
};