import React, { Component } from 'react';
import { View, Button, StyleSheet, Linking, Alert } from 'react-native';

interface CallScreenProps {}

interface CallScreenState {}

class CallScreen extends Component<CallScreenProps, CallScreenState> {
  // Method to handle the phone call
  handleCall = () => {
    const phoneNumber = 'tel:+1234567890'; // Replace with the desired phone number

    Linking.openURL(phoneNumber).catch((err) => {
      // Show an alert if the call fails
      Alert.alert('Error', 'Failed to make a call. Please try again later.');
      console.error('Failed to make a call:', err);
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <Button title="Call Now" onPress={this.handleCall} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default CallScreen;
