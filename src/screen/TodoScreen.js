import {StyleSheet, TextInput, Text, TouchableOpacity, View, FlatList, ScrollView} from 'react-native'
import React from 'react'
import {useState} from 'react';
import {IconButton, useTheme} from "react-native-paper";


const TodoScreen = () => {
    const [todoData,setTodoData]=useState("");
    const [editedid,setEditId]=useState(0);
    const [todoDataList,setTodoDataList]=useState([]);
    const [isEdit,setIsEdit]=useState(false);

    function handleAdd(){
        setTodoDataList([...todoDataList,{id:Date.now().toString(),title:todoData}])
        setTodoData("")
    }
    function handleDelete(id){
        const updatedListafterDel=todoDataList.filter((item)=>item.id !== id);
        setTodoDataList(updatedListafterDel)
    }
    function handleEdit(id){
        const Edited = todoDataList.find((item)=>item.id===id);
        setEditId(Edited.id);
        
        setTodoData(Edited.title);
        setIsEdit(true);
        
    }
    function handleEdited(){
        const editedone=todoDataList.filter(item=>item.id !== editedid)
        
        setTodoDataList([...editedone,{id:editedid,title:todoData}])
        setTodoData("")
        setIsEdit(false)
    }

    const renderTodos =({item,index})=>{
        return(
            <ScrollView>
                <View style={{
                    backgroundColor:"#1e90ff",
                    marginBottom:14,
                    borderWidth:2,
                    paddingHorizontal:2,
                    paddingVertical:10,
                    borderRadius:6,
                    marginHorizontal:5,
                    shadowOffset:{width:0,height:2},
                    shadowColor:"#000",
                    shadowOpacity:1,
                    flexDirection:"row",
                    alignItems:"center",
                    

                }}>
                    <Text style={{fontWeight:700,color:"#fff",fontSize:20}}>{item.title}</Text>
                    <View style={{flex:1,flexDirection:"row", margin:3, justifyContent:"flex-end"}}>
                        <IconButton icon="pencil" style={{backgroundColor:"#fff"}} onPress={()=>handleEdit(item.id)} />
                        <IconButton icon="trash-can"  style={{backgroundColor:"#fff"}} onPress={()=>handleDelete(item.id)}/>
                    </View>
                </View>
            </ScrollView>
        );
    };
    

    //return starts
    return (
        <View>
            <View style={{ marginVertical: 6}}>
                <TextInput style={{ borderWidth:2,
                        borderColor:"#1e90ff",
                        borderRadius:6,
                        paddingVertical:6,
                        paddingHorizontal:16,
                        marginHorizontal:6
                        }} 
                        placeholder="Add a task"
                        value={todoData}
                        onChangeText={(value)=>setTodoData(value)}
                        />
            </View>
            <View>
                {!isEdit?
                <TouchableOpacity style={{
                    borderWidth:2,
                    alignItems:"center",
                    backgroundColor:"green",
                    paddingVertical:6,
                    marginHorizontal:10,
                    borderRadius:6,
                    marginVertical:10,
                    marginBottom:20,
                    }}
                    onPress={handleAdd}
                  >
                    <Text style={{
                                fontSize:20,
                                color:"#fff",
                                fontWeight:600,
                            }}
                            
                            >Add</Text>
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={{
                        borderWidth:2,
                        alignItems:"center",
                        backgroundColor:"green",
                        paddingVertical:6,
                        marginHorizontal:10,
                        borderRadius:6,
                        marginVertical:10,
                        marginBottom:20,
                                }}
                                onPress={handleEdited}
                            >
                                <Text style={{
                                    fontSize:20,
                                    color:"#fff",
                                    fontWeight:600,
                                }}>Edit</Text> 
                            </TouchableOpacity>}
            </View>

            <Text style={{
                fontSize:20,
                fontWeight:900,
                alignItems:"center",
                marginHorizontal:25,
                marginVertical:10,
            }}
            >List of Tasks</Text>
            <View>
                <FlatList data={todoDataList} renderItem={renderTodos} keyExtractor={(item)=>item.id}/>
            </View>
            
      </View>
    )
}
export default TodoScreen;

const styles= StyleSheet.create({})



