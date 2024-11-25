import React, { useState, useEffect } from 'react';
import { FlatList, StyleSheet, View, Pressable, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import DayOfWeeks from './DayOfWeeks';
import DateBox from './DateBox';
import YearSelector from './YearSelector';
import CalendarHomeHeaderRight from './CalendarHomeHeaderRight';
import { colors } from '../../constants'; // 필요한 색상 값 가져오기
import { isSameAsCurrentDate, MonthYear } from '../../../utils';

interface CalendarProps<T> {
  monthYear: MonthYear;
  selectedDate: number;
  schedules: Record<number, T[]>;
  onPressDate: (date: number) => void;
  onChangeMonth: (increment: number) => void;
  onChangeYear: (selectYear: number) => void;
  moveToToday: () => void;
}

function Calendar<T>({
  monthYear,
  selectedDate,
  schedules,
  onPressDate,
  onChangeMonth,
  onChangeYear,
  moveToToday,
}: CalendarProps<T>) {

  const { lastDate, firstDOW, year, month } = monthYear;
  const navigation = useNavigation();

  const [yearSelector, setYearSelector] = useState({ isVisible: false });

  useEffect(() => {
    navigation.setOptions({
      headerRight: () => <CalendarHomeHeaderRight onPress={moveToToday} />,
    });
  }, [moveToToday, navigation]);

  return (
    <View style={styles.calendarContainer}>

      <View style={styles.headerContainer}>

        <Pressable style={styles.monthYearContainer} onPress={() => setYearSelector({ isVisible: true })}>
          <Text style={styles.titleText}>{year}년 {month}월</Text>
        </Pressable>  

        <View style={styles.monthButtonContainer}>
        <Pressable onPress={() => onChangeMonth(-1)} style={styles.monthButton}>
          <Text>prev</Text>
        </Pressable>
        <Pressable onPress={() => onChangeMonth(1)} style={styles.monthButton}>
          <Text>next</Text>
        </Pressable>
        </View>   

      </View>

      {/* 요일 표시 */}
      <DayOfWeeks />

      {/* 날짜 목록 및 스케줄 */}
      <View style={styles.bodyContainer}>
        <FlatList
          data={Array.from({ length: lastDate + firstDOW }, (_, i) => ({
            id: i,
            date: i - firstDOW + 1,
          }))}
          renderItem={({ item }) => (
            <View>
              
              <DateBox
                date={item.date}
                isToday={isSameAsCurrentDate(year, month, item.date)}
                hasSchedule={Boolean(schedules[item.date])}
                selectedDate={selectedDate}
                onPressDate={onPressDate}
              />
            </View>
          )}
          keyExtractor={item => String(item.id)}
          numColumns={7}
        />
      </View>

      {/* 연도 선택기 */}
      <YearSelector
        isVisible={yearSelector.isVisible}
        currentyear={year}
        onChangeYear={onChangeYear}
        hide={() => setYearSelector({ isVisible: false })}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  calendarContainer: {
    backgroundColor: colors.WHITE, // 캘린더 배경색
    borderRadius: 10, // 모서리를 둥글게 (선택 사항)
    shadowColor: colors.BLACK, // iOS 그림자 색상
    shadowOffset: { width: 0, height: 2 }, // iOS 그림자 방향
    shadowOpacity: 0.2, // iOS 그림자 투명도
    shadowRadius: 4, // iOS 그림자 번짐 정도
    elevation: 6, // Android 그림자 높이
  
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginHorizontal: 25,
    marginVertical: 16,
  },
  monthYearContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  monthButtonContainer: {
    flexDirection: 'row',
  },
  monthButton: {
    padding: 10,
  },
  titleText: {
    fontSize: 18,
    fontWeight: '500',
    color: colors.BLACK,
  },
  bodyContainer: {
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.WHITE,
    backgroundColor: colors.WHITE,
  },
  
});

export default Calendar;