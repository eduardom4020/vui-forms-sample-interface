import 'semantic-ui-css/semantic.min.css';
import './styles/App.css';
import { useEffect, useState } from 'react';
import { EmployeeTable, EmployeeListPageTitle, FAB, EmployeeFormDialog } from './components';
import { MainContainer, TableShadowedContainer } from './styles/components';
import { VUIFormsAPI } from './integrations/vuiFormsAPI';
import { API_TIMEOUT } from './constants'; 

var vuiForms = new VUIFormsAPI();

var App = () => {  
  var [ rows, setRows ] = useState([]);

  useEffect(() => {
    vuiForms.list()
      .then(result => {
        if(!result.error) setRows(result);
      });
  }, []);

  var [ creationDialogOpened, openCreationDialog ] = useState(false);
  
  return (
    <MainContainer textAlign='center'>
      <br/>
      <EmployeeListPageTitle />
      <br/>
      <TableShadowedContainer>
        <EmployeeTable rows={rows} />
      </TableShadowedContainer>
      <FAB
        color='google plus'
        icon='plus'
        onClick={() => openCreationDialog(true)}
      />
      {
        creationDialogOpened &&
          <EmployeeFormDialog
            handleClose={() => openCreationDialog(false)}
            submitTotalTime={API_TIMEOUT}
            // handleSubmit={formData => vuiForms.create(formData)}
            handleSubmit={formData => new Promise((_, rej) => setTimeout(() => rej('Tempo esgotado'), 1000))}
          />
      }
    </MainContainer>
  );
}

export default App;
