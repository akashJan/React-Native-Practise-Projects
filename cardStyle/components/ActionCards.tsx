import { StyleSheet, Text, View, Linking, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const ActionCards = () => {
    function openWebsite(websiteLink: string) {
        Linking.openURL(websiteLink);
    }
    return (
        <View >
            <Text style={styles.headingText}>Blog Card</Text>
            <View style={[styles.card, styles.elevetedCard]}>
                <View style={styles.headingContainer}>
                    <Text style={styles.headerText}> What's new in ReactJs</Text>
                </View>
                <Image source={{
                    uri: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
                }} style={styles.cardImage} />
                <View style={styles.bodyContainer}>
                    <Text numberOfLines={4}>In React 18, application concurrency is given more consideration.
                        This concept comprises APIs such as createRoot, hydrateRoot, renderToPipeableStream, and renderToReadableStream, as well as functions like Automatic Batching, Transition, and Suspense. </Text>
                </View>
                <View style={styles.fotterContainer}>
                    <TouchableOpacity
                        onPress={() => openWebsite('https://www.simplilearn.com/tutorials/reactjs-tutorial/react-eighteen-new-features')}
                    >
                        <Text style={styles.socialLinks}>Read More</Text>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => openWebsite('https://www.linkedin.com/feed/')}
                    >
                        <Text style={styles.socialLinks}>Follow me</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
};

export default ActionCards;

const styles = StyleSheet.create({
    headingText: {
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 8,
        color: '#28282B',
    },
    card: {
        borderRadius: 6,
        margin: 15,
        padding: 5,
    },
    elevetedCard: {
        backgroundColor: '#EC8F5E',
        elevation: 3,
        shadowOffset: {
            width: 1,
            height: 1,
        },
        shadowColor: '#333',
        shadowOpacity: 0.4,
    },
    headingContainer: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerText: { color: '#000', fontSize: 20, fontWeight: '600', marginVertical: 12 },
    cardImage: { height: 200 },
    bodyContainer: { padding: 10 },
    fotterContainer: { padding: 10, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-evenly' },
    socialLinks: { fontSize: 16, color: '#000', backgroundColor: '#fff', paddingHorizontal: 15, paddingVertical: 5, borderRadius: 6 },
});
