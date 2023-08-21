import { StyleSheet, Text, TouchableOpacity, Image } from 'react-native';
import tw from 'tailwind-react-native-classnames';
const Button = ({ children, disabled, type, onclick, icon }) => {
  const buttonStyles = {
    primary: tw`rounded-full bg-green-400 w-full py-4 `,
    primaryText: tw`text-sm text-white font-bold text-center`,
    secondary: tw`rounded-full bg-transparent w-full py-4 flex-row justify-start items-center border border-gray-300 mb-4 px-6`,
    secondaryText: tw`text-sm font-bold text-gray-500 ml-12`,
  };
  return (
    <TouchableOpacity style={buttonStyles[type]} onPress={onclick}>
      {icon && <Image source={icon} style={styles.image} />}
      <Text
        style={
          type === 'primary'
            ? buttonStyles.primaryText
            : type === 'secondary'
            ? buttonStyles.secondaryText
            : ''
        }
      >
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  image: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
});
