import {
  BottomSheetBackdrop,
  BottomSheetModal,
  BottomSheetModalProvider,
} from '@gorhom/bottom-sheet';
import {
  memo,
  Ref,
  useCallback,
  useImperativeHandle,
  useMemo,
  useRef,
} from 'react';
import useBackHandler from '../hooks/useBackHandler';
import {useColors, useOpacity, useSpacing} from '../theme/themeHooks';
import {Text, View} from 'react-native';
import React from 'react';

export type BottomSheetTestRef = {
  show: () => void;
  hide: () => void;
};

const BottomSheetSelector = (name: string, ref: Ref<BottomSheetTestRef>) => {
  const bottomSheetModalRef = useRef<BottomSheetModal>(null);
  // modal height
  const snapPoints = useMemo(() => ['60%', '80%'], []);
  const {m} = useSpacing();
  const colors = useColors();
  const sheetHandleStyle = useMemo(() => ({padding: m}), [m]);
  // bg color
  const {backgroundStyle} = useOpacity('surfaceSecondary', 1);
  const {handleDismiss} = useBackHandler(bottomSheetModalRef);

  useImperativeHandle(ref, () => ({
    show: () => {
      console.log('bottom sheet show');
      if (!bottomSheetModalRef.current) {
        console.log('bottom sheet ref is null');
        return;
      }
      bottomSheetModalRef.current?.present();
    },
    hide: () => {
      if (!bottomSheetModalRef.current) {
        console.log('bottom sheet ref is null');
        return;
      }
      bottomSheetModalRef.current?.dismiss();
    },
  }));

  const renderBackdrop = useCallback(
    (props: any) => (
      <BottomSheetBackdrop
        disappearsOnIndex={-1}
        appearsOnIndex={0}
        {...props}
      />
    ),
    [],
  );

  const handleIndicatorStyle = useMemo(() => {
    return {
      backgroundColor: colors.secondaryText,
    };
  }, [colors.secondaryText]);
  return (
    <BottomSheetModalProvider>
      <BottomSheetModal
        ref={bottomSheetModalRef}
        index={0}
        backgroundStyle={backgroundStyle}
        backdropComponent={renderBackdrop}
        snapPoints={snapPoints}
        handleStyle={sheetHandleStyle}
        onDismiss={handleDismiss}
        handleIndicatorStyle={handleIndicatorStyle}>
        <View>
          <Text>Hello</Text>
        </View>
      </BottomSheetModal>
    </BottomSheetModalProvider>
  );
};
export default memo(React.forwardRef(BottomSheetSelector));
