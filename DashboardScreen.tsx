import React from 'react';
import { View, Button, StyleSheet, Linking } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import AppHeader from './AppHeader'; // Import the header component
import AppFooter from './AppFooter'; // Import the footer component

type RootStackParamList = {
  PersonalDetailsScreen: undefined;
  PackageDetailsScreen: undefined;
  BeneficiaryDetailsScreen: undefined;
  SubscriptionScreen: undefined;
  HealthcareScreen: undefined;
  PatientListScreen: undefined;  // Add PatientListScreen to the stack
};

type DashboardScreenNavigationProp = StackNavigationProp<RootStackParamList>;

const DashboardScreen: React.FC = () => {
  const navigation = useNavigation<DashboardScreenNavigationProp>();

  // Function to handle direct call
  const handleCall = () => {
    const phoneNumber = 'tel:+1234567890'; // Replace with the desired phone number
    Linking.openURL(phoneNumber).catch((err) =>
      console.error('Failed to make a call:', err)
    );
  };

  // Function to handle Zoom video call
  const handleVideoCall = () => {
    const zoomMeetingUrl = 'zoomus://zoom.us/join?confno=87501226578&pwd=x7BK53FKOyDoII04jTcS1Xq2acimAM'; // Replace with actual meeting ID and password

    // Try to open the Zoom app with the meeting ID and password
    Linking.openURL(zoomMeetingUrl).catch((err) => {
      console.error('Failed to open Zoom:', err);
      // Optionally handle cases where Zoom is not installed
      Linking.openURL('https://zoom.us/download');  // Open Zoom download page if Zoom is not installed
    });
  };

  // Function to navigate to HealthcareScreen
  const handleHealthcare = () => {
    navigation.navigate('PatientListScreen');  // Navigate to PatientListScreen
  };

  return (
    <View style={styles.container}>
      {/* Add App Header */}
      <AppHeader username="John Doe" lastLogin="10/18/2024" />

      {/* Main Content */}
      <View style={styles.content}>
        <Button title="Personal Details" onPress={() => navigation.navigate('PersonalDetailsScreen')} />
        <Button title="Package Details" onPress={() => navigation.navigate('PackageDetailsScreen')} />
        <Button title="Beneficiary Details" onPress={() => navigation.navigate('BeneficiaryDetailsScreen')} />
        <Button title="Subscription" onPress={() => navigation.navigate('SubscriptionScreen')} />

        {/* Phone Icon Button */}
        <Button title="Call Now" onPress={handleCall} />

        {/* Zoom Video Call Button */}
        <Button title="Join Zoom Call" onPress={handleVideoCall} />

        {/* Healthcare Button */}
        <Button title="Healthcare" onPress={handleHealthcare} />
      </View>

      {/* Add App Footer */}
      <AppFooter />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { 
    flex: 1, 
    justifyContent: 'space-between', 
    paddingHorizontal: 20 
  },
  content: {
    flex: 1,
    justifyContent: 'center',
  }
});

export default DashboardScreen;
