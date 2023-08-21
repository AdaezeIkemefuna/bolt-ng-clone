import { SafeAreaView, StyleSheet, Text, View } from 'react-native';
import tw from 'tailwind-react-native-classnames';
import NavOptions from '../navigation/NavOptions';
import { Image } from 'react-native';

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-red-200 h-full`}>
      <View style={tw`p-5`}>
        <Image
          style={{ width: 100, height: 100, resizeMode: 'contain' }}
          source={{
            uri: 'https://links.papareact.com/gzs',
          }}
        />

        <NavOptions />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  text: {
    textDecorationLine: 'underline',
  },
});
