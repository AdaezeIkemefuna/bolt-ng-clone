import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { getCountry, getPhonenumber } from '../../slices/authSlice';
import { colors } from '../../config/UI';
import BackNavigation from '../../components/Buttons/BackNavigation';
import OtpInputs from 'react-native-otp-inputs';
import { useNavigation } from '@react-navigation/native';
const OtpScreen = () => {
  const countryCode = useSelector(getCountry);
  const value = useSelector(getPhonenumber);
  const fullNumber = `${countryCode?.callingCode} ${value}`;
  const navigation = useNavigation();
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <BackNavigation />
        <Text style={styles.boldText}>Enter Code</Text>
      </View>

      <View style={styles.otpParagraph}>
        <Text style={styles.otpText}>
          A code was sent to{' '}
          <Text style={{ fontWeight: 700, color: colors.charcoal }}>
            {fullNumber}
          </Text>{' '}
          <TouchableOpacity onPress={() => navigation.navigate('InputNumber')}>
            <Text style={{ fontWeight: 500, color: colors.green }}>
              Edit phone number
            </Text>
          </TouchableOpacity>
        </Text>
      </View>

      {/* <OtpInputs handleChange={() => console.log('1234')} numberOfInputs={4} /> */}

      <TouchableOpacity
        style={{
          marginTop: 'auto',
        }}
      >
        <Text style={{ fontWeight: 500, color: colors.green }}>
          Resend Code
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default OtpScreen;

const styles = StyleSheet.create({
  container: {
    alignItems: 'flex-start',
    backgroundColor: colors.midGrey,
    flex: 1,
    marginTop: 40,
    paddingHorizontal: 18,
    paddingBottom: 30,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    gap: 40,
    alignItems: 'center',
    marginBottom: 20,
    width: '100%',
  },
  boldText: {
    fontSize: 20,
    fontWeight: '700',
    color: colors.charcoal,
  },
  otpParagraph: {
    width: 140,
  },
  otpText: {
    color: colors.faintGrey,
  },
});
