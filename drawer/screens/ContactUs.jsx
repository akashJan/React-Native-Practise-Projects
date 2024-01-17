import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button, Alert } from 'react-native';

const ContactUsScreen = ({ navigation }) => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async () => {
        // Add your logic to handle the form submission, for example, sending an email or making an API call
        try {
            // Replace the URL with the actual endpoint where you want to send the form data
            const apiUrl = 'https://example.com/api/contact';

            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            if (response.ok) {
                Alert.alert('Form Submitted', 'Thank you for contacting us!');
                // Reset form fields
                setName('');
                setEmail('');
                setMessage('');
            } else {
                throw new Error('Failed to submit the form');
            }
        } catch (error) {
            console.error('Error submitting the form:', error.message);
            Alert.alert('Error', 'Failed to submit the form. Please try again later.');
        }
        // // Display an alert for demonstration purposes
        // Alert.alert('Form Submitted', 'Thank you for contacting us!');

        // // Reset form fields
        // setName('');
        // setEmail('');
        // setMessage('');
    };


    return (
        <View style={styles.container}>
            <Text style={styles.heading}>Contact Us</Text>
            <TextInput
                style={styles.input}
                placeholder="Your Name"
                value={name}
                onChangeText={(text) => setName(text)}
            />
            <TextInput
                style={styles.input}
                placeholder="Your Email"
                value={email}
                onChangeText={(text) => setEmail(text)}
                keyboardType="email-address"
            />
            <TextInput
                style={[styles.input, styles.messageInput]}
                placeholder="Your Message"
                value={message}
                onChangeText={(text) => setMessage(text)}
                multiline
            />
            <Button title="Submit" onPress={handleSubmit} />
        </View>
    );
};

export default ContactUsScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        justifyContent: 'center',
    },
    heading: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
    input: {
        height: 40,
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    messageInput: {
        height: 80,
    },
});
