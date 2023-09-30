import { Text,StyleSheet, Image, ScrollView,SafeAreaView } from 'react-native';

export default function Home() {
  return (
    
   <SafeAreaView style={styles.container}>
     <ScrollView>
      <SafeAreaView>
       <Text style= {styles.titulo}>Cardápio</Text>
      </SafeAreaView>
      <SafeAreaView style={styles.cxfoto}>
        <Image style = {styles.img}resizeMethod="center" source={ require("../assets/pizza_calabresa.jpg")}/>
      </SafeAreaView>
      <Text style={styles.paragraph}>Pizza Calabresa</Text> 
      <Text style={styles.paragraph}>R$60,00</Text> 
      <SafeAreaView style={styles.cxfoto}>
      <Image style={styles.img} resizeMethod="center" source={require("../assets/pizza-portuguesa.jpg")}/>
      </SafeAreaView>
       <Text style={styles.paragraph}>Pizza Portuguesa</Text> 
       <Text style= {styles.paragraph}>R$80,00</Text> 

     </ScrollView>
     </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1, 
    justifyContent:"center",
    alignItens:"center",
    padding: 8,
    backgroundColor: '#add8e6',
  }, 
  img:{
    width:250,
    height:200,
    borderRadius: 8,
    margin: 15 
  },
  paragraph:{
    fontSize:20
  },
  cxfoto:{
  backgroundColor: "#ffcbdb",
  marginTop: 20,
  alignItens:'center',
  borderRadius: 15,
  paddingLeft: 10

  }

});
