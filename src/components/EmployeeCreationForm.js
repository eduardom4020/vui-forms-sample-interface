import React, { useState } from 'react';
import { LargeForm } from '../entities/largeForm';
import { Form, Input, Select } from 'semantic-ui-react';

const GENEROS = [
    { key: 'm', text: 'Masculino', value: 'Masculino' },
    { key: 'f', text: 'Feminino', value: 'Feminino' },
    { key: 'o', text: 'Outro', value: 'Outro' },
];

var EmployeeCreationForm = () => {
    var [ genderOther, setGenderOther ] = useState(null);

    return (
        <Form onSubmit={(event) => {
            var formValues = [...event.target.elements].filter(el => el.localName === 'input')
                .map(el => ({[el.id]: el.value}))
                .reduce((a, b) => ({...a, ...b}), {});

            var genderSelected = event.target.firstElementChild.querySelector('#genderSelection .selected > span').innerHTML;

            var gender = genderSelected === 'Outro' ? formValues.customGender : genderSelected;
                
            var formSubmit = new LargeForm({...formValues, gender});

            console.log(formSubmit);
        }}>
            <Form.Group>
                <Form.Field
                    id='name'
                    required
                    width={3}
                    control={Input}
                    label='Nome'
                    placeholder='Nome'
                />
                <Form.Field 
                    id='lastName'
                    required
                    width={3}
                    control={Input}
                    label='Sobrenome'
                    placeholder='Sobrenome'
                />
                <Form.Field
                    id='age' 
                    required
                    width={2}
                    control={Input}
                    label='Idade'
                    placeholder='Idade'
                />
                <Form.Field
                    id='genderSelection'
                    control={Select}
                    label='Gênero'
                    options={GENEROS}
                    onChange={(_, data) => data.value === 'Outro' ? setGenderOther('') : setGenderOther(null)}
                />
                <Form.Field
                    id='customGender'
                    width={4}
                    control={Input}
                    label={genderOther != null ? 'Outro' : null}
                    placeholder='Indique o Gênero'
                    style={{display: genderOther != null ? '' : 'none'}}
                    required={genderOther != null}
                />
            </Form.Group>
            <Form.Group widths='equal'>
                <Form.Field
                    id='phone'
                    control={Input}
                    label='Telefone'
                    placeholder='+55 12 ...'
                />
                <Form.Field required
                    id='email'
                    control={Input}
                    label='E-Mail'
                    placeholder='...@email.com'
                />
                <Form.Field
                    id='instagram'
                    control={Input}
                    label='Usuário do Instagram'
                    placeholder='Usuário do Instagram'
                />
                <Form.Field
                    id='github'
                    control={Input}
                    label='Usuário do Github'
                    placeholder='Usuário do Github'
                />
            </Form.Group>
            <Form.Group widths='equal'>
                <Form.Field
                    id='taxId'
                    control={Input}
                    label='CPF'
                    placeholder='CPF Sem Pontos e Traços'
                />
                <Form.Field
                    id='identityNumber'
                    control={Input}
                    label='Número de Indentidade'
                    placeholder='Identidade Sem Pontos e Traços'
                />
            </Form.Group>
            <Form.Group widths='equal'>
                <Form.Field
                    id='job'
                    control={Input}
                    label='Profissão'
                    placeholder='Profissão'
                />
                <Form.Field
                    id='company'
                    control={Input}
                    label='Trabalha na Empresa'
                    placeholder='Nome da Empresa'
                />
            </Form.Group>
            <Form.Group widths='equal'>
                <Form.Field
                    id='address'
                    control={Input}
                    label='Logradouro'
                    placeholder='Logradouro'
                />
                <Form.Field
                    id='number'
                    control={Input}
                    label='Número'
                    placeholder='Número'
                />
                <Form.Field
                    id='complement'
                    control={Input}
                    label='Complemento'
                    placeholder='Complemento'
                />
            </Form.Group>
            <Form.Group widths='equal'>
                <Form.Field
                    id='neighborhood'
                    control={Input}
                    label='Bairro'
                    placeholder='Bairro'
                />
                <Form.Field
                    id='city'
                    control={Input}
                    label='Cidade'
                    placeholder='Cidade'
                />
                <Form.Field
                    id='state'
                    control={Input}
                    label='Estado'
                    placeholder='Sigla do Estado'
                />
            </Form.Group>
            <Form.Button content='Submit'>Salvar</Form.Button>      
        </Form>
    );
}

export default EmployeeCreationForm;