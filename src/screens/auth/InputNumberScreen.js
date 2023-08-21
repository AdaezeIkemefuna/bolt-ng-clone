import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import { PhoneInput } from 'react-native-international-phone-number';
import { useDispatch, useSelector } from 'react-redux';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import {
  getCountry,
  getFullnumber,
  getPhonenumber,
  setCountry,
  setFullnumber,
  setPhonenumber,
} from '../../slices/authSlice';
import { colors } from '../../config/UI';
import tw from 'tailwind-react-native-classnames';
import Button from '../../components/Buttons/Button';
import { useNavigation } from '@react-navigation/native';
import { icons, images } from '../../config/images';

const InputNumberScreen = () => {
  const inputValue = useSelector(getPhonenumber);
  const selectedCountry = useSelector(getCountry);
  const fullNumber = useSelector(getFullnumber);

  const dispatch = useDispatch();
  const navigation = useNavigation();

  const handleRouteToOtp = () => {
    navigation.navigate('otp');
  };

  const handleSetFullNumber = () => {
    dispatch(setFullnumber(`${selectedCountry?.callingCode}${inputValue}`));
  };

  const handleInputValue = (phoneNumber) => {
    dispatch(setPhonenumber(phoneNumber));
    handleSetFullNumber();
  };

  const handleSelectedCountry = (country) => {
    dispatch(setCountry(country));
  };

  const handleClearNumber = () => {
    dispatch(setPhonenumber(''));
  };
  return (
    <SafeAreaView style={styles.container}>
      <View
        style={{
          width: '90%',
          height: 57,
          marginTop: 60,
        }}
      >
        <PhoneInput
          value={inputValue}
          onChangePhoneNumber={handleInputValue}
          selectedCountry={selectedCountry}
          onChangeSelectedCountry={handleSelectedCountry}
          inputStyle={{
            color: colors.charcoal,
          }}
          containerStyle={{
            backgroundColor: colors.whitishGray,
            borderWidth: inputValue === '' ? 1 : 2,
            borderStyle: 'solid',
            borderColor: colors.green,
            marginBottom: 16,
            width: '100%',
            height: 55,
            position: 'relative',
          }}
          flagContainerStyle={{
            borderTopLeftRadius: 7,
            borderBottomLeftRadius: 7,
            backgroundColor: colors.lightGrey,
            justifyContent: 'center',
          }}
        />
        <TouchableOpacity
          onPress={handleClearNumber}
          style={{
            position: 'absolute',
            top: 15,
            right: 14,
          }}
        >
          <Image
            source={icons.cancel}
            style={[
              inputValue === '' && tw`hidden`,
              {
                height: 24,
                width: 24,
                resizeMode: 'contain',
              },
            ]}
          />
        </TouchableOpacity>
      </View>

      <Text
        style={{
          width: '50%',
          color: colors.faintGrey,
          alignSelf: 'flex-start',
          marginLeft: 16,
          marginVertical: 10,
        }}
      >
        We will send you an SMS code to verify your number
      </Text>

      <View style={styles.btn}>
        <Button type='primary' onclick={handleRouteToOtp}>
          Continue
        </Button>
      </View>
    </SafeAreaView>
  );
};

export default InputNumberScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    backgroundColor: colors.midGrey,
    flex: 1,
    paddingHorizontal: 12,
    paddingBottom: 30,
  },
  btn: {
    width: '90%',
    marginTop: 'auto',
    marginBottom: 20,
  },
});
