import React from 'react';
import { View, Button, StyleSheet } from 'react-native';
import { Formik, useField } from 'formik';

import StyledTextInput from '../components/StyledTextInput';
import StyledText from '../components/StyledText';
import { loginValidationSchema } from '../vallidationSchemas/login';

const initialValues = {
  email: '',
  password: ''
}

const styles = StyleSheet.create({
  form: {
    margin: 12
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 20,
    marginTop: -5
  }
});

const FormikInputValue = ({ name, ...props }) => {
  const [field, meta, helpers] = useField(name);
  return (
    <>
      <StyledTextInput
        value={field.value}
        error={meta.error}
        onChangeText={value => helpers.setValue(value)}
        {...props}
      />
      {(meta.error) && (
        <StyledText style={styles.error}>{meta.error}</StyledText>
      )}
    </>
  )
}

export default function LogInPage () {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={values => console.log(values)}
      validationSchema={loginValidationSchema}
    >
      {({ handleSubmit }) => {
        return (
          <View style={styles.form}>
            <FormikInputValue
              placeholder="Email"
              name="email"
            />
            <FormikInputValue
              placeholder="Password"
              name="password"
              secureTextEntry
            />
            <Button title="Log In" onPress={handleSubmit} />
          </View>
        )
      }}
    </Formik>
  )
}