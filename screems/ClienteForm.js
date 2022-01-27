import { View, Text, TextInput ,StyleSheet,TouchableOpacity} from 'react-native';
import React ,{useState, useEffect}from 'react';
import Ly from "../components/Ly";
import { guardarR, getcliente, updatecliente} from "../api";

const ClienteForm = ({navigation, route}) => {

  const [clientes,setclientes]= useState({
    nombre:'',
    apellidos:'',
    edad:'',
    correo:'',
    nacionalidad:'',
    ci:'',
  })

  const [edit, setedit] = useState(false);
  const handleChange = (name,value) => setclientes({...clientes,[name]:value});

  const handleSubmit= async() => {
    if (!edit) {
      await guardarR(clientes)
      
    } else {
      await updatecliente(route.params.id, clientes)
    }
    navigation.navigate("Home")
  }
  

  useEffect(() => {
    if (route.params && route.params.id) {
      navigation.setOptions({headerTitle: 'Modificar Datos'});
      setedit(true);
      (async () => {
        const res = await getcliente(route.params.id);
        setclientes({nombre: res.nombre, apellidos:res.apellidos,edad:res.edad,correo:res.correo,nacionalidad:res.nacionalidad,ci:res.ci,});
        
      })();
    }
  },[])


  return (
    <Ly>
      
      <TextInput
      style={styles.inptu}
        placeholder="Nombre"
        onChangeText={(text)=> handleChange('nombre',text)}
        value={clientes.nombre}
      />
      <TextInput
      style={styles.inptu}
        placeholder="Apellido"
        onChangeText={(text)=> handleChange('apellidos',text)}
        value={clientes.apellidos}
      />
      
      <TextInput
      style={styles.inptu}
        placeholder="edad"
        onChangeText={(text)=> handleChange('edad',text)}
        value={clientes.edad.toString()}
      />
      
      <TextInput
      style={styles.inptu}
        placeholder="correo"
        onChangeText={(text)=> handleChange('correo',text)}
        value={clientes.correo}
      />
      
      <TextInput
      style={styles.inptu}
        placeholder="nacionalidad"
        onChangeText={(text)=> handleChange('nacionalidad',text)}
        value={clientes.nacionalidad}
      />
      
      <TextInput
      style={styles.inptu}
        placeholder="carnet de identidad"
        onChangeText={(text)=> handleChange('ci',text)}
        value={clientes.ci.toString()}
      />
      {
        !edit?(
      <TouchableOpacity style={styles.butonsave} onPress={handleSubmit}>
        <Text>Guardar Registro</Text>
      </TouchableOpacity>
        ):
        (
        <TouchableOpacity style={styles.butonup} onPress={handleSubmit}>
        <Text>Modificar Registro</Text>
      </TouchableOpacity>
        )}
      
    </Ly>
  );
};

const styles = StyleSheet.create({
  inptu:{
    width: "90%",
    marginBottom:5,
    borderWidth:2,
    textAlign: "center",
    padding:15,
    color: 'black',
    borderRadius:7,
    backgroundColor:'#dbdbdb'
    
  
  },
  butonsave:{
    width:"50%",
    marginTop:10,
    padding:10,
    borderWidth:2,
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius:5,
    backgroundColor: '#F7DCa1',

  },
  butonup:{
    width:"50%",
    marginTop:10,
    padding:10,
    borderWidth:2,
    alignItems: 'center',
    backgroundColor: '#c3c3c3',
    borderRadius:5,
    backgroundColor: '#F7DC6F',
  },
  ph:{ 
    textAlign: 'left',
  }

})
export default ClienteForm;
