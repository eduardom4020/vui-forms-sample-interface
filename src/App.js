import 'semantic-ui-css/semantic.min.css';
import { EmployeeTable } from './components';
import { Container, Header, Icon } from 'semantic-ui-react';
import BackgroundImage from './assets/bg.jpg';

var App = () => {
  var rows = [
    {
      age: 26, gender: 'Masculino', job: 'Desenvolvedor Full Stack', 
      company: 'Empresa', taxId: '123.456.789-10', identityNumber: '1234567891234', 
      phoneNumber: '+55 85 9 88578747', email: 'eduardom4020@gmail.com', 
      githubUsername: 'eduardom4020', instagramUsername: 'eduardo_melo_b',
      address: 'Rua Bento Albuquerque', number: '2158', neighboorhod: 'Cocó',
      city: 'Fortaleza', state: 'CE', complement: 'Apartamento 503 Bloco 1',
      name: 'Eduardo', lastName: 'Melo'
    }
  ];

  return (
    <Container 
      textAlign='center'
      style={{
        width: '100%', height: window.innerHeight, 
        background: `url(${BackgroundImage})`, 
        padding: '0 0 2rem 0'
      }}
    >
      <Container textAlign='center' style={{width: '80%'}}>
        <br/>
        <Header as='h2' icon textAlign='center' inverted>
          <Icon name='address card outline' circular inverted/>
          <Header.Content>Cadastro de Funcionários</Header.Content>
        </Header>
        <br/>
        <div style={{boxShadow: '0 .4rem .5rem .8rem #00000050'}}>
          <EmployeeTable rows={rows} />
        </div>
      </Container>
    </Container>
  );
}

export default App;
