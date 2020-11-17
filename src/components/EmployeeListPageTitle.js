import { Header, Icon } from 'semantic-ui-react';
import { EMPLOYEE_REGISTER } from '../constants';

var EmployeeListPageTitle = () => (
    <Header as='h2' icon textAlign='center' inverted>
        <Icon name='address card outline' circular inverted/>
        <Header.Content>{EMPLOYEE_REGISTER}</Header.Content>
    </Header>
);

export default EmployeeListPageTitle;