import React, { Component } from 'react';
import { View, Text, StyleSheet, Alert, BackHandler, TouchableOpacity, Picker, TextInput, RefreshControl, SafeAreaView, ScrollView,} from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import Geolocation from 'react-native-geolocation-service';
import axios from 'axios';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Card, Button } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import style from './other.form.style';

export default class OtherForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      fullname: '',
      startDate: new Date(),
      dateStart: '',
      endDate: new Date(),
      dateEnd: '',
      CheckInTime: '',
      CheckOutTime: '',
      photo: null,
      Location: '',
      message: '',
      status: 'Taking day off',
      headDivision: '',
      reason: '',
      substitute: '',
      show1: false,
      show2: false,
      backPressed: 0,
    };
    this.showDatepicker1 = this.showDatepicker1.bind(this);
    this.showDatepicker2 = this.showDatepicker2.bind(this);
    this.findCoordinates = this.findCoordinates.bind(this);
    this.onBack = this.onBack.bind(this);
  }

  componentDidMount() {
    BackHandler.addEventListener('hardwareBackPress', this.onBack);
  }
  componentWillUnmount() {
    BackHandler.removeEventListener('hardwareBackPress', this.onBack);
  }

  onBack = () => {
    this.setState({
      backPressed: this.state.backPressed + 1,
    });

    if (this.state.backPressed % 2 === 1) {
      this.props.navigation.goBack();
      return true;
    }
  };

  loadData = async () => {
    const username = await AsyncStorage.getItem('username');
    const name = await AsyncStorage.getItem('name');
    const location = await AsyncStorage.getItem('location');
    this.setState({
      username: username,
      name: name,
      Location: location,
    });
  };

  findCoordinates = () => {
    Geolocation.getCurrentPosition(
      position => {
        Geocoder.init('AIzaSyA5wKOId22uPu5jTKhTh0LpF3R5MRpmjyw');
        Geocoder.from(position.coords.latitude, position.coords.longitude)
          .then(json => {
            console.log('Success: Get user location');
            var addressComponent =
              json.results[1].address_components[0].long_name;
            this.setState({
              Location: addressComponent,
            });
            deviceStorage.saveItem('location', this.state.Location);
            console.log(addressComponent);
            this.props.addLoc(this.state.Location);
          })
          .catch(error => console.warn('Error: Get user location'));
      },
      error => Alert.alert(error.message),
      {enableHighAccuracy: true, timeout: 50000, maximumAge: 1000},
    );
  };

  showDatepicker1 = () => {
    this.setState({
      show1: true,
    });
  };
  showDatepicker2 = () => {
    this.setState({
      show2: true,
    });
  };
  render() {
    const {show1, show2} = this.state;
    return (
      <SafeAreaView style={style.container}>
        <ScrollView>
          <Text style={style.textareaContainer}>
            Other Reimbursement Request
          </Text>

          <Card title="FORM">
            <Text style={style.textSM}>Division *</Text>

            <View style={style.viewPicker}>
              <Picker
                mode={'dropdown'}
                selectedValue={this.state.headDivision}
                style={style.picker}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({headDivision: itemValue})
                }>
                <Picker.Item label="" value="" />
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
              </Picker>
            </View>

            <Text style={style.textSM}>Date *</Text>

            <View style={style.viewDate1}>
              <View style={style.viewDate2}>
                <View style={style.viewDate3}>
                  <View style={{flex: 4, justifyContent: 'center'}}>
                    <Text style={{marginLeft: 10, fontSize: 15}}>
                      {this.state.dateStart}
                    </Text>
                  </View>
                  <View style={{flex: 1, justifyContent: 'center'}}>
                    <FontAwesome5
                      style={style.iconDate}
                      name="calendar"
                      size={25}
                      color="#1A446D"
                      onPress={this.showDatepicker1}
                    />
                  </View>
                </View>
              </View>
              {show1 && (
                <DateTimePicker
                  testID="dateTimePicker"
                  value={this.state.startDate}
                  mode={'date'}
                  display="calendar"
                  onChange={(event, selectedDate) => {
                    const date = selectedDate.toString();
                    this.setState({
                      startDate: selectedDate,
                      dateStart: date.substr(0, 15),
                      show1: false,
                    });
                  }}
                />
              )}
            </View>

            <Text style={style.textSM}>Reimbursement Type *</Text>

            <View style={style.viewPicker}>
              <Picker
                mode={'dropdown'}
                selectedValue={this.state.headDivision}
                style={style.picker}
                onValueChange={(itemValue, itemIndex) =>
                  this.setState({headDivision: itemValue})
                }>
                <Picker.Item label="" value="" />
                <Picker.Item label="Java" value="java" />
                <Picker.Item label="JavaScript" value="js" />
              </Picker>
            </View>

            <Text style={style.textSM}>Description Request *</Text>

            <TextInput
              multiline={true}
              maxLength={200}
              placeholder=""
              style={style.inputTextArea}
              onChangeText={text => this.setState({message: text})}
              value={this.state.message}
            />
            
            <Text style={style.textSM}>Total Expense *</Text>
            <TextInput
              multiline={true}
              maxLength={200}
              placeholder=""
              style={style.inputText}
              onChangeText={text => this.setState({message: text})}
              value={this.state.message}
            />

            <Text style={style.textSM}>Receipt Attachment *</Text>

            <View style={style.buttonAttachment}>
              <Button
              icon={
                  <Icon
                  name="upload"
                  size={15}
                  color="white"
                  />
              }
              iconRight
              title="Choose File "
              />
            </View>
            
            <TouchableOpacity
              onPress={() => alert('Under Development!')}
              style={style.buttonSubmit}>
              <Text style={style.textbtnSubmit}>Submit</Text>
            </TouchableOpacity>
            
          </Card>
        </ScrollView>
      </SafeAreaView>
    );
  }
}
