import { ScrollView, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function ElevatedCards() {
    return (
        <View>
            <Text style={styles.headingText}>Elevated Cards</Text>
            <ScrollView horizontal={true} style={styles.container}>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>One</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Two</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Three</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Four</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Five</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Six</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Seven</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Eight</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Nine</Text>
                </View>
                <View style={[styles.card, styles.cardElevated]}>
                    <Text>Ten</Text>
                </View>
            </ScrollView >
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
        padding: 8,
    },
    card: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 100,
        height: 100,
        fontWeight: 'bold',
        borderRadius: 6,
        margin: 5,
        color: 'blue',
    },
    cardElevated: {
        backgroundColor: '#CAD5E2',
        elevation: 4,
        shadowOffset: {
            width: 2,
            height: 2,
        },
        shadowColor: '#B4D4FF',
        shadowOpacity: 0.4,
        shadowRadius: 2,
    },
});
