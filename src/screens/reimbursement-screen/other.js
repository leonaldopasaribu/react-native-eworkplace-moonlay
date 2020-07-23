import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Alert,
  SafeAreaView,
  Picker,
  TouchableOpacity,
  ScrollView,
  FlatList,
  RefreshControl,
} from 'react-native';
import {DataTable} from 'react-native-paper';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from './other.style';
import moment from 'moment';
import * as Resources from '../../config/Resource';

function Other({navigation}) {
  useEffect(() => {
    getOthers();
  }, []);

  const [refreshing, setRefreshing] = useState(false);
  const [selectedValue, setSelectedValue] = useState('All');
  const [date, setDate] = useState([]);

  const wait = timeout => {
    return new Promise(resolve => {
      setTimeout(resolve, timeout);
    });
  };

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);

    wait(2000).then(() => setRefreshing(false));
  }, []);

  const getOthers = () => {
    Resources.getOthers()
      .then(r => {
        console.log(r);
        setDate(r);
      })
      .catch(e => {
        console.log(e);
      });
  };

  return (
    <SafeAreaView style={style.container}>
      <ScrollView>
        <View style={style.viewTextContainer}>
          <Text style={style.text1}>Other Reimbursement</Text>
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

        <Text style={style.textForm}>Sort By Month</Text>
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

          <FlatList
            refreshControl={
              <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
            }
            data={date}
            renderItem={({item}) => (
              <View style={style.containerTable}>
                <View style={style.columnDate}>
                  <Text style={style.textTable}>{moment(item.date).format('dddd, MMMM D YYYY')}</Text>
                </View>
                <View style={style.columnCategory}>
                  <Text style={style.textTable}>Other</Text>
                </View>
                <View style={style.columnStatus}>
                  <Text style={style.textPending}>Pending</Text>
                </View>
                <View style={style.columnAction}>
                  <Button
                    icon={<Icon name="long-arrow-right" size={18} color="white" />}
                    iconRight
                    onPress={() => {
                      navigation.navigate('OtherDetail');
                    }}
                  />
                </View>
              </View>
            )}
          />

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
            navigation.navigate('OtherAdd');
          }}
          style={style.buttonRequest}>
          <Text style={style.textbtnRequest}>Request</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Other;
