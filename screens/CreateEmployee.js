import React, {useState} from 'react'
import {View,StyleSheet, Modal,Alert,} from 'react-native'
import { TextInput,Button, } from 'react-native-paper'
import *as ImagePicker from 'react-native-image-picker'
import *as Permissions from 'react-native-permissions'

const CreateEmployee = ()=>{
const [Name,setName] = useState('')
const [Phone,setPhone] = useState('')
const [Email,setEmail] = useState('')
const [Salary,setSalary] = useState('')
const [Pic,setPic] = useState('')
const [modal,setModal] = useState(false)

const pickFromGallery = async ()=>{
    const {granted} = await Permissions.askAsync(Permissions.CAMERA_ROLL)
    if (granted){
        let data = await ImagePicker.launchImageLibraryAsync({
            mediaTypes:ImagePicker.mediaTypeOptions.Images,
            allowsEdditing:true,
            aspect:[1,1],
            quality:0.5
        })
        console.log(data)
    }else{
        Alert.alert('you need to need to ')
    }

}
const pickFromCamera = async()=>{
    const {granted} = await Permissions.askAsync(Permissions.CAMERA)
    if (granted){
        let data = await ImagePicker.launchCameraAsync({
            mediaTypes:ImagePicker.mediaTypeOptions.Images,
            allowsEdditing:true,
            aspect:[1,1],
            quality:0.5
        })
        console.log(data)
    }else{
        Alert.alert('you need to need to ')
    }

}

    return(
        <View style={Styles.root}>
           <TextInput
           style={Styles.inputStyle}
            label="Name"
            value={Name}
            mode='outlined'
            onChangeText={text => setName(text)}
           />
            <TextInput
           style={Styles.inputStyle}
            label="Email"
            value={Email}
            mode='outlined'
            onChangeText={text => setEmail(text)}
           />
            <TextInput
           style={Styles.inputStyle}
            label="Phone"
            value={Phone}
            mode='outlined'
            keyboardType='number-pad'
            onChangeText={text => setPhone(text)}
           />
            <TextInput
           style={Styles.inputStyle}
            label="Salary"
            value={Salary}
            mode='outlined'
            onChangeText={text => setSalary(text)}
           />
           <Button style={Styles.inputStyle}
           icon="upload" mode="contained" onPress={() => setModal(true)}>
              upload image
           </Button>
           <Button style={Styles.inputStyle}
           icon="content-save" mode="contained" onPress={() => setModal(true)}>
              save
           </Button>
           <Modal
           animationType = 'slide'
           transparent = {true}
           visible = {modal}
           onRequestClose={()=>{
               setModal(false)
           }}
           >
            <View style={Styles.modalView}>
                <View style = {Styles.modalButtonView}>
                   <Button icon="camera" mode="contained" onPress={() => pickFromCamera()}>
                     camera
                   </Button>
                   <Button icon="image-area" mode="contained" onPress={() => pickFromGallery()}>
                     gallery
                   </Button>
              </View>
                   <Button onPress={() => setModal(false)}>
                     cancel
                   </Button>
            </View>
           </Modal>
        </View>

    )
}

const Styles = StyleSheet.create({
    root:{
        flex:1,
    },
    inputStyle:{
        margin:5
    },
    modalButtonView:{
        flexDirection:'row',
        justifyContent:'space-around',
        padding:10   
    },
    modalView:{
        position:'absolute',
        bottom:2,
        width:'100%',
        backgroundColor:'white'

    }
})

export default CreateEmployee;