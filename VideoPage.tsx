import React from 'react';
import { StyleSheet, View, TouchableOpacity, Text, Dimensions } from 'react-native';
import { Video } from 'expo-av';
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  LoginScreen: undefined;
};

type VideoPageNavigationProp = StackNavigationProp<RootStackParamList, 'LoginScreen'>;

const VideoPage: React.FC = () => {
  const navigation = useNavigation<VideoPageNavigationProp>();
  const videoRef = React.useRef<Video>(null);

  const handleSkip = () => {
    navigation.navigate('LoginScreen');
  };

  return (
    <View style={styles.container}>
      {/* Use local video file with require */}
      <Video
        ref={videoRef}
        source={require('../../assets/video/wsc.mp4')} // Adjust the path to your local video file
        style={styles.video}
        shouldPlay
        isLooping
        resizeMode='cover' // Change this to "contain", "cover", or "stretch"
      />

      <TouchableOpacity onPress={handleSkip} style={styles.skipButton}>
        <Text style={styles.skipButtonText}>Skip</Text>
      </TouchableOpacity>
    </View>
  );
};

const { height, width } = Dimensions.get('window'); // Get screen dimensions

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center', // Centers content vertically
    alignItems: 'center', // Centers content horizontally
  },
  video: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    width: '500%',
    height: '500%', // Ensure video covers the entire screen
  },
  skipButton: {
    position: 'absolute',
    bottom: height * 0.1,  // Position the button 10% from the bottom of the screen
    left: width * 0.5 - 75, // Center the button horizontally (adjust for padding)
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent black background
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
  },
  skipButtonText: {
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
});

export default VideoPage;
