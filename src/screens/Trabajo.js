import React from 'react';
import { View, TouchableOpacity, StyleSheet, Text, FlatList, Image, ScrollView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import data from '../data/data';
import Boton from '../components/Boton';

const Trabajo = ({ navigation }) => {
    const informacion = data;

    const irPantalla2 = async () => {
        navigation.navigate('Pantalla2');
    };

    return (
        <ScrollView>
            <View style={styles.container}>
                <Text style={styles.title}>Comidas</Text>
                <View style={styles.flatListContainer}>
                    <FlatList
                        data={informacion}
                        renderItem={({ item }) => (
                            <View style={styles.cardContainer}>
                                <Image source={item.src} style={styles.image} />
                                <Text style={styles.title}>{item.title}</Text>
                            </View>
                        )}
                        keyExtractor={(item) => item.id}
                        contentContainerStyle={styles.flatListContainer}
                    />
                </View>
                <Boton
                    textoBoton='Ir a creditos'
                    accionBoton={irPantalla2}
                />
            </View>
        </ScrollView>
    );
};

export default Trabajo;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FFF',
        alignItems: 'center',
        paddingTop: 20,
        marginTop: StatusBar.currentHeight || 20,
    },
    flatListContainer: {
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap"
    },
    cardContainer: {
        backgroundColor: '#fff',
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 10,
        marginBottom: 10,
        marginHorizontal: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        alignItems: 'center'
    },
    image: {
        width: 100,
        height: 100,
        marginBottom: 10,
    },
    title: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    texto: {
        marginHorizontal: 15
    }
});
