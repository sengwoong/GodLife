import React, { useState, useEffect, useRef, Suspense, useLayoutEffect } from 'react';
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  ActivityIndicator, // 로딩 인디케이터
} from 'react-native';

interface ScrollWheelPickerProps {
  data: number[]; // 휠에 표시할 데이터
  onValueChange: (value: number) => void; // 선택한 값 콜백
  selectedValue: number; // 현재 선택된 값
}

const ITEM_HEIGHT = 40; // 아이템 높이

const ScrollWheelPicker: React.FC<ScrollWheelPickerProps> = ({
  data,
  onValueChange,
  selectedValue,
}) => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isReady, setIsReady] = useState(false); // 데이터가 준비되었는지 상태 관리
  const flatListRef = useRef<FlatList>(null);

  useLayoutEffect(() => {
    const initialIndex = data.indexOf(selectedValue);
    if (flatListRef.current && initialIndex !== -1) {
      flatListRef.current.scrollToOffset({
        animated: false,
        offset: initialIndex * ITEM_HEIGHT,
      });
      setCurrentIndex(initialIndex);
    }
    setIsReady(true); // 데이터 로딩 완료 후 렌더링 허용
  }, []);

  const handleScroll = (event: any) => {
    const offsetY = event.nativeEvent.contentOffset.y;
    const index = Math.round(offsetY / ITEM_HEIGHT);
    setCurrentIndex(index);
    onValueChange(data[index]);
  };

  return (
    <Suspense fallback={<ActivityIndicator size="large" color="blue" />}>
      {isReady ? (
        <View style={styles.container}>
          <FlatList
            ref={flatListRef}
            data={data}
            keyExtractor={(index) => index.toString()}
            snapToInterval={ITEM_HEIGHT}
            decelerationRate="fast"
            showsVerticalScrollIndicator={false}
            bounces={false}
            onScroll={handleScroll}
            contentContainerStyle={styles.listContainer}
            renderItem={({ item, index }) => (
              <TouchableOpacity
                style={[
                  styles.itemContainer,
                  index === currentIndex ? styles.selectedItem : undefined, // 선택된 아이템 처리
                ]}
                onPress={() => onValueChange(item)} // 클릭 시 값 전달
              >
                <Text
                  style={[
                    styles.itemText,
                    index === currentIndex && styles.selectedText,
                  ]}
                >
                  {item}
                </Text>
              </TouchableOpacity>
            )}
          />
          <View style={styles.centerLine} />
        </View>
      ) : (
        <ActivityIndicator size="large" color="blue" /> // 로딩 중이면 로딩 인디케이터 표시
      )}
    </Suspense>
  );
};

export default ScrollWheelPicker;

const styles = StyleSheet.create({
  container: {
    height: ITEM_HEIGHT * 5, // 5개의 아이템 높이를 기준으로 컨테이너 높이 설정
    overflow: 'hidden', // 넘치는 부분 숨김
    display: 'flex',
    flex: 1,
  },
  listContainer: {
    paddingVertical: ITEM_HEIGHT * 2, // 상하 패딩으로 중앙값 맞추기
    marginHorizontal: '40%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  itemContainer: {
    height: ITEM_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  selectedItem: {
    backgroundColor: '#f0f0f0', // 선택된 아이템 배경색
  },
  itemText: {
    fontSize: 18,
    color: 'gray',
    justifyContent: 'center',
    textAlign: 'center', // 텍스트를 중앙 정렬
  },
  selectedText: {
    color: 'blue', // 선택된 텍스트 색상
    fontWeight: 'bold',
  },
  centerLine: {
    position: 'absolute',
    top: ITEM_HEIGHT * 2,
    width: '100%',
    height: ITEM_HEIGHT,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: 'blue',
    pointerEvents: 'none', // 터치 이벤트 무시
  },
});
