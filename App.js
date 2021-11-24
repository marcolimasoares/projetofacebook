import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import Posts from './src/screens/Posts';

const App = () => {
    return (
    <NavigationContainer>
        <Posts />
    </NavigationContainer>);
    
};

export default App;
