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

const deviceHeight = Dimensions.get('screen').height;

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
            props.multiline && styles.multiLine,
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
      padding: deviceHeight > 700 ? 15 : 10,
    },
    multiLine: {
      paddingBottom: deviceHeight > 700 ? 45 : 30,
    },
    input: {
      fonts : getFontStyle('titleBody', 'small', 'medium'),
    } as TextStyle,
    innerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      gap: 5,
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
      fonts : getFontStyle('body', 'small', 'medium'),
      paddingTop: 5,
    }  as TextStyle,
  });

export default InputField;
