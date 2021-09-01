import React from 'react'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
    container:{
        flex: 1,  justifyContent: 'center' 
    },
    hero: {
        fontSize: 40, alignSelf: 'center', marginBottom: 40
    },
    label:{
        fontSize: 20, marginLeft: 30, marginRight:30
    },
    input:{
        fontSize: 15, marginLeft:30, marginRight:30, marginBottom: 20
    },
    separator: {
        borderBottomColor: 'grey',
        borderBottomWidth: 1,
        marginLeft: 60,
        marginRight: 60,
        marginTop: 40,
        marginBottom: 40
    },
    centerElements:{
        alignItems: 'center'
    },
    adviseText: {
        color: 'blue', marginBottom: 20
    }
})