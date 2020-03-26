import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { NavigationContainer } from '@react-navigation/native'
import Cases from './pages/cases'
import Detail from './pages/detail'



const AppStack = createStackNavigator()

export default function Routes(){
    return(
        <NavigationContainer>
            
            <AppStack.Navigator screenOptions={{ headerShown: false }}>
                <AppStack.Screen name='Home'component={Cases} />
                <AppStack.Screen name='Detail' component={Detail} />
            </AppStack.Navigator>

        </NavigationContainer>
    )
}