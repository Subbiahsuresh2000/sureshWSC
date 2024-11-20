import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert } from 'react-native';
import * as DocumentPicker from 'expo-document-picker'; // Import expo document picker

const BeneficiaryListScreen: React.FC = () => {
  // Replace "patients" with "beneficiaries"
  const beneficiaries = ['John Doe', 'Jane Smith', 'Alice Johnson', 'Bob Brown', 'Charlie Davis'];

  // State to hold the uploaded file for each beneficiary, including the upload date
  const [uploadedFiles, setUploadedFiles] = useState<{ [key: string]: { uri: string; date: string } }>({});

  // Handle file upload
  const handleFileUpload = async (beneficiaryName: string) => {
    try {
      // Pick a file using Expo's DocumentPicker
      const res = await DocumentPicker.getDocumentAsync({
        type: '*/*', // Allow all file types
      });

      if (res.type === 'cancel') {
        // Handle cancellation
        Alert.alert('Cancelled', 'File selection was cancelled.');
        return;
      }

      // Get the current date and format it
      const uploadDate = new Date().toLocaleString();

      // Save the file URI and the upload date in the state, keyed by beneficiary name
      setUploadedFiles((prev) => ({
        ...prev,
        [beneficiaryName]: {
          uri: res.uri, // Store the URI of the uploaded file
          date: uploadDate, // Store the upload date
        },
      }));

      // Show selected file details
      Alert.alert('File Selected', `File selected for ${beneficiaryName}: ${res.name}`);

      // Simulate file upload logic (e.g., upload to server)
      Alert.alert('File Upload', `Uploading file for ${beneficiaryName}: ${res.name}`);

    } catch (err) {
      Alert.alert('Error', 'An error occurred during file selection or upload.');
    }
  };

  // Handle file view
  const handleFileView = (beneficiaryName: string) => {
    const fileData = uploadedFiles[beneficiaryName];

    if (fileData) {
      // Show the file URI and the date it was uploaded, simulating the file being "viewed"
      Alert.alert('View File', `Viewing file for ${beneficiaryName}: ${fileData.uri}\nUploaded on: ${fileData.date}`);
    } else {
      Alert.alert('No File Uploaded', `No file uploaded for ${beneficiaryName}`);
    }
  };

  // Handle file download
  const handleFileDownload = (beneficiaryName: string) => {
    const fileData = uploadedFiles[beneficiaryName];

    if (fileData) {
      // Simulate file download
      Alert.alert('Download File', `Downloading file for ${beneficiaryName}: ${fileData.uri}`);
    } else {
      Alert.alert('No File Uploaded', `No file uploaded for ${beneficiaryName}`);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Beneficiaries List</Text>
      {beneficiaries.map((beneficiary, index) => (
        <View key={index} style={styles.patientContainer}>
          <Text style={styles.patientName}>
            {beneficiary}
            {uploadedFiles[beneficiary] && (
              <Text style={styles.uploadDate}> (Uploaded on: {uploadedFiles[beneficiary]?.date})</Text>
            )}
          </Text>
          <View style={styles.buttonContainer}>
            {/* Upload Button */}
            <Button title="Upload File" onPress={() => handleFileUpload(beneficiary)} />
            {/* View Button */}
            <Button title="View File" onPress={() => handleFileView(beneficiary)} />
            {/* Download Button */}
            <Button title="Download File" onPress={() => handleFileDownload(beneficiary)} />
          </View>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  patientContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  patientName: {
    fontSize: 18,
  },
  uploadDate: {
    fontStyle: 'italic',
    fontSize: 14,
    color: 'gray',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '50%',
  },
});

export default BeneficiaryListScreen;
