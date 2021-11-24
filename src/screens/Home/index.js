import React from "react";
import {View, Pressable, Text} from "react-native";

const Home = ({navigation}) => {
    return (
        <View>
            <Pressable
                style={{backgroundColor: 'lightblue', width: 100, height: 30, margin: 30, padding: 30,}}
                onPress={() => navigation.navigate('Posts')}>
                <Text> Ir para os Posts</Text>
            </Pressable>

            <Pressable
                style={{backgroundColor: 'lightblue', width: 100, height: 30, margin: 30, padding: 30,}}
                onPress={() => navigation.navigate('Profile')}>
                <Text> Ir para o Perfil</Text>
            </Pressable>
        </View>
    );
};

export default Home;