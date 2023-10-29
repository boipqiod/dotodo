import React, {useEffect} from 'react';
import {SafeAreaView, StatusBar, StyleSheet, Text, View} from 'react-native';
import {NavigationProp} from '@react-navigation/native';
import {RootStackParamList} from '../../navigation/NavigationType';

type SplashScreenNavigationProp = NavigationProp<RootStackParamList, 'Splash'>;

type Props = {
    navigation: SplashScreenNavigationProp;
};

export const Splash = ({navigation}: Props) => {
    useEffect(() => {
        navigation.reset({
            index: 0,
            routes: [{name: 'UserNavi'}],
        });
    }, [navigation]);

    return (
        <SafeAreaView>
            <StatusBar />
            <View style={styles.container}>
                <Text>Splash</Text>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignContent: 'center',
        textAlign: 'center',
    },
});
