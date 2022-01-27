import React from 'react'

import HomeScreem from "./screems/HomeScreem";
import ClienteForm from "./screems/ClienteForm";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text ,TouchableOpacity} from 'react-native';
import  ExportPdf  from "./pdf/exportpdf";

const Stack = createNativeStackNavigator();



const App =()=>{
  return (
    <NavigationContainer>
      <Stack.Navigator>
      
        <Stack.Screen 
          name="Home"
          component={HomeScreem}
          options={({navigation})=>({
            headerStyle:{ backgroundColor: '#D6DBDF'},
            title: "Clientes",
            headerRight:()=>(
              <TouchableOpacity onPress={()=> navigation.navigate('form')}>
                <Text style={{marginRight:15 ,borderWidth:1, padding:5, backgroundColor: '#F7DCa1', color: 'black'}}>Registrar Nuevo Cliente</Text>
              </TouchableOpacity>
            ),
           
          })}
        />
        <Stack.Screen 
          name="form"
          component={ClienteForm}
          options={({navigation})=>({
            
            headerStyle:{ backgroundColor: '#D6DBDF'},
            title: "Registro de Clientes", 
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
} 
 
export default App