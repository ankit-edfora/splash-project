import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home  from './Screen/SwitchScreen';
import Login from './Screen/Login';
import Dashboard from './Screen/Dashboard';
//import {createData} from "./realm/RealmData";


// const TaskSchema = {
//   name: "task",
//   properties: {
//     _id: "int",
//     name: "string",
//     status: "string?",
//   },
//   primaryKey: "_id",
// };

// (async () => { 
//   //console.log(1);
//   const realm = await Realm.open({
//   path: "myrealm",
//   schema: [TaskSchema],
// });


// realm.write(() => {
// const task1 = realm.create("task",  {
//   _id: 1,
//   name: "go grocery shopping",
//   status: "Open",
// });
// const task2 = realm.create('task', {
//   _id: 2,
//   name: "go exercise",
//   status: "Open",
// });
// console.log(`created two tasks: ${task1} & ${task2}`);
// });

// })();


const Stack = createNativeStackNavigator();

function App() {

  return (
   
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home'>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
      </Stack.Navigator>
    </NavigationContainer>
   
  );
  } 


export default App;