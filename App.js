
import { StyleSheet, View } from 'react-native';
import Box from './components/Box';

export default function App() {
  return (
    // <View style = {{backgroundColor : "plum", flex:1}}></View>
    <View style={styles.container}>

      {/* To test alignItems: baseline add paddingVertical */}
     {/* <Box style={{backgroundColor: "blue", paddingVertical:100}}>Box1</Box> */}

     {/* <Box style={{backgroundColor: "blue", alignSelf:"flex-start"}}>Box1</Box>
     <Box style={{backgroundColor: "red", alignSelf:"flex-end"}}>Box2</Box>
     <Box style={{backgroundColor: "green" ,alignSelf:"center"}}>Box3</Box>
     <Box style={{backgroundColor: "gold", alignSelf:"stretch"}}>Box4</Box>
     <Box style={{backgroundColor: "orange", alignSelf:"auto"}}>Box5</Box>  */}
     {/* Inherits the value of alignItems property if the alignSelf is "auto" or no value applied */}
     {/* <Box style={{backgroundColor: "violet"}}>Box6</Box>
     <Box style={{backgroundColor: "indigo"}}>Box7</Box> */}

     
     {/* comment these boxes 4 to 7 for testing flex */}
     <Box style={{backgroundColor: "blue"}}>Box1</Box>
     <Box style={{backgroundColor: "red"}}>Box2</Box>
     <Box style={{backgroundColor: "green"}}>Box3</Box>
     <Box style={{backgroundColor: "gold"}}>Box4</Box>
    <Box style={{backgroundColor: "orange"}}>Box5</Box> 
    <Box style={{backgroundColor: "violet"}}>Box6</Box>
    <Box style={{backgroundColor: "indigo"}}>Box7</Box>


    </View>
  );
}

const styles = StyleSheet.create({
  // To test flexDirection,justifyContent,alignItems
  // container: {
  //   flex:1,
  //   flexDirection: "column", //possible values are "column", "column-reverse", "row", "row-reverse"
  //   justifyContent: "center", //flex-start, flex-end, center, space-between,space-around,space-evenly
  //   alignItems: "stretch", //stretch (default), flex-start, flex-end, center, baseline
  //   marginTop: 100,
  //   borderWidth: 6,
  //   borderColor: "yellow",
    
  // },

   container: {
   // flex:1,
    height: 200, //without flex:1 it will occupy limited layout based on the height
    flexWrap: "wrap",
   // alignContent: "space-around", //if "stretch" is applied - it wrap the items within the container 
    //rowGap:20,
    //columnGap:20,
    gap:10,
    marginTop: 100,
    borderWidth: 6,
    borderColor: "yellow",
    
  },
  

});
