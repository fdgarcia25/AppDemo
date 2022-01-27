
import React,{useState, useEffect} from 'react';
import {Text, FlatList, RefreshControl } from 'react-native';
import ClienteItem from "./ClienteItem";

import { getclientes } from "../api";
import { getclienteso, deletecliente, getclientese } from "../api";
import { useIsFocused } from "@react-navigation/native";

const ClienteList = () => {
  const[clientes, setclientes] = useState([])
  const[refreshing, setrefreshing] = useState(false)

  const cargarclientes= async()=> {
    const data = await getclientes()
    setclientes(data)
  }
  const isFocused = useIsFocused();
  
  useEffect(() =>{
    cargarclientes()
  },[isFocused])

  const handledelete=async (id)=> {
    await deletecliente(id);
    await cargarclientes()

  }
    const render =({item}) =>{
        return <ClienteItem clientes={item} handledelete={handledelete}/>;
    }
const onrefresh = React.useCallback( async() =>{
  setrefreshing(true);
  await cargarclientes();
  setrefreshing(false);
})

  return (
    <FlatList style={{width: '100%'}}
        data={clientes}
        keyExtractor={(item)=> item.id }
        renderItem={render}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onrefresh}
          />
         }
      />
  );
};
 
export default ClienteList;

