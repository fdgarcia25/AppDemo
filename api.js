
const API = 'http://192.168.1.16:3000/clientes'
const APIO = 'http://192.168.1.16:3000/clienteso'
const APIE = 'http://192.168.1.16:3000/clientese'



export const getclientes=async()=>{
const res = await fetch(API)
    return await res.json()
} 

export const guardarR = async(newcli)=>{
    const res = await fetch(API,{
        method: 'POST',
        headers: {Accept: 'application/json',
    'Content-Type': 'application/json'},
    body: JSON.stringify(newcli)
    })
    return await res.json() 
}

export const getclienteso =async()=>{
    const res = await fetch(APIO)
        return await res.json()
    }

    export const getclientese =async()=>{
        const res = await fetch(APIE)
            return await res.json()
        }

export const deletecliente = async(id)=>{
    await fetch(`${API}/${id}` ,{
        method: "DELETE "
    })
}

export const getcliente= async(id)=>{
    const res = await fetch(`${API}/${id}`);
    return await res.json();
}

export const updatecliente= async(id, newcli)=>{
    const res = await fetch(`${API}/${id}`,{
    method:'PUT',
    headers: {Accept: 'application/json',
    'Content-Type': 'application/json'},
    body: JSON.stringify(newcli)
    })
    return res;
}