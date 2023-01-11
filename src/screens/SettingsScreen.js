import React from 'react';
import {
  Button,
  ScrollView,
  Text,
  View,
  StyleSheet,
  FlatList,
} from 'react-native';
import {BleManager} from 'react-native-ble-plx';
import {useState} from 'react';
import EmptyList from '../components/EmptyList';
const bleManager = new BleManager();

const SettingsScreen = ({navigation}) => {
  const [availableDevices, setAvailableDevices] = useState([]);
  let devices = [];
  const scanForPeripherals = () => {
    bleManager.startDeviceScan(null, null, (error, scannedDevice) => {
      devices.push(scannedDevice);
    });
    setTimeout(() => {
      console.log('fire!');
      bleManager.stopDeviceScan();
    }, 5000);
    setAvailableDevices(devices);
    console.log('state', availableDevices);
  };

  return (
    <View style={styles.container}>
      <Text>Settings Screen</Text>
      <Button title="Press Meyo" onPress={scanForPeripherals} />
      <FlatList
        data={availableDevices}
        renderItem={({item}) => <Text style={styles.item}>{item.id}</Text>}
        keyExtractor={item => item.id}
        ListEmptyComponent={EmptyList}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    padding: 50,
    flex: 1,
  },
  item: {
    padding: 20,
    fontSize: 15,
    marginTop: 5,
  },
});

export default SettingsScreen;


