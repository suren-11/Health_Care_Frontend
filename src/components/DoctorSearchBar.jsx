// DoctorSearchBar.js
import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';

const DoctorSearchBar = ({ searchQuery,onSearchQueryChange, style , onClick}) => {

  return (
    <Searchbar
      placeholder="Search by name..."
      onChangeText={onSearchQueryChange}
      iconColor='lightblue'
      value={searchQuery}
      style={style}
      onPressIn={onClick}
    />
  );
};

export default DoctorSearchBar;
