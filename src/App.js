import React from 'react';
import { Admin, Resource } from 'react-admin';
// import jsonServerProvider from 'ra-data-json-server';
// import { PostList, PostEdit, PostCreate } from './posts';
import { GreetingCreate, GreetingList } from './greeting';
// import { UserList } from './users';
// import PostIcon from '@material-ui/icons/Book';
// import UserIcon from '@material-ui/icons/Group';
import Dashboard from './dashboard';
// import authProvider from './authProvider';
import greetingDP from './greetingDataProvider';

// const dataProvider = jsonServerProvider('http://jsonplaceholder.typicode.com');

// const App = () => (
//   <Admin dashboard={Dashboard} authProvider={authProvider} dataProvider={dataProvider} >
//     <Resource name="posts" list={PostList} edit={PostEdit} create={PostCreate} icon={PostIcon} />
//     <Resource name="users" list={UserList} icon={UserIcon} />
//   </Admin>
// );

const App = () => (
  <Admin dashboard={Dashboard} dataProvider={greetingDP} >
    <Resource name="greeting" list={GreetingList} create={GreetingCreate} />
  </Admin>
);

export default App;
