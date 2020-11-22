import React, { useState, useEffect } from 'react';
import { LargeForm } from '../entities/largeForm';
import { Form, Input, Select } from 'semantic-ui-react';

const GENEROS = [
    { key: 'm', text: 'Masculino', value: 'Masculino' },
    { key: 'f', text: 'Feminino', value: 'Feminino' },
    { key: 'o', text: 'Outro', value: 'Outro' },
];

var GenerateInputProps = (id, form, setForm) => ({
    id,
    value: form && form[id],
    onClick: () => {
        if(form) {
            form[id] = null;
            setForm(form);
        }
    },
    control: Input
});

var EmployeeCreationForm = ({handleSubmit, onSend, onFailure, onSuccess, hide}) => {
    var [ genderOption, setGenderOption ] = useState(null);
    var [ sent, send ] = useState(false);
    var [ failureMessage, setFailureMessage ] = useState(null);
    var [ form, setForm ] = useState(null);

    useEffect(() => {
        if(sent && onSend) onSend();
    }, [onSend, sent]);

    useEffect(() => {
        if(failureMessage && onFailure) {
            send(false);
            onFailure(failureMessage);
            setFailureMessage(null);
        }
    }, [onFailure, failureMessage]);

    useEffect(() => {
        if(handleSubmit && form && sent && onSuccess) {
            send(false);
            handleSubmit(form).then(onSuccess).catch(({message}) => setFailureMessage(message));
        }
    }, [form, sent, handleSubmit, onSuccess]);
    
    return (
        <Form 
            key={`form-${hide ? 'hidden' : 'visible'}`}
            style={{overflow: 'hidden', height: '100%', display: hide ? 'none' : 'visible'}}
            
            onSubmit={(event) => {
                var formValues = [...event.target.elements].filter(el => el.localName === 'input')
                    .map(el => ({[el.id]: el.value}))
                    .reduce((a, b) => ({...a, ...b}), {});

                var genderSelected = event.target.firstElementChild.querySelector('#genderSelection .selected > span').innerHTML;

                var gender = genderSelected === 'Outro' ? formValues.customGender : genderSelected;
                    
                var formSubmit = new LargeForm({...formValues, gender});

                setForm(formSubmit);
                send(true);
            }}
        >
            <Form.Group>
                <Form.Field
                    required
                    width={3}
                    label='Nome'
                    placeholder='Nome'
                    {...GenerateInputProps('name', form, setForm)}
                />
                <Form.Field
                    required
                    width={3}
                    label='Sobrenome'
                    placeholder='Sobrenome'
                    {...GenerateInputProps('lastName', form, setForm)}
                />
                <Form.Field
                    required
                    width={2}
                    label='Idade'
                    placeholder='Idade'
                    {...GenerateInputProps('age', form, setForm)}
                />
                <Form.Field
                    id='genderSelection'
                    control={Select}
                    label='Gênero'
                    options={GENEROS}
                    onChange={(_, data) => setGenderOption(data.value)}
                    value={genderOption}
                    onClick={() => {
                        setGenderOption(null);
                    }}
                />
                {
                    genderOption === 'Outro' &&
                        <Form.Field
                            id='customGender'
                            control={Input}
                            width={4}
                            label='Outro'
                            placeholder='Indique o Gênero'
                            required
                            value={form && form.gender}
                            onClick={() => {
                                if(form) {
                                    form.gender = null;
                                    setForm(form);
                                }
                            }}
                        />
                }
            </Form.Group>
            <Form.Group widths='equal'>
                <Form.Field
                    label='Telefone'
                    placeholder='+55 12 ...'
                    {...GenerateInputProps('phone', form, setForm)}
                />
                <Form.Field 
                    required
                    label='E-Mail'
                    placeholder='...@email.com'
                    {...GenerateInputProps('email', form, setForm)}
                />
                <Form.Field
                    label='Usuário do Instagram'
                    placeholder='Usuário do Instagram'
                    {...GenerateInputProps('instagram', form, setForm)}
                />
                <Form.Field
                    label='Usuário do Github'
                    placeholder='Usuário do Github'
                    {...GenerateInputProps('github', form, setForm)}
                />
            </Form.Group>
            <Form.Group widths='equal'>
                <Form.Field
                    label='CPF'
                    placeholder='CPF Sem Pontos e Traços'
                    {...GenerateInputProps('taxId', form, setForm)}
                />
                <Form.Field
                    label='Número de Indentidade'
                    placeholder='Identidade Sem Pontos e Traços'
                    {...GenerateInputProps('identityNumber', form, setForm)}
                />
            </Form.Group>
            <Form.Group widths='equal'>
                <Form.Field
                    label='Profissão'
                    placeholder='Profissão'
                    {...GenerateInputProps('job', form, setForm)}
                />
                <Form.Field
                    label='Trabalha na Empresa'
                    placeholder='Nome da Empresa'
                    {...GenerateInputProps('company', form, setForm)}
                />
            </Form.Group>
            <Form.Group widths='equal'>
                <Form.Field
                    label='Logradouro'
                    placeholder='Logradouro'
                    {...GenerateInputProps('address', form, setForm)}
                />
                <Form.Field
                    label='Número'
                    placeholder='Número'
                    {...GenerateInputProps('number', form, setForm)}
                />
                <Form.Field
                    label='Complemento'
                    placeholder='Complemento'
                    {...GenerateInputProps('complement', form, setForm)}
                />
            </Form.Group>
            <Form.Group widths='equal'>
                <Form.Field
                    label='Bairro'
                    placeholder='Bairro'
                    {...GenerateInputProps('neighborhood', form, setForm)}
                />
                <Form.Field
                    label='Cidade'
                    placeholder='Cidade'
                    {...GenerateInputProps('city', form, setForm)}
                />
                <Form.Field
                    label='Estado'
                    placeholder='Sigla do Estado'
                    {...GenerateInputProps('state', form, setForm)}
                />
            </Form.Group>
            <Form.Button content='Submit' disabled={sent}>Salvar</Form.Button>      
        </Form>
    );
}

export default EmployeeCreationForm;