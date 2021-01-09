import * as React from 'react';
import { Text, View, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import Constants from 'expo-constants';
import Search from '../components/searchicon';

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={{ fontWeight: '900', fontSize: 30 }}>Notes</Text>
        <View style={{ flexDirection: 'row',alignItems: 'center', }}>
          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              backgroundColor: '#F9F9F9',
              alignItems: 'center',
              justifyContent: 'center',
              borderRadius: 9999,
            }}>
            <Search />
          </TouchableOpacity>
          <Image
            style={styles.profile}
            source={{
              uri: 'https://picsum.photos/200/300',
            }}
          />
        </View>
      </View>
      <View style={styles.notesec}>
        <View style={styles.notecontainer}>
          <View style={styles.notes}>
            <Text style={styles.notetitle}>How to Cook Jollof Rice.</Text>
            <View style={{ flexDirection: 'row',alignItems: 'center', position: 'absolute', bottom: 0, padding: 20 }}>
              <View style={styles.date}>
                <Text style={{ color: '#fff', fontWeight: '800', textAlign: 'center', fontSize: 10 }} >25th Dec</Text>
              </View>
              <Text style={{ color: '#000', fontWeight: '800', fontSize: 10, marginLeft: 10 }} >9:50 AM</Text>
            </View>
          </View>
          <View style={styles.notes}>
            <Text style={styles.notetitle}>To Do List (Home)</Text>
            <View style={{ flexDirection: 'row',alignItems: 'center', position: 'absolute', bottom: 0, padding: 20 }}>
              <View style={styles.date}>
                <Text style={{ color: '#fff', fontWeight: '800', textAlign: 'center', fontSize: 10 }} >25th Dec</Text>
              </View>
              <Text style={{ color: '#000', fontWeight: '800', fontSize: 10, marginLeft: 10 }} >9:50 AM</Text>
            </View>
          </View>
        </View>
        <View style={styles.notecontainer2}>
          <View style={styles.notes2}>
            <Text style={styles.notetitle}>Speech: The Future Of The Country</Text>
            <View style={{ flexDirection: 'row',alignItems: 'center', position: 'absolute', bottom: 0, padding: 20 }}>
              <View style={styles.date}>
                <Text style={{ color: '#fff', fontWeight: '800', textAlign: 'center', fontSize: 10 }} >25th Dec</Text>
              </View>
              <Text style={{ color: '#000', fontWeight: '800', fontSize: 10, marginLeft: 10 }} >9:50 AM</Text>
            </View>
          </View>
        </View>
        <View style={styles.notecontainer}>
          <View style={styles.notes}>
            <Text style={styles.notetitle}>How to Cook Jollof Rice.</Text>
            <View style={{ flexDirection: 'row',alignItems: 'center', position: 'absolute', bottom: 0, padding: 20 }}>
              <View style={styles.date}>
                <Text style={{ color: '#fff', fontWeight: '800', textAlign: 'center', fontSize: 10 }} >25th Dec</Text>
              </View>
              <Text style={{ color: '#000', fontWeight: '800', fontSize: 10, marginLeft: 10 }} >9:50 AM</Text>
            </View>
          </View>
          <View style={styles.notes}>
            <Text style={styles.notetitle}>To Do List (Home)</Text>
            <View style={{ flexDirection: 'row',alignItems: 'center', position: 'absolute', bottom: 0, padding: 20 }}>
              <View style={styles.date}>
                <Text style={{ color: '#fff', fontWeight: '800', textAlign: 'center', fontSize: 10 }} >25th Dec</Text>
              </View>
              <Text style={{ color: '#000', fontWeight: '800', fontSize: 10, marginLeft: 10 }} >9:50 AM</Text>
            </View>
          </View>
        </View>
        <View style={styles.notecontainer2}>
          <View style={styles.notes2}>
            <Text style={styles.notetitle}>Speech: The Future Of The Country</Text>
            <View style={{ flexDirection: 'row',alignItems: 'center', position: 'absolute', bottom: 0, padding: 20 }}>
              <View style={styles.date}>
                <Text style={{ color: '#fff', fontWeight: '800', textAlign: 'center', fontSize: 10 }} >25th Dec</Text>
              </View>
              <Text style={{ color: '#000', fontWeight: '800', fontSize: 10, marginLeft: 10 }} >9:50 AM</Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: Constants.statusBarHeight,
  },
  header: {
    flex: 1,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center', 
    justifyContent: 'space-between',
  },
  profile: {
    width: 40,
    height: 40,
    borderRadius: 9999,
    marginLeft: 10,
  },
  notesec: {
    flex: 1,
    padding: 20,
  },
  notecontainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15
  },
  notecontainer2: {
    flex: 1,
    marginBottom: 15
  },
  notes: {
    position: 'relative',
    backgroundColor: '#f9f9f9',
    padding: 15,
    width: 160,
    height: 220,
    borderRadius: 20
  },
  notes2: {
    position: 'relative',
    backgroundColor: '#f9f9f9',
    padding: 15,
    height: 160,
    borderRadius: 20
  },
  notetitle: {
    fontWeight: '900',
    fontSize: 22,
    lineHeight: 33
  },
  date:{
    paddingTop: 4,
    paddingBottom: 4,
    width: 70,
    backgroundColor: '#000',
    borderRadius: 9999
  }
});
