import React from 'react';

import { View,StyleSheet } from 'react-native';

const Ly = ({children}) => {
  return <View style={styles.contenedor}>{children}</View>
};
const styles = StyleSheet.create({
    contenedor:{
        backgroundColor:"#85929E",
        padding:20,
        flex:1,
        alignItems: "center",
    },
});
export default Ly;
