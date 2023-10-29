import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {
    Camera,
    useCameraDevice,
    useFrameProcessor,
} from 'react-native-vision-camera';
export const PassportScan = () => {
    const device = useCameraDevice('back');

    const cameraRef = React.useRef(null);

    const frameProcessor = useFrameProcessor(frame => {
        'worklet';
        console.log(
            `Frame: ${frame.width}x${frame.height} (${frame.pixelFormat})`,
            frame.toString(),
        );
    }, []);

    useEffect(() => {}, []);

    if (device == null) {
        return (
            <View>
                <Text>no camera</Text>
            </View>
        );
    }
    return (
        <Camera
            ref={cameraRef}
            // frameProcessor={frameProcessor}
            style={{flex: 1}}
            device={device}
            photo={true}
            pixelFormat={'rgb'}
            isActive={true}
        />
    );
};
