import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image, Alert } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const AccountTypeSelection = ({ navigation }) => {

    const handleAccountTypeSelect = (type) => {
        console.log(`Selected Account Type: ${type}`); // Logs the selected account type to the console

        if (type === 'Admin') {
            Alert.alert('Alert!', 'This Section is Developed by another developer.');// Navigate to admin-specific screen 
        } else {
            // navigation.replace('BottomTabNavigator');
            navigation.navigate('UserLoginScreen'); // Navigate to the User login screen
        }
    };

    return (
        <View style={styles.container}>
            {/* Logo Section */}
            <Image
                source={require('../../assets/logo-design.png')}
                style={styles.logo}
            />

            <Text style={styles.title}>Choose Account Type</Text>

            <View style={styles.buttonsContainer}>
                {/* Admin Button */}
                <TouchableOpacity style={styles.button} onPress={() => handleAccountTypeSelect('Admin')}>
                    <MaterialIcons name="admin-panel-settings" size={70} color="#000" />
                    <Text style={styles.buttonText}>Admin</Text>
                </TouchableOpacity>

                {/* User Button */}
                <TouchableOpacity style={styles.button} onPress={() => handleAccountTypeSelect('User')}>
                    <FontAwesome6 name="user" size={60} color="#000" />
                    <Text style={styles.buttonText}>User</Text>
                </TouchableOpacity>
            </View>

            {/* Footer Text */}
            <Text style={styles.footerText}>Please select the account type to get started</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff',
        alignItems: 'center',
        paddingTop: 50,
    },
    logo: {
        width: 150,
        height: 150,
        marginBottom: 70,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 30,
        color: '#4a00e0',
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '90%',
        marginBottom: 30,
    },
    button: {
        width: 140,
        height: 140,
        backgroundColor: '#F3F4FB', // Lighter background color for buttons
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 1,
        borderColor: '#D1D5DB',
    },
    buttonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000',
        marginTop: 10,
    },
    footerText: {
        fontSize: 14,
        color: '#A1A1A1',
        marginTop: 20,
        textAlign: 'center',
    },
});

export default AccountTypeSelection;
