import React, {Component} from 'react';
import {Text, View, StyleSheet, StatusBar, Platform, Alert, SafeAreaView} from 'react-native';
import MapView from 'react-native-maps'
import axios from 'axios'



export default class Hosmap extends Component{
    constructor(props){
        super(props);
        this.state={
            location:{},
        }
    }
    componentDidMount(){
        this.getIssLocation()
    }
    getIssLocation=()=>{
        axios
        .get('https://api.wheretheiss.at/v1/satellites/25544')
        .then(response=>{
            this.setState({location:response.data})
        })
        .catch(error=>{
            Alert.alert(error.message)
        })
    }

    render(){
        if(Object.keys(this.state.location).length===0){
            return(
                <View 
                style={{
                    flex:1,
                    justifyContent:'center',
                    alignItems:'center'
                }}
                >
                    <Text>loading</Text>

                </View>
            )
        }
        else{
            return(
                <View style={styles.container}>
                    <SafeAreaView style={styles.droidSafeArea}/>
                    <View style={styles.titleContainer}>
                        <Text style={styles.titleText}>Hospital Location</Text>
                    </View>
                            <View style={styles.mapContainer}>
                                <MapView style={styles.map}
                                region={{
                                    latitude:this.state.location.latitude,
                                    longitude:this.state.location.longitude,
                                    latitudeDelta:100,
                                    longitudeDelta:100
                                }}></MapView>
                            </View>
                </View>
            )}
    }
}
const styles=StyleSheet.create({
    container:{
        flex:1
    },
    droidSafeArea:{
        marginTop:Platform.OS==='android'?StatusBar.currentHeight:0
    },
    titleContainer:{
        flex:0.1,
        justifyContent:'center',
        alignItems:'center'
    },
    titleText:{
        fontSize:30,
        fontWeight:'bold',
        color:'white'
    },
    mapContainer:{
        flex:0.7,


    },
    map:{
        width:'100%',
        height:'100%'

    }
})