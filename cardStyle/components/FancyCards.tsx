import { Image, StyleSheet, Text, View } from 'react-native';
import React from 'react';

export default function FancyCards() {
    return (
        <View>
            <Text style={styles.headingText}>FancyCards</Text>
            <View style={[styles.card, styles.cardElevated]}>
                <Image source={{ uri: 'https://media.istockphoto.com/id/1441926420/photo/hot-air-balloons-at-love-valley-in-cappadocia.jpg?s=2048x2048&w=is&k=20&c=tq8pFvFDVJS-SrQSPlH2aOaKj8soIhPIK5TsVDes3HY=' }} style={styles.cardImage} />
                <View style={styles.cardBody}>
                    <Text style={styles.title}>Hawa Mahal</Text>
                    <Text style={styles.label}>Pink City</Text>
                    <Text style={styles.description}>The Hawa Mahal is a palace in the city Jaipur, India .
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Corrupti ducimus dolore voluptatem veritatis culpa sequi blanditiis quo beatae vero libero. Impedit doloremque vel itaque quasi nisi pariatur tenetur voluptate obcaecati! </Text>
                    <Text style={styles.fotter}>12 minuets away</Text>
                </View>

            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        color: '#28282B',
        marginBottom: 2,
    },
    card: {
        borderRadius: 6,
        margin: 15,
    },
    cardElevated: {
        backgroundColor: '#EEF5FF',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1,
        }
    },
    cardImage: {
        height: 200,
        marginBottom: 8,
    },
    cardBody: {
        flex: 1,
        flexGrow: 1,
        paddingHorizontal: 12,
    },
    title: {
        color: 'black',
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 6,

    },
    label: { color: '#28282B', fontSize: 15, marginBottom: 6 },
    description: { color: '#28282B', fontSize: 15, marginBottom: 6 },
    fotter: { color: '#28282B', fontSize: 15, marginBottom: 6 },

});
