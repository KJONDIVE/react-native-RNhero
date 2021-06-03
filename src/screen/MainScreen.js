import React from 'react';
import {View, Text, Button} from 'react-native';

const MainScreen = props => {
  console.log('PROPS', props);
  const {navigation} = props;
  return (
    <View>
      <Text>MAINSCREEN</Text>
      <Button
        title="To News Screen"
        onPress={() => navigation.navigate('NewsScreen')}></Button>
    </View>
  );
};

export default MainScreen;
