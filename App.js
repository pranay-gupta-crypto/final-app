import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';

import Hosmap from './screens/Hosmap'; 
import Hospitals from './screens/Hospitals';

const Tab = createBottomTabNavigator();  

export default function App(){
  return(
  <NavigationContainer>
    <Tab.Navigator 
        screenOptions ={({route})=> ({
          tabBarIcon:({focused,color,size})=>{
            let iconName
            if(route.name==='Hosmap'){
              iconName=focused
              ?'book'
              :'book-outline'
            }
            else if(route.name==='Hospitals'){
            iconName=focused
            ?'create'
            :'create-outline'
            }
              return 
              <Ionicons name ={iconName} size={size} color={color}/>
          }
        })}
            tabBarOptions={{
              activeTintColor:'tomato',
              inactiveTintColor:'gray'
            }}
            >
              <Tab.Screen name='Hosmap'
              component={Hosmap}
              options={{headerShown:false}}/>

              <Tab.Screen name='Hospitals'
              component={Hospitals}
              options={{headerShown:false}}/>
             </Tab.Navigator>

          </NavigationContainer>
  )
  }
