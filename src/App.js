import 'semantic-ui-css/semantic.min.css';
import './styles/App.css';
import { useEffect, useState } from 'react';
import { EmployeeTable, EmployeeListPageTitle, FAB, EmployeeFormDialog } from './components';
import { MainContainer, TableShadowedContainer } from './styles/components';
import { VUIFormsAPI } from './integrations/vuiFormsAPI';
import { API_TIMEOUT } from './constants';
import { getMessagesFactory } from './functions/messagingFunctions';

var vuiForms = new VUIFormsAPI();

var App = () => {
  var [ rows, setRows ] = useState([]);
  var [ visibleRows, setVisibleRows ] = useState(rows);
  var [ creationDialogOpened, openCreationDialog ] = useState(false);

  useEffect(() => {
    var messagesOverlayDOM = document.getElementById('messages-overlay');
    getMessagesFactory(messagesOverlayDOM);

    vuiForms.list()
      .then(setVisibleRows);
  }, []);

  useEffect(() => {
    vuiForms.startRealTimeMode()
      .useRealTimeList(setRows);

    return () => vuiForms.cancelRealTimeMode();
  }, []);

  useEffect(() => {
    if(!creationDialogOpened) {
      setVisibleRows(rows);
    }
  }, [rows, creationDialogOpened]);
  
  return (
    <MainContainer textAlign='center'>
      <br/>
      <EmployeeListPageTitle />
      <br/>
      <TableShadowedContainer>
        <EmployeeTable 
          rows={visibleRows} 
          // handleDelete={formData => vuiForms.delete(formData)}
          handleDelete={formData => new Promise((res, rej) => setTimeout(() => rej('Errror'), 1000))}
          deleteTotalTime={API_TIMEOUT}
        />
      </TableShadowedContainer>
      <FAB
        color='green'
        icon='plus'
        onClick={() => openCreationDialog(true)}
      />
      {
        creationDialogOpened &&
          <EmployeeFormDialog
            handleClose={() => openCreationDialog(false)}
            submitTotalTime={API_TIMEOUT}
            handleSubmit={formData => vuiForms.create(formData)}
          />
      }
    </MainContainer>
  );
}

export default App;
