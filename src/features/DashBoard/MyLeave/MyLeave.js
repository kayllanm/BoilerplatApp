import React, {useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet, FlatList} from 'react-native';
import SegmentedControlTab from "react-native-segmented-control-tab";

const MyLeave = ({navigation}) => {

    const [selectedIndex, setSelectedIndex] = useState(0);

    const handleIndexChange = index => {
        setSelectedIndex(index);
    };

    const leaveBalnceData = [
        {
            id: "1",
            title: "Annual leave",
            Available: '4.0000',
            Pending: '0.0000'
        },
        {
            id: "2",
            title: "Sick Leave",
            Available: '30.0000',
            Pending: '0.0000'
        },
        {
            id: "3",
            title: "Family Responsibility Leave",
            Available: '7.0000',
            Pending: '2.0000'
        },
        {
            id: "4",
            title: "Maternity Leave",
            Available: '4.0000',
            Pending: '0.0000'
        },
        {
            id: "4",
            title: "Paternity Leave",
            Available: '4.0000',
            Pending: '0.0000'
        }
    ]

    const leaveCard = ({item}) => {
        return (
            <View> 
                 <View style={styles.myLeaveCardHeaderTextContainerStyle}>
                    <Text style={styles.myLeaveCardHeaderTextStyle}>{item.title}</Text>
                    <TouchableOpacity onPress={() => {navigation.navigate('MyLeaveDetails')}}>
                        <Text style={styles.myLeaveLinkTextStyle}>View</Text>
                    </TouchableOpacity>
                </View>              
                <View style={styles.myLeaveCardContainerStyle}>
                    <View style={{flexDirection: 'row'}}>
                        <View style={{ width: '50%'}}>
                            <Text style={styles.myLeaveCardText}>Available</Text>
                        </View>
                        <View>
                            <Text style={styles.myLeaveCardText}>Pending</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', paddingTop: 50}}>
                        <View style={{ width: '50%'}}>
                            <Text style={{fontSize: 28}}>{item.Available}</Text>
                        </View>
                        <View>
                            <Text style={{fontSize: 28}}>{item.Pending}</Text>
                        </View>
                    </View>
                    <View style={{flexDirection: 'row', paddingTop: 8}}>
                        <View style={{ width: '50%'}}>
                            <Text style={styles.myLeaveCardText}>/Days</Text>
                        </View>
                        <View>
                            <Text style={styles.myLeaveCardText}>/Days</Text>
                        </View>
                    </View>
                </View>
            </View>
        )
    };

    const leaveRequestSegment = () => {
        return (
            <View>
                <FlatList 
                        data={leaveBalnceData}
                        renderItem={leaveCard}
                        keyExtractor={(item) => item.id}
                        contentContainerStyle={{ paddingBottom: 120 }}/>
            </View>
        )

    };

    return (
        <View style={styles.myLeaveContainerStyle}>
            <Text style={styles.myLeaveHeaderTextStyle}>My leave</Text>

            <SegmentedControlTab
                values={["Leave request", "Leave balance"]}
                selectedIndex={selectedIndex}
                onTabPress={handleIndexChange}
                tabStyle={{borderColor: 'rgba(229, 234, 236, 1)'}}
                tabTextStyle={{color: 'rgba(0, 129, 93, 1)'}}
                activeTabStyle={{backgroundColor: 'rgba(229, 234, 236, 1)'}}
                activeTabTextStyle={{color: '#000'}}
                />

                {selectedIndex === 0
                    && leaveRequestSegment()}
                {selectedIndex === 1
                    && <View><Text>second tab</Text></View>}
        </View>
    );
};
const styles = StyleSheet.create({
    myLeaveContainerStyle: {
        padding: 16,
        backgroundColor: 'rgba(229, 229, 229, 0)'
    },
    myLeaveHeaderTextStyle: {
        fontSize: 24,
        lineHeight: 31, 
        fontWeight: '700'
    },
    myLeaveCardHeaderTextContainerStyle: {
        flexDirection: 'row', 
        alignItems: 'center', 
        paddingTop: 48
    },
    myLeaveCardHeaderTextStyle: {
        flex: 1, 
        fontSize: 15
    },
    myLeaveLinkTextStyle: {
        color: '#00815D'
    },
    myLeaveCardText: {
        color: 'rgba(0, 0, 0, 0.65)'
    },
    myLeaveCardContainerStyle: {
        backgroundColor: '#fff', 
        height: 160, 
        borderRadius: 8, 
        marginTop: 16, 
        padding: 16
    }
});

export default MyLeave;