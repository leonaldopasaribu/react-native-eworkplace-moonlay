import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  Alert,
  Button,
  SafeAreaView,
  Picker,
  TouchableOpacity,
  ScrollView,
  Platform,
} from 'react-native';
import {Card} from 'react-native-elements';
import style from './other.detail.style';
import moment from 'moment';

function OtherDetail() {
  useEffect(() => {});

  return (
    <SafeAreaView style={style.container2}>
      <ScrollView>
        <Text style={style.textareaContainer}>Data Other Reimbursement</Text>

        <View style={{flex: 1, flexDirection: 'row', alignSelf: 'center'}}>
          <Card containerStyle={style.card}>
            <View style={style.viewText}>
              <Text style={style.textTitle}>Request ID # :</Text>
              <Text style={style.textDetail}>
                00101 / Other Reimbursement
              </Text>
              <Text style={style.textTitle}>Employee Name</Text>
              <Text style={style.textDetail}>Feber Sianipar</Text>

              <Text style={style.textTitle}>Division</Text>
              <Text style={style.textDetail}>Software Tailor</Text>

              <Text style={style.textTitle}>Date</Text>
              <Text style={style.textDetail}>June 19, 2020</Text>

              <Text style={style.textTitle}>Reimbursement Type</Text>
              <Text style={style.textDetail}>Hotel</Text>

              <Text style={style.textTitle}>Description Request</Text>
              <Text style={style.textDetail}>Berlibur</Text>

              <Text style={style.textTitle}>Total Expensi</Text>
              <Text style={style.textDetail}>Rp. 1.500.000</Text>

              <Text style={style.textTitle}>Status</Text>
              <Text style={style.textPending}>Pending</Text>
            </View>
          </Card>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default OtherDetail;
