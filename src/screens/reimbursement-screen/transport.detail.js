import React, { useEffect, useState } from 'react';
import { View, Text, Alert, Button, SafeAreaView, Picker, TouchableOpacity, ScrollView, Platform } from 'react-native';
import { Card } from 'react-native-elements';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import style from './transport.detail.style';

function TranportDetail() {
    useEffect(() => {

    })

    return (
        <SafeAreaView style={style.container2}>
            <ScrollView>
                <Text style={style.textareaContainer}>
                    Data Transport Reimbursement
                </Text>

                <View style={{ flex: 1, flexDirection: 'row', alignSelf: 'center' }}>
                    <Card containerStyle={style.card}>
                        <View style={style.viewText}>
                            <Text style={style.textTitle}>
                                Request ID # :
                            </Text>
                            <Text style={style.textDetail}>
                                00101 / Transport Reimbursement
                            </Text>
                            <Text style={style.textTitle}>
                                Employee Name
                            </Text>
                            <Text style={style.textDetail}>
                                Feber Sianipar
                            </Text>
                            <Text style={style.textTitle}>
                                Division
                            </Text>
                            <Text style={style.textDetail}>
                                Software Tailor
                            </Text>
                            <Text style={style.textTitle}>
                                Data Incurred
                            </Text>
                            <Text style={style.textDetail}>
                                June 19, 2020
                            </Text>
                            <Text style={style.textTitle}>
                                Description Request
                            </Text>
                            <Text style={style.textDetail}>
                                Berlibur
                            </Text>
                            <Text style={style.textTitle}>
                                Departure Location
                            </Text>
                            <Text style={style.textDetail}>
                                Tarutung
                            </Text>
                            <Text style={style.textTitle}>
                                Description Location
                            </Text>
                            <Text style={style.textDetail}>
                                Tapanuli Utara
                            </Text>
                            <Text style={style.textTitle}>
                                Total Expensi
                            </Text>
                            <Text style={style.textDetail}>
                                Rp. 1.500.000
                            </Text>
                            <Text style={style.textTitle}>
                                Status
                            </Text>
                            <Text style={style.textDetail}>
                                Pending
                            </Text>
                        </View>
                    </Card>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default TranportDetail;