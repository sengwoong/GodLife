import React, { ReactNode } from 'react';
import { Pressable, PressableProps, StyleSheet, Text } from 'react-native';
import { colors } from '../../constants/index';

interface HeaderButtonProps extends PressableProps {
  labelText?: string;
  icon?: ReactNode;
  hasError?: boolean;
}

function HeaderButton({
  labelText,
  icon,
  hasError = false,
  ...props
}: HeaderButtonProps) {
  const styles = styling();

  return (
    <Pressable disabled={hasError} style={styles.container} {...props}>
      {!labelText && icon}
      {!icon && labelText && (
        <Text style={[styles.text, hasError && styles.textError]}>
          {labelText}
        </Text>
      )}
    </Pressable>
  );
}

const styling = () =>
  StyleSheet.create({
    container: {
      height: '100%',
      alignItems: 'flex-end',
      justifyContent: 'center',
      paddingHorizontal: 30,
    },
    text: {
      fontSize: 15,
      fontWeight: '500',
      color: colors.RED,
    },
    textError: {
      color: colors.GRAY,
    },
  });

export default HeaderButton;
