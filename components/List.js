import React from 'react';
import { View, StyleSheet } from 'react-native';
import DaftarTeman from './DaftarTeman';

const List = () => {
  return (
    <View style={styles.container}>
      <DaftarTeman 
        gambar={require("../assets/antony.jpeg")}
        judul="EL GASING"
        telpon="+44 7123 456 789"
      />
      <DaftarTeman 
        gambar={require("../assets/Mudryk.jpeg")}
        judul="El DEAR GOD"
        telpon="+49 1512 3456 789"
      />
       <DaftarTeman 
        gambar={require("../assets/Nunez.jpeg")}
        judul="MARMUT URUGUAY"
        telpon="+33 612 345 678"
      />
       <DaftarTeman 
        gambar={require("../assets/Ronaldo.jpeg")}
        judul="EL MANGROVE"
        telpon="+39 320 123 4567"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
});

export default List;