import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FlatCards() {
    return (
        <View>
            <Text style={styles.headingText}>Flat Cards</Text>
            <ScrollView horizontal style={styles.container}>
                <View style={[styles.card, styles.cardOne]}>
                    <Text> Red </Text>
                </View>
                <View style={[styles.card, styles.cardTwo]}>
                    <Text> Blue </Text>
                </View>
                <View style={[styles.card, styles.cardThree]}>
                    <Text> Green </Text>
                </View>
                <View style={[styles.card, styles.cardOne]}>
                    <Text> Red </Text>
                </View>
                <View style={[styles.card, styles.cardTwo]}>
                    <Text> Blue </Text>
                </View>
                <View style={[styles.card, styles.cardThree]}>
                    <Text> Green </Text>
                </View>
            </ScrollView>
        </View >
    );
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        color: '#28282B',
    },
    container: {
        flex: 1,
        flexDirection: 'row',
        padding: 8,
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        borderRadius: 4,
        margin: 8,
    },
    cardOne: {
        backgroundColor: '#FF0000',
    },
    cardTwo: {
        backgroundColor: '#0000FF',
    },
    cardThree: {
        backgroundColor: '#008000',
    },
});
