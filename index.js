import { StyleSheet,Text,View } from "react-native";
import React from "react";
import {Link} from 'expo-router';
import Navigation from './Navigation'; 

const index =() => {
    return (
        <View>
            <Text>index</Text>
            <Link href ="/login">Go To Loginpage</Link>
            
        </View>
            
    )
}
export default index
const styles = StyleSheet.create({})