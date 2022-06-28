import React, {useState} from 'react';
import { StyleSheet, Text, View,FlatList, Image, TextInput, SafeAreaView, Keyboard, TouchableOpacity } from 'react-native';
import Task from './components/AddRunner';

export default function App() {

  const runners = [
    {
      "name": "Eva Evans",
      "email": "eva.evans@ochy.io",
      "photo": "https://i.ibb.co/yf9XMhb/pexels-rfstudio-3621182.jpg"
      },
      {
      "name": "Mike Evans",
      "email": "mike.evans@ochy.io",
      "photo": "https://i.ibb.co/zh1FgqX/pexels-andrea-piacquadio-3799644.jpg"
      },
  ];

  const Separator = () => <View style={styles.separator} />


  const [task, setTask] = useState();
  const [taskItems, setTaskItems] = useState([]);

  const handleAddTask = () => {
    Keyboard.dismiss();
    setTaskItems([...taskItems, task])
    setTask(null);
  }


  const oneRunner = ({item}) => (
    <View style={styles.items}>
    <View style={styles.itemsLeft}>
      <View style={styles.square}>
        <Image source={item.photo} style={styles.athletesImage}></Image>
      </View>
      <View style={styles.athletesDesc}>
        <Text style={styles.itemsTextName}>{item.name}</Text>
        <Text style={styles.itemsTextEmail}>{item.email}</Text>
      </View>
    </View>
  </View> 
  )

  return (
    <View style={styles.Body}>
      <View style={styles.container}>
        <View style={styles.runnersWrapper}>
          <Text style={styles.sectionTitle}>Athletes</Text>
        </View>
        <View style={styles.searchBar}>
          <Image source={require('./assets/loupe.png')} style={styles.loupe}/>
          <TextInput placeholder="Enter an email" style={styles.titleSearchbar} value={task} onChangeText={text => setTask(text)}></TextInput>
          <TouchableOpacity onPress={() => handleAddTask()}>
          <Image source={require('./assets/accept.png')} style={styles.accept}/>
          </TouchableOpacity>
        </View>
        <View style={styles.MyAthletes}>
          <Text style={styles.sectionTitle}>My Athletes</Text>
        </View>
      </View>
      <Separator/>
      <View style={styles.Athletes}>
        <SafeAreaView>
          <FlatList
            data = {runners}
            renderItem = { oneRunner }
          />
        </SafeAreaView>
      </View>
      {
        taskItems.map((itemss, index) => {
          return <Task key={index} text={itemss} />
        })
      }
    </View>
  );
}

const styles = StyleSheet.create({
  Body: {
    paddingTop: 30,
    paddingHorizontal: 20,
  },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  runnersWrapper: {
    marginTop: 10,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  searchBar: {
    paddingTop: 10,
    paddingHorizontal: 20,
    backgroundColor: '#e5e7eb',
    flexDirection: "row",
    alignItems: "center",
    paddingBottom: 10,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
  },
  loupe: {
    width: 25,
    height: 25,
    marginLeft: 0,
    marginRight: 10,
  },
  titleSearchbar: {
    width: '100%', height: 25
  },
  accept: {
    width: 25,
    height: 25,
    marginLeft: 10,
    marginRight: 0,
  },
  MyAthletes: {
    marginTop: 30,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  separator: {
    height:1,
    width: '100%',
    backgroundColor: '#CCC',
    marginVertical: 10,
    borderBottomColor:"#737373",
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  Athletes: {
    marginTop: 5,
  },

  /*design athletes box*/
  items: {
    backgroundColor:'#e5e7eb',
    padding:15,
    borderRadius:10,
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom: 20
},
itemsLeft: {
    flexDirection:'row',
    alignItems:'center',
    flexWrap:'wrap'
},
itemsTextName: {
    maxWidth:'100%',
    fontWeight: 'bold',

},
itemsTextEmail: {
    maxWidth:'100%',
    opacity:0.5,
},
square: {
    width:50,
    height:50,
    opacity:1,
    borderRadius:5,
    marginRight:15,
},
athletesDesc: {
    flexDirection:'column',
    alignItems:'left',
    flexWrap:'wrap',
},
circular: {
    width:12,
    height:12,
    borderColor:'#55BCF6',
    borderWidth:2,
    borderRadius:5,
},
athletesImage:{
    width: '100%',
    height: '100%',
    marginLeft: 5,
    marginRight: 5,
    borderRadius: '50%',
}

});
