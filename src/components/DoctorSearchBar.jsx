// DoctorSearchBar.js
import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';

const DoctorSearchBar = ({ searchQuery,onSearchQueryChange, style , onClick}) => {

  return (
    <Searchbar
      placeholder="Search by name..."
      onChangeText={onSearchQueryChange}
      iconColor='#1C93F3'
      value={searchQuery}
      style={style}
      placeholderTextColor='#BDC3C7'
      onPressIn={onClick}
    />
  );
};

export default DoctorSearchBar;
