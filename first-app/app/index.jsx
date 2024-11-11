import React, { useState } from 'react'
import { View ,Text, StyleSheet,TextInput,Image,ImageBackground,ScrollView, Button} from 'react-native'
export default function index() {
    const [hi,setHi]=useState(false)
  return (
    <View style={styles.container}>
      <Text style={{color:"red",fontWeight:"black"}}>
        {hi?"hi":"Bye"}
      </Text>
      {/* <View  style={{height:200,width:200,backgroundColor:"red",borderRadius:10,margin:'auto'}}>
            
      </View>
      <View style={{height:200,width:200,backgroundColor:"black",borderRadius:10,margin:'auto'}}>
            
      </View> */}
      {/* <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXAcnhgqQLGFpyELYiiYYZID-4a0cgiH0gvA&s'}} style={{height:100,width:200}}/> */}
        <ImageBackground source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXAcnhgqQLGFpyELYiiYYZID-4a0cgiH0gvA&s'}}>
            <Text style={{color:"white"}}>I don't Know what is this</Text>
        </ImageBackground>
        <ScrollView style={{height:30,width:200}}>
        <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad tempora provident placeat harum nihil nam facilis odio animi in, iusto eum. Porro doloribus ea alias assumenda laborum deleniti possimus temporibus?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti excepturi maiores molestiae eum aut iure iste cumque impedit harum doloribus optio, sapiente quo quisquam odit deleniti temporibus eius culpa odio.
            Soluta ea cupiditate iure dolor, voluptatibus possimus aliquam tenetur sit quibusdam fugit ullam accusantium quisquam quidem expedita enim consequatur, ratione ducimus, repellat aut natus. Tempore, a! Impedit tempora placeat sapiente.
            Ratione eos quam est veniam tenetur iste cupiditate, repellat beatae iusto incidunt placeat tempore quae quaerat, magnam dolorum earum eius a consequatur, dicta architecto. Consectetur, voluptatibus dolores. Dolores, quae eaque?
            Quaerat et minima harum nemo magnam minus tenetur optio sunt quo animi, numquam, provident iure ipsam blanditiis ab cum error cupiditate dolores, natus rem nisi. Recusandae quae aut itaque neque.
            Placeat rem nisi id quia voluptatibus magnam mollitia corrupti earum natus, labore eius velit cum aliquam error dolorum optio nesciunt maxime libero at eos vel inventore fugit quo quos? Assumenda?
        </Text>
        </ScrollView>
        <Button title='Click me' onPress={()=>{
            console.log("button clicked")
            setHi(!hi)
        }} color={'midnightblue'} disabled={hi}/>
    </View>
  )
}
const styles=StyleSheet.create({
    container:{
        backgroundColor:"white",
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column"
    }
})