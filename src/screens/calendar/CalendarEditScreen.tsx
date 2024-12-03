import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet, FlatList } from 'react-native';
import DateTimePickerModal from 'react-native-modal-datetime-picker';
import ScrollWheelPicker from '../../components/ScrollWheelPicker';
import { colors, margins } from '../../constants';

export default function CalendarEditScreen() {
  interface Schedule {
    content: string;
    id: number;
    time: string;
    title: string;
    day: string; 
  }

  const [schedules, setSchedules] = useState<Schedule[]>([
    {
      content: '프로젝트 마감',
      id: 1,
      time: '5:00 PM',
      title: '업무 일정',
      day: '2024-12-10',
    },
    {
      content: '친구 생일',
      id: 2,
      time: 'All Day',
      title: '생일 파티',
      day: '2024-12-20',
    },
    {
      content: '미팅',
      id: 3,
      time: '10:00 AM',
      title: '업무 미팅',
      day: '2024-12-30',
    },
  ]);

  const [editedSchedule, setEditedSchedule] = useState<Schedule | null>(null);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);

  const handleEdit = (schedule: Schedule) => {
    setEditedSchedule(schedule);
    const day = parseInt(schedule.day.split('-')[2]);
    setSelectedDay(day);
  };

  const handleSave = () => {
    if (editedSchedule) {
      setSchedules((prevSchedules) =>
        prevSchedules.map((schedule) =>
          schedule.id === editedSchedule.id ? editedSchedule : schedule
        )
      );
      setEditedSchedule(null);
      setSelectedDay(null); 
    }
  };

  const handleDayChange = (day: number) => {
    setSelectedDay(day);
    setEditedSchedule((prev) =>
      prev
        ? { ...prev, day: `${prev.day.split('-')[0]}-${prev.day.split('-')[1]}-${day.toString().padStart(2, '0')}` }
        : null
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>일정 수정</Text>
      <FlatList
        data={schedules}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.scheduleItem}>
            <Text style={styles.scheduleText}>
              {item.day} | {item.time} | {item.title} - {item.content}
            </Text>
            <Button
              title="수정"
              color={colors.LIGHT_GREEN}
              onPress={() => handleEdit(item)}
            />
          </View>
        )}
      />
      {editedSchedule && (
        <View style={styles.editContainer}>
          <Text style={styles.editHeader}>선택된 일정 수정</Text>

          <View style={styles.editContent}>
          <ScrollWheelPicker
            data={Array.from({ length: 31 }, (_, i) => i + 1)}
            onValueChange={handleDayChange}
            selectedValue={selectedDay || 1}
          />
          <ScrollWheelPicker
            data={Array.from({ length: 31 }, (_, i) => i + 1)}
            onValueChange={handleDayChange}
            selectedValue={selectedDay || 1}
          />
          
          <ScrollWheelPicker
            data={Array.from({ length: 31 }, (_, i) => i + 1)}
            onValueChange={handleDayChange}
            selectedValue={selectedDay || 1}
          />
          </View>

          <TextInput
            style={styles.input}
            placeholder="제목"
            value={editedSchedule.title}
            onChangeText={(text) =>
              setEditedSchedule({ ...editedSchedule, title: text })
            }
          />
          <TextInput
            style={styles.input}
            placeholder="내용"
            value={editedSchedule.content}
            onChangeText={(text) =>
              setEditedSchedule({ ...editedSchedule, content: text })
            }
          />
          <View style={styles.buttonContainer}>
            <Button title="저장" color={colors.GREEN} onPress={handleSave} />
            <Button
              title="취소"
              color={colors.LIGHT_RED}
              onPress={() => {
                setEditedSchedule(null);
                setSelectedDay(null);
              }}
            />
          </View>
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: margins.M16,
    backgroundColor: colors.LIGHT_GRAY,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.GREEN,
    marginBottom: margins.M20,
  },
  scheduleItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: margins.M16,
    backgroundColor: colors.WHITE,
    borderRadius: 8,
    marginBottom: margins.M8,
    borderColor: colors.GRAY,
    borderWidth: 1,
  },
  scheduleText: {
    flex: 1,
    fontSize: 16,
    color: colors.BLACK,
  },
  editContainer: {
    padding: margins.M16,
    backgroundColor: colors.WHITE,
    borderRadius: 8,
    marginTop: margins.M20,
  },
  editHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: margins.M12,
  },
  editContent: {
    flexDirection: 'row', // 가로로 나열되도록 설정
    width: '100%',
  },
  
  input: {
    height: 40,
    borderColor: colors.GRAY,
    borderWidth: 1,
    borderRadius: 4,
    marginBottom: margins.M12,
    paddingHorizontal: margins.M8,
    justifyContent: 'center',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: margins.M16,
  },
});
