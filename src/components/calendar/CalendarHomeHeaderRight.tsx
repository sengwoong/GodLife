import React from 'react';
import HeaderButton from './HeaderButton';


interface CalendarHomeHeaderRightProps {
  onPress: () => void;
}

function CalendarHomeHeaderRight({ onPress }: CalendarHomeHeaderRightProps) {
  return <HeaderButton labelText="오늘" onPress={onPress} />;
}

export default CalendarHomeHeaderRight;