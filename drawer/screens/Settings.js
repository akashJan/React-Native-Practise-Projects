import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const SettingsScreen = ({ navigation }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>SettingsScreen</Text>
            <Button title="Toggle drawer" onPress={() => navigation.toggleDrawer()} />
            <Button title="Settings" onPress={() => navigation.jumpTo('Settings')} />
        </View>
    );
};

export default SettingsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 16,
    },
});
