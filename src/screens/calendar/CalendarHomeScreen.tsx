import React, { useState, useMemo } from 'react';
import { StyleSheet, Text, SafeAreaView, View } from 'react-native';
import Calendar from '../../components/calendar/Calendar';
import { getMonthYearDetails } from '../../../utils';
import EventList from '../../components/EventList';
import CustomButton from '../../components/CustomButton';
import { colors } from '../../constants/index';  

function CalendarHomeScreen() {
  const { year: initialYear, month: initialMonth, firstDOW: initialDay } = getMonthYearDetails();

  const [year, setYear] = useState(initialYear);
  const [month, setMonth] = useState(initialMonth);
  const [day, setDay] = useState(initialDay);

  const schedules = useMemo(() => ([
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
            style={{ flexWrap: 'nowrap', // 텍스트가 줄 바꿈되지 않도록 설정
            }} 
          />
      </View>

      <EventList posts={schedules} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  SelectDayText: {
    fontSize: 32,
    color: colors.BLACK,
    fontWeight: '600',
    margin: 10,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    margin: 10,
  },
});


export default CalendarHomeScreen;
