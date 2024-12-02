import React, { useState, useMemo } from 'react';
import { StyleSheet, Text, SafeAreaView, View, TextStyle, Button } from 'react-native';
import Calendar from '../../components/calendar/Calendar';
import { getMonthYearDetails } from '../../../utils';
import EventList from '../../components/EventList';
import CustomButton from '../../components/CustomButton';
import { calendarNavigations, colors, getFontStyle } from '../../constants/index';  
import { CompositeNavigationProp, useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { calendarStackParamList } from '../../navigations/stack/CalendarStackNavigator';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { MainDrawerParamList } from '../../navigations/drawer/MainDrawerNavigator';


type Navigation = CompositeNavigationProp<
  StackNavigationProp<calendarStackParamList>,
  DrawerNavigationProp<MainDrawerParamList>
>;

function CalendarHomeScreen() {
  const { year: initialYear, month: initialMonth, firstDOW: initialDay } = getMonthYearDetails();
  const navigation = useNavigation<Navigation>();

  const [year, setYear] = useState(initialYear);
  const [pressItem,setPressItem] = useState(0);
  const [month, setMonth] = useState(initialMonth);
  const [day, setDay] = useState(initialDay);
  interface Schedule {
    content: string;
    id: number;
    time: string;
    title: string;
    day: number;
  }
  const schedules = useMemo<Schedule[]>(() => ([
    {"content": "프로젝트 마감 wafqfqwfqwfqwfqwfqwfqwfqwfqwfweghaewrgfhdfoiqwdoiwgawegwaegkphnewaknglkawenglknlwakegnlkwanglkwnalkgenlkwaengklwaenglkwaneg", "id": 20, "time": "5:00 PM", "title": "asdasd","day":10},
     {"content": "친구 생일qwfoiphqwhfiqwoipfqhwipfhnqpie;ofhw;ahf;oipuauehf;opiwaeoifhwahfoiphewoiheoiewajhnflokwalkfwaefhjlk", "id": 30, "time": "All Day", "title": "asdasd","day":20},
      {"content": "미팅", "id": 10, "time": "10:00 AM", "title": "asdasd","day":30}
    ]), []);

  const monthYear = useMemo(() => {
    const lastDate = new Date(year, month, 0).getDate();
    const firstDOW = new Date(year, month - 1, 1).getDay();
    const startDate = new Date(year, month - 1, 1); 
    return { year, month, lastDate, firstDOW, startDate };
  }, [year, month]);

  const onChangeMonth = (increment: number) => {
    let newMonth = month + increment;
    let newYear = year;

    if (newMonth > 12) {
      newMonth = 1;
      newYear += 1;
    } else if (newMonth < 1) {
      newMonth = 12;
      newYear -= 1;
    }

    setMonth(newMonth);
    setYear(newYear);
  };

  const onChangeYear = (selectYear: number) => {
    setYear(selectYear)
  };

  const onChangePressItem = (itemindex: number) => {
    navigation.navigate(calendarNavigations.CALENDAREDIT, {calendaritemIndex: itemindex});
  };

  

  const moveToToday = () => {
    const { year, month, firstDOW } = getMonthYearDetails();
    setYear(year);
    setMonth(month);
    setDay(firstDOW);
  };

  return (
    <SafeAreaView style={styles.container}>

      <Calendar
        monthYear={monthYear} 
        selectedDate={day} 
        schedules={schedules}
        onPressDate={(date) => setDay(date)}
        onChangeYear={onChangeYear}
        onChangeMonth={onChangeMonth} 
        moveToToday={moveToToday} 
      />

      <View style={styles.rowContainer}>
        <Text style={styles.SelectDayText}>{day}일 할일</Text>
        <CustomButton 
            size='text_size' 
            label='생성하기' 
            color='BLACK' 
            shape='rounded' 
            style={{ flexWrap: 'nowrap'  }} 
          />
      </View>

      <EventList posts={schedules} onChangePressItem={onChangePressItem} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  SelectDayText: {
    ... getFontStyle('display', 'small', 'bold'),
    color: colors.BLACK,
    margin: 10,
  } as TextStyle,
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
});


export default CalendarHomeScreen;
