import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Alert,
  SafeAreaView,
  Picker,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {DataTable} from 'react-native-paper';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import style from './transport.style';

function Transport({navigation}) {
  useEffect(() => {});

  const [selectedValue, setSelectedValue] = useState('All');

  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <View style={style.viewTextContainer}>
          <Text style={style.text1}>Transport Reimbursement</Text>
        </View>
        <Text style={style.textForm}>Status</Text>
        <View style={style.viewPicker}>
          <Picker
            selectedValue={selectedValue}
            style={style.picker}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }>
            <Picker.Item label="All" value="all" />
            <Picker.Item label="Pending" value="pending" />
            <Picker.Item label="Approved" value="Approved" />
            <Picker.Item label="Rejected" value="Rejected" />
          </Picker>
        </View>
        <Text style={style.textForm}>Sort By</Text>
        <View style={style.viewPicker}>
          <Picker
            selectedValue={selectedValue}
            style={style.picker}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }>
            <Picker.Item label="Newest to Oldest" value="nto" />
            <Picker.Item label="Oldest to Newest" value="otn" />
          </Picker>
        </View>

        <View style={style.viewPickerDate}>
          <Picker
            selectedValue={selectedValue}
            style={style.picker}
            onValueChange={(itemValue, itemIndex) =>
              setSelectedValue(itemValue)
            }>
            <Picker.Item label="Juni 2020" value="java" />
            <Picker.Item label="May 2020" value="js" />
            <Picker.Item label="April 2020" value="js" />
            <Picker.Item label="March 2020" value="js" />
            <Picker.Item label="February 2020" value="js" />
            <Picker.Item label="January 2020" value="js" />
          </Picker>
        </View>

        <DataTable style={style.dataTable}>
          <DataTable.Header>
            <DataTable.Title>
              <Text style={style.titleTable}>Submited</Text>
            </DataTable.Title>
            <DataTable.Title numeric>
              <Text style={style.titleTable}>Category</Text>
            </DataTable.Title>
            <DataTable.Title numeric>
              <Text style={style.titleTable}>Status</Text>
            </DataTable.Title>
            <DataTable.Title numeric>
              <Text style={style.titleTable}>Action</Text>
            </DataTable.Title>
          </DataTable.Header>

          <DataTable.Row>
            <DataTable.Cell>June 19, 2020</DataTable.Cell>
            <DataTable.Cell numeric>Transport</DataTable.Cell>
            <DataTable.Cell numeric>
              <Text style={style.textApproved}>Approved</Text>
            </DataTable.Cell>
            <DataTable.Cell numeric>
              <Text
                onPress={() =>
                  Alert.alert(
                    'Action',
                    '',
                    [
                      {
                        text: 'View Detail ',
                        onPress: () => {
                          navigation.navigate('TransportDetail');
                        },
                        style: 'cancel',
                      },
                      {text: 'Print', onPress: () => console.log('Print')},
                    ],
                    {cancelable: false},
                  )
                }>
                Tools
              </Text>
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>Juni 02, 2020</DataTable.Cell>
            <DataTable.Cell numeric>Transport</DataTable.Cell>
            <DataTable.Cell numeric>
              <Text style={style.textRejected}>Rejected</Text>
            </DataTable.Cell>
            <DataTable.Cell numeric>
              <Text
                onPress={() =>
                  Alert.alert(
                    'Action',
                    '',
                    [
                      {
                        text: 'View Detail ',
                        onPress: () => {
                          navigation.navigate('TransportDetail');
                        },
                        style: 'cancel',
                      },
                      {text: 'Print', onPress: () => console.log('Print')},
                    ],
                    {cancelable: false},
                  )
                }>
                Tools
              </Text>
            </DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>Juni 02, 2020</DataTable.Cell>
            <DataTable.Cell numeric>Transport</DataTable.Cell>
            <DataTable.Cell numeric>
              <Text style={style.textRejected}>Rejected</Text>
            </DataTable.Cell>
            <DataTable.Cell numeric>Tools</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>Juni 02, 2020</DataTable.Cell>
            <DataTable.Cell numeric>Transport</DataTable.Cell>
            <DataTable.Cell numeric>
              <Text style={style.textRejected}>Rejected</Text>
            </DataTable.Cell>
            <DataTable.Cell numeric>Tools</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Row>
            <DataTable.Cell>Juni 02, 2020</DataTable.Cell>
            <DataTable.Cell numeric>Transport</DataTable.Cell>
            <DataTable.Cell numeric>
              <Text style={style.textRejected}>Rejected</Text>
            </DataTable.Cell>
            <DataTable.Cell numeric>Tools</DataTable.Cell>
          </DataTable.Row>

          <DataTable.Pagination
            page={1}
            numberOfPages={3}
            onPageChange={page => {
              console.log(page);
            }}
            label="1-2 of 6"
          />
        </DataTable>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('TransportForm');
          }}
          style={style.buttonRequest}>
          <Text style={style.textbtnRequest}>Request</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Transport;
