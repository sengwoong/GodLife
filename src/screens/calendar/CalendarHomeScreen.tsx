import React, { useState, useMemo } from 'react';
import { StyleSheet, Text, SafeAreaView } from 'react-native';
import Calendar from '../../components/calendar/Calendar';
import { getMonthYearDetails } from '../../../utils';

function CalendarHomeScreen() {
  const { year: initialYear, month: initialMonth, firstDOW: initialDay } = getMonthYearDetails();

  const [year, setYear] = useState(initialYear);
  const [month, setMonth] = useState(initialMonth);
  const [day, setDay] = useState(initialDay);

  const schedules = useMemo(() => ({
    '30': [{ event: '미팅', time: '10:00 AM', id: 10 }],
    '1': [{ event: '프로젝트 마감', time: '5:00 PM', id: 20 }],
    '2': [{ event: '친구 생일', time: 'All Day', id: 30 }],
  }), []);

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
      <Text style={styles.mapText}>스크린</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  mapText: {
    fontSize: 16,
    textAlign: 'center',
    margin: 10,
  },
});

export default CalendarHomeScreen;
