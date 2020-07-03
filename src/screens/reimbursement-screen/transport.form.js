import React, { useEffect, useState } from 'react';
import { View, Text, Alert, Button, SafeAreaView, Picker, TouchableOpacity, ScrollView, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import style from './transport.form.style';

function TransportForm({ navigation }) {
    useEffect(() => {
        // showDatepicker1();
    })

    const [selectedValue, setSelectedValue] = useState("All");
    const [date, setDate] = useState(new Date(1598051730000));
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);

    const onChange = (event, selectedDate) => {
        const currentDate = selectedDate || date;
        setShow(Platform.OS === 'ios');
        setDate(currentDate);
    };

    const showMode = currentMode => {
        setShow(true);
        setMode(currentMode);
    };

    const showDatepicker = () => {
        showMode('date');
    };

    return (
        <SafeAreaView style={style.container2}>
            <ScrollView>
                <Text style={style.textareaContainer}>
                    Please fill this forms
                </Text>
                <Text style={style.textSM}>
                    Select Your Head Division *
                </Text>

                <View style={style.viewPicker}>
                    <Picker
                        mode={"dropdown"}
                        // selectedValue={this.state.headDivision}
                        style={style.picker}
                    // onValueChange={(itemValue, itemIndex) =>
                    //     this.setState({ headDivision: itemValue })
                    // }
                    >
                        <Picker.Item label="" value="" />
                        <Picker.Item label="Software Tailor" value="java" />
                        <Picker.Item label="Product Owner" value="js" />
                    </Picker>
                </View>

                <Text style={style.textSM}>
                    Overtime Date *
                </Text>

                <View>
                    <View>
                        <Button onPress={showDatepicker} title="Show date picker!" />
                    </View>
                    {show && (
                        <DateTimePicker
                            testID="dateTimePicker"
                            value={date}
                            mode={'date'}
                            is24Hour={true}
                            display="default"
                            onChange={onChange}
                        />
                    )}
                </View>

                <Text style={style.textSM}>
                    Description Request *
                </Text>

                <View style={style.viewPicker}>
                    <Picker
                        mode={"dropdown"}
                        // selectedValue={this.state.headDivision}
                        style={style.picker}
                    // onValueChange={(itemValue, itemIndex) =>
                    //     this.setState({ headDivision: itemValue })
                    // }
                    >
                        <Picker.Item label="" value="" />
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                </View>

                <Text style={style.textSM}>
                    Departure Location *
                </Text>

                <View style={style.viewPicker}>
                    <Picker
                        mode={"dropdown"}
                        // selectedValue={this.state.headDivision}
                        style={style.picker}
                    // onValueChange={(itemValue, itemIndex) =>
                    //     this.setState({ headDivision: itemValue })
                    // }
                    >
                        <Picker.Item label="" value="" />
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                </View>

                <Text style={style.textSM}>
                    Destination Location *
                </Text>

                <View style={style.viewPicker}>
                    <Picker
                        mode={"dropdown"}
                        // selectedValue={this.state.headDivision}
                        style={style.picker}
                    // onValueChange={(itemValue, itemIndex) =>
                    //     this.setState({ headDivision: itemValue })
                    // }
                    >
                        <Picker.Item label="" value="" />
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                </View>

                <Text style={style.textSM}>
                    Total Expand *
                </Text>

                <View style={style.viewPicker}>
                    <Picker
                        mode={"dropdown"}
                        // selectedValue={this.state.headDivision}
                        style={style.picker}
                    // onValueChange={(itemValue, itemIndex) =>
                    //     this.setState({ headDivision: itemValue })
                    // }
                    >
                        <Picker.Item label="" value="" />
                        <Picker.Item label="Java" value="java" />
                        <Picker.Item label="JavaScript" value="js" />
                    </Picker>
                </View>
                <TouchableOpacity onPress={() => alert('Under Development!')} style={style.buttonSubmit}>
                    <Text style={style.textbtnSubmit} >Submit</Text>
                </TouchableOpacity>
            </ScrollView>
        </SafeAreaView>
    )
}

export default TransportForm;


