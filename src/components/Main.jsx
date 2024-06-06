import React from 'react';
import { Routes, Route, Navigate } from 'react-router-native';
import { Text, View } from 'react-native';
import RepositoryList from './RepositoryList';
import AppBar from './AppBar';
import LogInPage from '../pages/Login';

const Main = () => {
  return (
    <View style={{ flex: 1 }}>
      <AppBar />
      <Routes>
        <Route path='/' element={<RepositoryList />} exact />
        <Route path='/signin' element={<LogInPage />} exact />
        <Route path='*' element={<Navigate to='/' />} />
      </Routes>
    </View>
  )
}

export default Main;