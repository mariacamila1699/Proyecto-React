// In App.js in a new project

import * as React from 'react';
import { ImageBackground, View, Text, TouchableOpacity, Image, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createDrawerNavigator, DrawerItemList } from '@react-navigation/drawer';
import Usuarios from '../MyScreens/Usuarios';
import s from './style'


function HomeScreen(props) {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>

            <Image style={s.imageBaground} source={require('./imagen3.png')}/>
            <Text style={{ fontSize: 35 }}>Bienvenidos</Text>
            

            <TouchableOpacity style={{ marginTop: 20, width: 200, height: 50, backgroundColor: '#1f3aff', padding: 10, alignItems: 'center', borderRadius: 5 }}
                onPress={() => props.navigation.navigate('Perfil')}>
                <Text style={{ color: '#fff', fontSize: 20 }}>Ir a perfil</Text>
            </TouchableOpacity>

        </View>
    );
}

function PerfilScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}>Roles Screen </Text>
        </View>
    );
}

function UsuariosScreen() {
    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={{ fontSize: 20 }}>Usuarios Screen </Text>
        </View>
    );
}



function Menu(props){
    return(
        <View style={s.container}>
            <View style={s.bgContainer}>
                <TouchableOpacity>
                    <View style={s.userContainer}>
                        <Image style={s.userImagen} source={require('./logo1.png')}/>
                        <View style={s.camaraContainer}>
                            <Image style={s.camaraIcon} source={require('./photo-camera.png')}/>

                          

                        </View>

                    </View>
                    <View style={s.userNombre}>
                        <Text style={s.userTitulo}>Equipo educativo</Text>
                        <Text style={s.userSubTitulo}>Home</Text>

                    </View>
                </TouchableOpacity>

            </View>
            <DrawerItemList {...props}/>
        </View>
    )
}



//const Stack = createStackNavigator();

const Drawer = createDrawerNavigator();

function MyDrawer() {
    return (
        <NavigationContainer>
            <Drawer.Navigator drawerContent={(props)=> <Menu {...props}/>}>
                <Drawer.Screen name="Home" component={HomeScreen} />
                <Drawer.Screen name="Roles" component={PerfilScreen} />
                <Drawer.Screen name="Usuarios" component={UsuariosScreen} />
                
            </Drawer.Navigator>
        </NavigationContainer>

    );
}

export default MyDrawer

