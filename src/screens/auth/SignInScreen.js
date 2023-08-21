import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../config/UI';
import Button from '../../components/Buttons/Button';
import { icons } from '../../config/images';
import { PhoneInput } from 'react-native-international-phone-number';
import { useDispatch, useSelector } from 'react-redux';
import {
  getCountry,
  getPhonenumber,
  setCountry,
  setPhonenumber,
} from '../../slices/authSlice';
import { useNavigation } from '@react-navigation/native';

const SignInScreen = () => {
  const inputValue = useSelector(getPhonenumber);
  const selectedCountry = useSelector(getCountry);
  const dispatch = useDispatch();

  const navigation = useNavigation();

  const handleInputFocus = () => {
    navigation.navigate('InputNumber');
  };

  const handleInputValue = (phoneNumber) => {
    dispatch(setPhonenumber(phoneNumber));
    if (phoneNumber === '') handleInputFocus();
  };

  const handleSelectedCountry = (country) => {
    dispatch(setCountry(country));
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.center}>
        <Text style={styles.boldText}>Enter your number</Text>

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
            borderWidth: 1,
            borderStyle: 'solid',
            borderColor: colors.whitishGray,
            marginVertical: 16,
            width: '90%',
            height: 55,
          }}
          flagContainerStyle={{
            borderTopLeftRadius: 7,
            borderBottomLeftRadius: 7,
            backgroundColor: colors.lightGrey,
            justifyContent: 'center',
          }}
        />

        <View style={styles.btn}>
          <Button type='primary'>Sign In</Button>
        </View>
        <View style={styles.orWrapper}>
          <View style={styles.horizontalLine} />
          <Text style={styles.orText}>OR</Text>
          <View style={styles.horizontalLine} />
        </View>
        <View style={styles.btn}>
          <Button type='secondary' icon={icons.google}>
            Sign in with Google
          </Button>
        </View>
        <View style={styles.btn}>
          <Button type='secondary' icon={icons.facebook}>
            Sign in with Facebook
          </Button>
        </View>
      </View>

      <Text style={styles.privacyPolicy}>
        If you're creating a new account,{' '}
        <Text style={{ textDecorationLine: 'underline' }}>
          Terms and Conditions
        </Text>{' '}
        and{' '}
        <Text style={{ textDecorationLine: 'underline' }}>Privacy Policy</Text>{' '}
        will apply
      </Text>
    </SafeAreaView>
  );
};

export default SignInScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.midGrey,
    flex: 1,
    paddingHorizontal: 12,
    paddingBottom: 30,
  },
  center: {
    width: '100%',
    alignItems: 'center',
    marginTop: 'auto',
  },
  boldText: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.charcoal,
  },
  btn: {
    width: '90%',
  },
  orWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 30,
  },
  orText: {
    fontSize: 12,
    fontWeight: '500',
    color: colors.faintGrey,
    marginHorizontal: 10,
  },
  horizontalLine: {
    borderBottomColor: colors.grey,
    borderBottomWidth: 1,
    width: 100,
    marginVertical: 5,
  },
  privacyPolicy: {
    marginTop: 'auto',
    color: colors.faintGrey,
    textAlign: 'center',
  },
});
