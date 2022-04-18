import React, { useState, useRef,useEffect } from "react";
import { Button } from 'react-native'
import {Alert, Modal, StyleSheet, Text, Pressable, View, TextInput, TimeInput, TouchableOpacity, FlatList, Image } from "react-native";
import DatePicker from 'react-native-date-picker'
import moment from "moment";
const DATA = [];

const App = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [date, setDate] = useState(new Date());
  const [open, setOpen] = useState(false);
  const [date1, setDate1] = useState(new Date());
  const [open1, setOpen1] = useState(false);
  const [title, settitle] = useState("");
  const [description, setdescription] = useState("");
  const [getA, setA] = useState(false)
  const [data, setData] = React.useState(DATA); 
  const removeItem = (title) => {
    let arr = data.filter(function(item) {
      return item.title !== title
    })
    setData(arr);
  };
  const renderItem = ({ item }) => (
    <View style={{flex:1}}>
    <View
      style={{
        flexDirection: 'row',
        height: 50,
        borderWidth: 1
      }}>
      <Text style={{ marginLeft: 25, fontSize: 10, alignSelf: 'center' }}>{item.title}</Text>
      <Text style={{ marginLeft: 25, fontSize: 10, alignSelf: 'center' }}>{moment(item.date).format('DD/MM/YYYY, h:mm:ss a')}</Text>
      <Text style={{ marginLeft: 25, fontSize: 10, alignSelf: 'center' }}>{moment(item.date1).format('DD/MM/YYYY, h:mm:ss a')}</Text>
      <TouchableOpacity style={{ borderWidth: 1, height: 20, width: 20, borderRadius: 20, justifyContent: 'flex-end', alignItems: 'center', marginTop: 17, marginLeft: 20 }}
        onPress={() => {
          setA(true)
        }}
      >
        {getA ?
          <Image style={{ width: 20, height: 20,position:'absolute' }} resizeMode="contain" source={require('./image/tick.jpg')}></Image>
        : <Text></Text>}
      </TouchableOpacity>
    </View>
    </View>
    
  );

  return (
    <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
      >
        <View style={styles.view}>
          <View style={styles.modalView}>
            <Text style={styles.intputText}>
              Popup
            </Text>
            <TextInput
              style={styles.input}
              placeholder="title"
              onChangeText={settitle}
              value={title}
            >
            </TextInput>
            <TextInput
              style={styles.input1}
              placeholder="description"
              onChangeText={setdescription}
              value={description}>
            </TextInput>
            <View style={{ flexDirection: 'row', marginTop: 30, justifyContent: 'space-around', width: 400 }}>
              <Button style={{ margin: 20 }} title="Start" onPress={() => setOpen(true)} />
              <DatePicker
                modal
                open={open}
                date={date}
                onConfirm={(date) => {
                  setOpen(false)
                  setDate(date)
                }}
                onCancel={() => {
                  setOpen(false)
                }}
              />
              <Button style={{ margin: 20 }} title="End" onPress={() => setOpen1(true)} />
              <DatePicker
                modal
                open={open1}
                date={date1}
                onConfirm={(date1) => {
                  setOpen1(false)
                  setDate1(date1)
                }}
                onCancel={() => {
                  setOpen1(false)
                }}
              />
            </View>
            <View style={{ flex: 1, marginLeft: 200 }}>
              <View style={{ borderWidth: 1, margin: 20, width: 100, height: 50, alignItems: 'center', justifyContent: 'center', borderRadius: 30, backgroundColor: '#00FFFF' }}>
                <TouchableOpacity
                  onPress={() => {
                    DATA.push({ title: title, description: description, date: date, date1: date1 })
                    settitle("");
                    setdescription("");
                    setDate(new Date());
                    setDate1(new Date());
                    setModalVisible(!modalVisible)
                  }}
                >
                  <Text style={{ color: 'black', fontSize: 20, alignItems: 'center', justifyContent: 'center' }}>
                    save
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </View>
      </Modal>
      <View style={{ borderWidth: 1 }}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.title}>
        </FlatList>
      </View>
      <View style={{ flex: 1, height: '100%', width: '100%', justifyContent: 'flex-end', marginBottom: 30, marginLeft: 280 }}>
        <View style={{ alignItems: 'center', justifyContent: 'center', borderWidth: 1, width: 100, height: 50, borderRadius: 30 }}>
          <TouchableOpacity
            onPress={() => setModalVisible(true)}>
            <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold' }}>add</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  time: {
    height: 50,
    width: 300,
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
  },
  intputText: {
    margin: 30,
    color: 'black',
    fontSize: 20,
    fontWeight: "bold",
  },
  input: {
    height: 50,
    width: 300,
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
  },
  input1: {
    marginTop: 30,
    height: 100,
    width: 300,
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
  },
  centeredView: {
    flex: 1,
    marginTop: 100
  },
  view: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  modalView: {
    alignItems: 'center',
    backgroundColor: "white",
    width: 400,
    height: 500,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },
  buttonOpen: {
    backgroundColor: "#F194FF",
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
});

export default App;
