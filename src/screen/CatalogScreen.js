import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

const CatalogScreen = props => {
  const {navigation} = props;
  return (
    <View style={{backgroundColor: 'white', flex: 1}}>
      <Text>CATALOGSCREEN</Text>
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          console.log('BUTTON PRESSED');
          navigation.navigate('PlantsScreen');
        }}>
        <Text>GO TO PLANTS SCREEN</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    marginHorizontal: 5,
    marginVertical: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
    borderRadius: 10,
    borderColor: '#379683',
    borderWidth: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default CatalogScreen;
