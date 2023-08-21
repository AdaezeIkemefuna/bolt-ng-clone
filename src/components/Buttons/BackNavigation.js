import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import { useNavigation } from '@react-navigation/native';
import { icons, images } from '../../config/images';

const BackNavigation = () => {
  const navigation = useNavigation();
  const handleGoback = () => {
    navigation.goBack();
  };
  return (
    <TouchableOpacity onPress={handleGoback}>
      <Image
        source={icons.backArrow}
        style={{
          height: 30,
          width: 30,
          resizeMode: 'cover',
        }}
      />
    </TouchableOpacity>
  );
};

export default BackNavigation;

const styles = StyleSheet.create({});
