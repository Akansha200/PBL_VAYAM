import React from 'react';
import { View,Text,StyleSheet,Button } from 'react-native';
 
import Header from '../components/mainHeader'

const StartAppScreen = props =>{

    return(
        <View style={styles.container}>
            <View>
                <Text style={styles.title}>VAYAM</Text>
                <Text style={styles.tagline}>A new system to get the best healthcare</Text>
                <Text style={styles.taglines}>Chosen for Excellence!!</Text>
            </View>
            <View style={styles.btn}>
                <Button style={styles.btnInner} color="#2d6187" title="HOSPITAL" onPress={() => props.hospitalButton(1)}/>
                <Button style={styles.btnInner} color="#2d6187"  title="FAMILY" onPress={() => {}} />
            </View>
            
        </View>
    );

}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems:'center',
      backgroundColor: '#FAD5AD'
    },
    title: {
        fontSize: 80,
        fontWeight: '700',
        color:'#EA2C62',
        padding: 20,
        marginTop: 90
    },
    tagline: {
        color: '#335D2D',
        fontSize: 22,
        textAlign: 'center',
        padding:10,
        fontStyle:'italic'
    },
    taglines:{
        color: '#FE7171',
        fontSize: 22,
        textAlign: 'center',
        padding:10,
        fontWeight:'bold'
    },
    btn: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "60%",
        marginTop: 80,
        height :40,
        padding:0,
        fontSize: 30
    },
    btnInner: {
        backgroundColor: '#FBC7F7',
        width: 150,
        fontSize: 30
    },
  })


export default StartAppScreen;