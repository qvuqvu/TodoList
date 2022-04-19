
import { StyleSheet, Text, View, TouchableOpacity, Modal, TextInput, StatusBar, Keyboard } from 'react-native'
import React, { useState } from 'react'
import Task from './Components/Task';
import { Colors } from 'react-native/Libraries/NewAppScreen';

const App = () => {

  const [modalOpen, setModal] = useState(false);
  const [title, settitle] = useState();
  const [description, setdescription] = useState();
  const [items, setItems] = useState([]);
  const handleAddtask = () => {
    Keyboard.dismiss();
    setItems([...items, title])
    settitle(null);
    setdescription(null);
  }

  const completeTask = (index) => {
    let itemsCopy = [...items];
    itemsCopy.splice(index, 1);
    setItems(itemsCopy)
  }


  return (
    <View style={styles.container} >
      <Modal transparent={true} visible={modalOpen} animationType='fade'>
        <View style={{ backgroundColor: '#000000aa', flex: 1, }}>
          <View style={{ backgroundColor: 'white', height: 200, width: 300, margin: 40, padding: 10, borderRadius: 10, flex: 1, }}>
            {/* header for add-new-task popup */}
            <View style={styles.HeaderPopup} >
              <TouchableOpacity style={{ justifyContent: 'flex-end', alignItems: 'flex-start' }} onPress={() => setModal(false)} >
                <View style={styles.addWrapper}>
                  <Text style={styles.addText}>X</Text>
                </View>
              </TouchableOpacity>
              <Text style={styles.TitlePopup}>Add new task</Text>
            </View>

            {/* Input details of a task */}
            <TextInput
              style={styles.inputTitle}
              placeholder="Title"
              onChangeText={text1 => settitle(text1)}
              value={title}
            >
            </TextInput>
            <TextInput
              style={styles.inputDescript}
              placeholder="Description"
              onChangeText={text2 => setdescription(text2)}
              value={description}>
            </TextInput>

            {/* Footer for add-new-task popup */}
            <View style={styles.footerPopup}>
              <View style={styles.SaveWrapper}>
                <TouchableOpacity
                  onPress={() => {
                    handleAddtask();
                    setModal(!modalOpen)
                  }}
                >
                  <Text style={styles.SaveText}>
                    Save
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>

      <View style={styles.tasks}>
        <Text style={styles.sectionTitle}>To-do list</Text>
        <View style={styles.items}>

          {
            items.map((item, index) => {
              return (
                <TouchableOpacity key={index} onPress={() => completeTask(index)} >
                  <Task text2 = {item} 
                          />
                </TouchableOpacity>
              )
            })
          }
          {/* <Task text={'Task 1'} />
          <Task text={'Task 2'} /> */}
        </View>
      </View>

      <View style={styles.buttonWrapper}>
        <TouchableOpacity onPress={() => setModal(true)} >
          <View style={styles.addWrapper}>
            <Text style={styles.addText}>Add</Text>
          </View>
        </TouchableOpacity>

      </View>

      <StatusBar
        barStyle="light-content"
        backgroundColor='#96D9FF'
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#55BCF6',

  },
  tasks: {
    paddingTop: 80,
    paddingHorizontal: 20,

  },
  sectionTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white'
  },
  items: {
    marginTop: 30,
  },

  addWrapper: {
    width: 60,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 60,
    justifyContent: 'center',
    alignItems: 'center',
    shadowColor: '#000000',
    shadowOffset: {
      width: 0,
      height: 3
    },
    shadowRadius: 5,
    shadowOpacity: 1.0


  },
  addText: {
    fontSize: 20,
    color: '#55BCF6'
  },

  buttonWrapper: {
    position: 'absolute',
    bottom: 60,
    width: '90%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  },


  inputTitle: {
    height: 50,
    width: 250,
    borderWidth: 1,
    padding: 10,
    fontSize: 15,
    borderRadius: 20,
    borderColor: '#C0C0C0',
    marginTop: 50,
    marginLeft: 17,

  },
  inputDescript: {
    marginTop: 30,
    height: 100,
    width: 250,
    borderWidth: 1,
    padding: 10,
    fontSize: 15,
    borderRadius: 20,
    borderColor: '#C0C0C0',
    marginLeft: 17,
  },

  TitlePopup: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#55BCF6',
    justifyContent: 'center',
    alignItems: 'center',
  },

  HeaderPopup: {
    position: 'absolute',
    Top: 50,
    width: '80%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },

  SaveWrapper: {
    width: 80,
    height: 40,
    backgroundColor: '#55BCF6',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },

  SaveText: {
    fontSize: 20,
    color: 'white'
  },

  footerPopup: {
    position: 'absolute',
    bottom: 20,
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center'
  }

})


export default App;