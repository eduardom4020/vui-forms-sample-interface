import 'semantic-ui-css/semantic.min.css';
import './styles/App.css';
import { useEffect, useState } from 'react';
import { EmployeeTable, EmployeeListPageTitle } from './components';
import { MainContainer, TableShadowedContainer } from './styles/components';
import { VUIFormsAPI } from './integrations/vuiFormsAPI';

var vuiForms = new VUIFormsAPI();

var App = () => {
  // var rows = [
  //   {
  //     age: 26, gender: 'Masculino', job: 'Desenvolvedor Full Stack', 
  //     company: 'Empresa', taxId: '123.456.789-10', identityNumber: '1234567891234', 
  //     phoneNumber: '+55 85 9 88578747', email: 'eduardom4020@gmail.com', 
  //     githubUsername: 'eduardom4020', instagramUsername: 'eduardo_melo_b',
  //     address: 'Rua Bento Albuquerque', number: '2158', neighboorhod: 'Cocó',
  //     city: 'Fortaleza', state: 'CE', complement: 'Apartamento 503 Bloco 1',
  //     name: 'Eduardo', lastName: 'Melo'
  //   }
  // ];
  
  var [ rows, setRows ] = useState([]);

  useEffect(() => {
    vuiForms.list()
      .then(result => {
        console.log(result)
        if(!result.error) setRows(result);
      });    
  }, []);
  
  return (
    <MainContainer textAlign='center'>
      <br/>
      <EmployeeListPageTitle />
      <br/>
      <TableShadowedContainer>
        <EmployeeTable rows={rows} />
      </TableShadowedContainer>
    </MainContainer>
  );
}

export default App;
