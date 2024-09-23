import { View, Text, TextInput, StyleSheet, Button } from 'react-native';
import React, { useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import NameIcon from './assets/name-icon.svg';  // Import the SVG
import EmailIcon from './assets/email-icon.svg';  // Import the SVG
import GoogleIcon from './assets/google-icon.svg'
import InstagramIcon from './assets/instagram-icon.svg'

const HomeScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');

  const navigation = useNavigation();

  const handleSubmit = () => {
    navigation.navigate('Details', { name, email });
  };

  return (
    <View style={styles.container}>

        <Text style={styles.register_txt}> Register </Text>
      <View style={styles.inputContainer}>
       
            <NameIcon width={24} height={24} style={styles.icon} />    
        <TextInput
          value={name}
          onChangeText={setName}
          placeholder="Enter your name"
          style={styles.input}
        />
      </View>
      <View style={styles.inputContainer}>
        <EmailIcon width={24} height={24} style={styles.icon} /> 
        <TextInput
          value={email}
          onChangeText={setEmail}
          placeholder="Enter your email"
          style={styles.input}
        />
      </View>
     
      <Button title="Submit" onPress={handleSubmit} />
      <View>
        <Text style={styles.follow_us}> follow us on</Text>
          <View style={styles.svg_flex}>
            <View>
                <GoogleIcon  width={24} height={24} style={styles.icon} /> 
            </View>
            <View>
                <InstagramIcon width={24} height={24} style={styles.icon}/>
            </View>
            
          </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    borderRadius: 10, // Slight rounding for smoother UI
    padding: 20,
    margin: 15,
    backgroundColor: '#f9f9f9', 
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10, // Rounding the input container
    marginBottom: 15,
    paddingHorizontal: 10, // More padding inside the container
    backgroundColor: '#fff',
  },
  input: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 15, // More horizontal padding for better spacing
  },
  icon: {
    marginRight: 10,
  },
  register_txt:{
    fontSize: 24, // Larger font for better visibility
    fontWeight: 'bold', // Make the text bold for emphasis
    textAlign: 'center', // Align text to the center
    marginBottom: 20,
  },
  follow_us:{
       fontSize:15,
       paddingStart:120,
       marginTop:20,
       fontWeight:'500',
  },
  svg_flex:{
          flexDirection:'row',
         justifyContent:'center',
         marginTop:'20'
  },
  iconWrapper:{
    marginHorizontal:10
  }

});

export default HomeScreen;
