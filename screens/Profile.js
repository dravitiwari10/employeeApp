import React, {useState} from 'react'
import {View,Text,StyleSheet, Image,Linking,Platform, } from 'react-native'
import  LinearGradient  from 'react-native-linear-gradient'
import { Title,Card ,Button} from 'react-native-paper'
import  Icon  from 'react-native-vector-icons/MaterialIcons'


const Profile = (props)=>{
const {id,name,salary,email,position,phone,image} = props.route.params.item


    const openDial = ()=>{
            if (Platform.OS==='android'){
                Linking.openURL('tel:6394225187')
            }else{
                Linking.openURL('telprompt:6394225187')
            }
    }
    return(
        <View style={Styles.root}>
            <LinearGradient
            colors={['#0033ff','#6bc1ff']}
            style={{height:'20%'}}
            />
            <View style={{alignItems:'center'}}>
            <Image
            style={{width:140,height:140,borderRadius:140/2,marginTop:-50}}
            source={{uri:image}}
            /> 
            </View>
            <View style={{alignItems:'center'}}>
                <Title>{name}</Title>
                <Text style={Styles.myText}>{position}</Text>
            </View>
           <Card style={Styles.mycard} onPress={()=> {
               Linking.openURL('mailto:dravitiwari10@gmail.com')
           }}>
               <View style={Styles.cardContent}>
                   <Icon name='email' size={32} color = 'blue'/>
                   <Text style={Styles.myText}>{email}</Text>
               </View>
           </Card>
           <Card style={Styles.mycard} onPress={()=> openDial()}>
               <View style={Styles.cardContent}>
                   <Icon name='phone' size={32} color = 'blue'/>
                   <Text style={Styles.myText}>{phone}</Text>
               </View>
           </Card>
           <Card style={Styles.mycard}>
               <View style={Styles.cardContent}>
                   <Icon name='attach-money' size={32} color = 'blue'/>
                   <Text style={Styles.myText}>{salary}</Text>
               </View>
           </Card>
           <View style={{flexDirection:'row',justifyContent:'space-around',padding:5}}>
            <Button style={Styles.inputStyle}
                 icon="account-edit" mode="contained" onPress={() => console.log('button pressed')}>
                 press me
            </Button>
            <Button style={Styles.inputStyle}
                icon="delete" mode="contained" onPress={() => console.log('button pressed')}>
                fire employee
            </Button>
                
           </View>
        </View>

    )
}

const Styles = StyleSheet.create({
    root:{
        flex:1,
    },
    mycard:{
        margin:3
    },
    cardContent:{
       flexDirection:'row',
       padding:8
    },
    myText:{
        fontSize:18,
        marginTop:3,
        marginLeft:5,

    }
})

export default Profile;