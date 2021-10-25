import React from 'react';
import {View, Text, StyleSheet, Image, SectionList} from 'react-native';

const leaveDetailsData = [
    {
      title: "Entitlement",
      data: ["24.0000", "-", "24.0000"]
    },
    {
      title: "Balace brought forward",
      data: ["-4.0000", "0.0000", "-4.0000"]
    },
    {
      title: "Accrued this period",
      data: ["24.0000", "-", "24.0000"]
    },
    {
      title: "Taken this period",
      data: ["0.0000", "0.0000", "0.0000"]
    },
    {
      title: "Balance carried forward",
      data: ["20.0000", "0.0000", "20.0000"]
    },
    {
      title: "Planned",
      data: ["0.0000", "0.0000", "0.0000"]
    },
    {
      title: "Pending leave",
      data: ["0.0000", "0.0000", "0.0000"]
    },
    {
      title: "Cycle end date",
      data: ["31 Oct 2022", "30 Apr 2022"]
    }
  ];

const MyLeaveDetails = () => {
    const renderItems = (item) =>  (
        <View>
            <Text>{item.data}</Text>
        </View>
    );

    return (
        <View style={styles.leaveDetailsContainerStyle}> 
        <View>
            <Text style={styles.leaveDetailsHeaderTextStyle}>Annual leave</Text>
        </View>
        <SectionList
            sections={leaveDetailsData}
            keyExtractor={(item, index) => item + index}
            renderItem={({ item }) => renderItems(item)}
            renderSectionHeader={({ section: { title } }) => (
                <Text style={styles.ListItemHeaderStyle}>{title}</Text>
            )}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    leaveDetailsContainerStyle: {
        padding: 16,
        backgroundColor: 'rgba(229, 229, 229, 0)'
    },
    leaveDetailsHeaderTextStyle: {
        fontSize: 24,
        lineHeight: 31, 
        fontWeight: '700'
    },
    ListItemHeaderStyle: {
        fontSize: 15,
        lineHeight: 20
    }
})

export default MyLeaveDetails;