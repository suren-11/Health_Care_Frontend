// DoctorSearchBar.js
import React, { useState } from 'react';
import { Searchbar } from 'react-native-paper';

const DoctorSearchBar = ({ searchQuery,onSearchQueryChange, style }) => {

  return (
    <Searchbar
      placeholder="Search by name..."
      onChangeText={onSearchQueryChange}
      iconColor='lightblue'
      value={searchQuery}
      style={style}
    />
  );
};

export default DoctorSearchBar;
