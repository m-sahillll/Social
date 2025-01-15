import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { LinearGradient } from 'expo-linear-gradient'
import InputBox from '@/components/InputBox'
import CustomButton from '@/components/CustomButton'
import CustomButton2 from '@/components/CustomButton2'
import { AppColor } from '@/utils/AppColor'
import { useNavigation } from '@react-navigation/native'

const SignUpNumber = () => {
   const navigation = useNavigation();
  return (
    
    <View style={{paddingHorizontal:20}}>
        <LinearGradient
              locations={[0.1, 1]}
              start={{ x: 0, y: 0.1 }}
              end={{ x: 1, y: 0.2 }}
              colors={["#fef4f5", "#edf6ff"]}
              style={style.background}
            />
      <Text style={style.MobNo}>What's your mobile number ?</Text>
      <Text style={style.text}>Enter the mobile number where you can be contacted. No one will see this on your profile.</Text>
      <InputBox 
      keyboardType='phone-pad'
       placeholder='Mobile number'/>
       <Text style={style.text2}>You may recieve WhatsApp and SMS notifications from us for security and login purposes.</Text>
       <CustomButton 
       onPress={() => console.info("Button Pressed")}
       style={{marginTop :20}}
        buttonTitle={"Next"}/>
        <CustomButton2 
        onPress={() => navigation.navigate("SignUpEmail")}
        style={{marginTop :20,}}
        buttonTitle={"Sign up with email"}/>
             <View style={{marginTop:335}}>
              <TouchableOpacity 
               onPress={() => navigation.navigate("Login")}
              style={{alignSelf:'center'}}>
               
               <Text style={style.HaveAcc}>I already have an account</Text> 
               </TouchableOpacity>
               </View>
    </View>
  )
}

export default SignUpNumber


const style=StyleSheet.create ({
  background: {
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 800,
  },
  MobNo :{
  marginTop: 100,
  fontWeight: "bold",
  fontSize: 23,

  },
  text :{
    marginTop: 15,
    opacity: 0.9,
  },

  text2 :{
    marginTop: 10,
    opacity: 0.6,
    fontSize:12,
  },


  HaveAcc :{
    fontWeight:600,
    color: AppColor.BUTTON,
   
  }

})