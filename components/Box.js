import {View, Text, StyleSheet} from 'react-native'

export default function Box({children, style}){
    return (
        <View style = {[styles.boxly, style]}>
            <Text style = {styles.text}>{children}</Text>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        boxly: {
            backgroundColor : "#fff",
            padding:20,
            // width and height is applied for testing the alignContent: "space-between" property
            width:50,
            height:50,
        },
        text: {
            fontSize: 24,
            fontWeight: "bold",
            textAlign: "center",
            color: "white",
        },
    }
);
