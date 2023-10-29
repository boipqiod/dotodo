import React from 'react';
import {Alert, Text, View} from 'react-native';
import {
    Camera,
    useCameraDevice,
    useCodeScanner,
} from 'react-native-vision-camera';

export const Scan = () => {
    const device = useCameraDevice('back');

    const [read, setRead] = React.useState(false);

    const codeScanner = useCodeScanner({
        codeTypes: ['qr', 'ean-13'],
        onCodeScanned: codes => {
            if (read) {
                return;
            }
            setRead(true);
            Alert.alert('Scanned code', codes[0].value, [
                {
                    text: 'OK',
                    onPress: () => {
                        console.log('OK Pressed');
                        setRead(false);
                    },
                },
            ]);
        },
    });

    if (device == null) {
        return (
            <View>
                <Text>no camera</Text>
            </View>
        );
    }
    return (
        <Camera
            codeScanner={codeScanner}
            style={{flex: 1}}
            device={device}
            isActive={true}
        />
    );
};
