import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import {View,Text,StyleSheet,Image,FlatList } from 'react-native'
import { Card } from 'react-native-paper'
import { FAB } from 'react-native-paper'
const Home = ({navigation})=>{
    const data = [
        {id:1,name:'Mukesh',position:'web developer',salary:'?LPA',email:'abc@abc.com',phone:'1234567890',image:'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'},
        {id:2,name:'Ravi',position:'React-Native developer',salary:'?LPA',email:'dravitiwari10@gmail.com',phone:'6394225187',image:'https://instagram.fknu1-2.fna.fbcdn.net/v/t51.2885-19/s150x150/156643313_490147785437992_6275371468126351986_n.jpg?tp=1&_nc_ht=instagram.fknu1-2.fna.fbcdn.net&_nc_ohc=N7NbR4eb7CsAX_DH--n&edm=ABfd0MgBAAAA&ccb=7-4&oh=a7a6be89227c34614e4dcec10970d670&oe=60E26681&_nc_sid=7bff83'},
        {id:3,name:'Abhay',position:'web developer',salary:'?LPA',email:'abc@abc.com',phone:'1234567890',image:'https://images.unsplash.com/flagged/photo-1570612861542-284f4c12e75f?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80'},
        {id:4,name:'Harry',position:'web developer',salary:'?LPA',email:'abc@abc.com',phone:'1234567890',image:'https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'},
        // {id:5,name:'Mukesh kumar',position:'web-dev'},
        // {id:6,name:'Ravi Shankar',position:'react-dev'},
        // {id:7,name:'Abhay Raj',position:'android-dev'},
    ]
    const renderList = ((item)=>{
        return(
            <Card onPress = {()=>navigation.navigate('Profile',{item})}
            style={Styles.myCard}>
                <View style={Styles.cardView}>
                    <Image
                    style={{width:60,height:60,borderRadius:60/2}}
                    source={{uri:item.image}}
                    />
                <View style={{marginLeft:10}}>
                    <Text style={Styles.text}>{item.name}</Text>
                    <Text style={Styles.text}>{item.position}</Text>
                </View>
                </View>
            </Card>
        )
    })
    return(
        <View style={{flex:1}}>
            <FlatList 
            data={data}
            renderItem={({item})=>{
                return renderList(item)
            }}
            />
            <FAB onPress = {() => navigation.navigate('Employee')}
                style={Styles.fab}
                large
                icon="plus"
           />
        </View>    
    )
}

const Styles = StyleSheet.create({
    myCard:{
        margin:5,
        padding:5,
    },
    cardView:{
        flexDirection:'row',
        padding:6
    },
    text:{
        fontSize:20,
        marginLeft:10
        
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
      },
})

export default Home;