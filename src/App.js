import 'semantic-ui-css/semantic.min.css';
import './styles/App.css';
import { useEffect, useState } from 'react';
import { EmployeeTable, EmployeeListPageTitle, FAB, EmployeeFormDialog } from './components';
import { MainContainer, TableShadowedContainer } from './styles/components';
import { VUIFormsAPI } from './integrations/vuiFormsAPI';
import { API_TIMEOUT } from './constants';
import { getMessagesFactory } from './functions/messagingFunctions';
import { Action } from './enums/actionEnum';

var vuiForms = new VUIFormsAPI();

var App = () => {
  var [ rows, setRows ] = useState([]);
  var [ visibleRows, setVisibleRows ] = useState(rows);
  var [ dialogType, openDialogFor ] = useState(null);

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
    if(!dialogType) {
      setVisibleRows(rows);
    }
  }, [rows, dialogType]);
  
  return (
    <MainContainer textAlign='center'>
      <br/>
      <EmployeeListPageTitle />
      <br/>
      <TableShadowedContainer>
        <EmployeeTable 
          rows={visibleRows} 
          handleDelete={formData => vuiForms.delete(formData)}
          handleEdit={() => openDialogFor(Action.Edit)}
          // handleDelete={formData => new Promise((res, rej) => setTimeout(() => rej({message: 'Unable to delete due simulated error.'}), 1000))}
          deleteTotalTime={API_TIMEOUT}
        />
      </TableShadowedContainer>
      <FAB
        color='green'
        icon='plus'
        onClick={() => openDialogFor(Action.Create)}
      />
      {
        dialogType &&
          <EmployeeFormDialog
            handleClose={() => openDialogFor(null)}
            submitTotalTime={API_TIMEOUT}
            handleSubmit={formData => dialogType === Action.Create ? 
                vuiForms.create(formData) 
              :
                vuiForms.edit(formData)
            }
            action={dialogType}
          />
      }
    </MainContainer>
  );
}

export default App;
