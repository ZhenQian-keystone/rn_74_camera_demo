/* eslint-disable react/react-in-jsx-scope */
import {Text, View} from 'react-native';
import {SvgProps} from 'react-native-svg';
import bluetooth from '../../assets/images/bluetooth.svg';
import bookmark from '../../assets/images/bookmark.svg';
import bookmarkFilled from '../../assets/images/bookmarkFilled.svg';
import boxTriangle from '../../assets/images/boxTriangleTop.svg';
import browseVoters from '../../assets/images/browseVoters.svg';
import Buy from '../../assets/images/buy.svg';
import {Color} from '../../theme/theme';
import {FC, useMemo} from 'react';
function ImageGalleryScreen() {
  // use memo to render the tab data
  const tabData = useMemo((): Array<{
    name: string;
    icon: FC<SvgProps>;
    color: Color;
  }> => {
    return [
      {name: 'bluetooth', icon: bluetooth, color: 'white'},
      {name: 'bookmark', icon: bookmark, color: 'white'},
      {name: 'bookmarkFilled', icon: bookmarkFilled, color: 'white'},
      {name: 'boxTriangle', icon: boxTriangle, color: 'white'},
      {name: 'browseVoters', icon: browseVoters, color: 'white'},
      {name: 'buy', icon: Buy, color: 'white'},
    ];
  }, []);

  return (
    <View>
      {tabData.map(item => (
        <View key={item.name}>
          <item.icon />
        </View>
      ))}
    </View>
  );
}

export default ImageGalleryScreen;
