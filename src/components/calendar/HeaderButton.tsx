import React, { ReactNode } from 'react';
import { Pressable, PressableProps, StyleSheet, Text, TextStyle } from 'react-native';
import { colors, getFontStyle, spacing } from '../../constants/index';

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
      paddingHorizontal: spacing.M32,
    },
    text: {
      ... getFontStyle('titleBody', 'small', 'bold'),
      color: colors.RED,
    } as TextStyle,
    textError: {
      color: colors.GRAY,
    },
  });

export default HeaderButton;
