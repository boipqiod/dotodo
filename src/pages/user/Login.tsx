import React, {useState} from 'react';
import {
    TouchableOpacity,
    SafeAreaView,
    StatusBar,
    Text,
    TextInput,
    View,
    TextInputChangeEventData,
} from 'react-native';
import {NativeSyntheticEvent} from 'react-native/Libraries/Types/CoreEventTypes';
import {LoginStyles} from '../../styles/login';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/NavigationType';

export const Login = () => {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    const [form, setForm] = useState({
        username: '',
        password: '',
    });

    const onChange = (e: NativeSyntheticEvent<TextInputChangeEventData>) => {
        console.log(e);
        setForm({...form, [e.nativeEvent.text]: e.nativeEvent.text});
    };

    const login = () => {
        navigation.reset({
            index: 0,
            routes: [{name: 'Main'}],
        });
    };

    const toRegister = () => {
        navigation.navigate('UserNavi', {screen: 'Register'});
    };

    return (
        <SafeAreaView>
            <StatusBar />
            <View style={LoginStyles.container}>
                <View style={LoginStyles.innerContainer}>
                    <Text style={LoginStyles.title}>Login</Text>
                    <TextInput
                        id={'email'}
                        inputMode={'email'}
                        keyboardType={'email-address'}
                        style={LoginStyles.textInput}
                        placeholder="Email"
                        onChange={onChange}
                    />
                    <TextInput
                        id={'password'}
                        secureTextEntry={true}
                        style={LoginStyles.textInput}
                        placeholder="Password"
                        onChange={onChange}
                    />
                    <TouchableOpacity
                        style={LoginStyles.LoginButton}
                        onPress={login}>
                        <Text style={LoginStyles.LoginButtonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={toRegister}>
                        <Text>Register</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    );
};
