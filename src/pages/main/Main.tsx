import {
    Pressable,
    SafeAreaView,
    ScrollView,
    StatusBar,
    Text,
} from 'react-native';
import React from 'react';
import {NavigationProp, useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/NavigationType';

export default function Main() {
    const navigation = useNavigation<NavigationProp<RootStackParamList>>();

    return (
        <SafeAreaView>
            <StatusBar />
            <ScrollView contentInsetAdjustmentBehavior="automatic">
                <Text>asd</Text>
                <Pressable
                    style={{
                        marginBottom: 20,
                    }}
                    onPress={() => {
                        navigation.navigate('Scan');
                    }}>
                    <Text>QRCode</Text>
                </Pressable>
                <Pressable
                    onPress={() => {
                        navigation.navigate('PassportScan');
                    }}>
                    <Text>PassportScan</Text>
                </Pressable>
            </ScrollView>
        </SafeAreaView>
    );
}
