import { View, Text ,StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import { useNavigation } from "@react-navigation/native";

const ClienteItem = ({clientes, handledelete}) => {

  const navigation = useNavigation()

  return (
    <View style={styles.itemcontenedor}>
      <TouchableOpacity onPress={()=> navigation.navigate('form',{id: clientes.id})}> 
      <Text>Nombre: {clientes.nombre}</Text>
      <Text>Apellidos: {clientes.apellidos}</Text>
      <Text>Edad: {clientes.edad}</Text>
      <Text>Nacionalidad: {clientes.nacionalidad}</Text>
      <Text>Correo: {clientes.correo}</Text>
      </TouchableOpacity>

      <TouchableOpacity style={{backgroundColor:'#F7DC6F', padding:15, borderRadius:10, borderWidth:1}}
      onPress={()=> handledelete(clientes.id)}>
        <Text>Eliminar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
    itemcontenedor:{
        backgroundColor: '#D6DBDF',
        padding:10,
        marginVertical:8,
        borderWidth:2,
        flexDirection:'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    }
})

export default ClienteItem;
