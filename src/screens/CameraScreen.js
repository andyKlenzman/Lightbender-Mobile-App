import {Tab} from '@react-navigation/routers';
import React from 'react';
import {Text, View, Button} from 'react-native';
import {useSelector} from 'react-redux';

const CameraScreen = ({navigation}) => {
  // const testVal = useSelector(state => state.bluetooth.value);

  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Camera Screen</Text>

      <Button
        title="Go to Settings"
        onPress={() => navigation.navigate('Settings')}
      />
    </View>
  );
};

export default CameraScreen;
