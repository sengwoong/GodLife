import React, {ForwardedRef, ReactNode, forwardRef, useRef} from 'react';
import {
  Dimensions,
  StyleSheet,
  TextInput,
  View,
  TextInputProps,
  Text,
  Pressable,
  TextStyle,
} from 'react-native';

import { mergeRefs } from '../../utils/common';
import { colors, getFontStyle } from '../constants'; 

interface InputFieldProps extends TextInputProps {
  disabled?: boolean;
  error?: string;
  touched?: boolean;
  icon?: ReactNode;
}


const InputField = forwardRef(
  (
    {disabled = false, error, touched, icon = null, ...props}: InputFieldProps,
    ref?: ForwardedRef<TextInput>,
  ) => {

    const styles = styling();
    const innerRef = useRef<TextInput | null>(null);

    const handlePressInput = () => {
      innerRef.current?.focus();
    };

    return (
      <Pressable onPress={handlePressInput}>
        <View
          style={[
            styles.container,
            disabled && styles.disabled,
            touched && Boolean(error) && styles.inputError,
          ]}>
          <View style={Boolean(icon) && styles.innerContainer}>
            {icon}
            <TextInput
              ref={ref ? mergeRefs(innerRef, ref) : innerRef}
              editable={!disabled}
              placeholderTextColor={colors.GRAY}
              style={[styles.input, disabled && styles.disabled]}
              autoCapitalize="none"
              spellCheck={false}
              autoCorrect={false}
              {...props}
            />
          </View>
          {touched && Boolean(error) && (
            <Text style={styles.error}>{error}</Text>
          )}
        </View>
      </Pressable>
    );
  },
);

const styling = () =>
  StyleSheet.create({
    container: {
      borderWidth: 1,
      borderColor: colors.GRAY,
    },
    input: {
      ... getFontStyle('titleBody', 'small', 'medium'),
    } as TextStyle,
    innerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    disabled: {
      backgroundColor: colors.GRAY,
      color: colors.GRAY,
    },
    inputError: {
      borderWidth: 1,
      borderColor: colors.RED,
    },
    error: {
      color: colors.RED,
      ... getFontStyle('body', 'small', 'medium'),
      paddingTop: 5,
    }  as TextStyle,
  });

export default InputField;