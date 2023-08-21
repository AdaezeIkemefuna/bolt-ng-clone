import { Dimensions, Platform, PixelRatio } from 'react-native';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

// iphone XS Max's scale
const scale = SCREEN_WIDTH / 414;

export function responsivePx(size) {
  const reponsiveSize = size * scale;
  if (Platform.OS === 'ios') {
    return Math.round(PixelRatio.roundToNearestPixel(reponsiveSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(reponsiveSize));
  }
}
