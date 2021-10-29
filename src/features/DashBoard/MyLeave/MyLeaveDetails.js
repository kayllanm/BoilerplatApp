import React from 'react';
import {View, Text, StyleSheet, SectionList} from 'react-native';

const leaveDetailsData = [
  {
    title: 'Entitlement',
    data: [
      {title: 'BCEA Annual Leave', days: 'Days', numOfdays: '24.0000'},
      {title: 'Carry forward annual', days: 'Days', numOfdays: '-'},
      {title: 'Total', days: 'Days', numOfdays: '24.0000'},
    ],
  },
  {
    title: 'Balace brought forward',
    data: [
      {title: 'BCEA Annual Leave', days: 'Days', numOfdays: '-4.0000'},
      {title: 'Carry forward annual', days: 'Days', numOfdays: '0.0000'},
      {title: 'Total', days: 'Days', numOfdays: '-4.0000'},
    ],
  },
  {
    title: 'Accrued this period',
    data: [
      {title: 'BCEA Annual Leave', days: 'Days', numOfdays: '24.0000'},
      {title: 'Carry forward annual', days: 'Days', numOfdays: '-'},
      {title: 'Total', days: 'Days', numOfdays: '24.0000'},
    ],
  },
  {
    title: 'Taken this period',
    data: [
      {title: 'BCEA Annual Leave', days: 'Days', numOfdays: '0.0000'},
      {title: 'Carry forward annual', days: 'Days', numOfdays: '0.0000'},
      {title: 'Total', days: 'Days', numOfdays: '0.0000'},
    ],
  },
  {
    title: 'Balance carried forward',
    data: [
      {title: 'BCEA Annual Leave', days: 'Days', numOfdays: '24.0000'},
      {title: 'Carry forward annual', days: 'Days', numOfdays: '-'},
      {title: 'Total', days: 'Days', numOfdays: '24.0000'},
    ],
  },
  {
    title: 'Planned',
    data: [
      {title: 'BCEA Annual Leave', days: 'Days', numOfdays: '0.0000'},
      {title: 'Carry forward annual', days: 'Days', numOfdays: '0.0000'},
      {title: 'Total', days: 'Days', numOfdays: '0.0000'},
    ],
  },
  {
    title: 'Pending leave',
    data: [
      {title: 'BCEA Annual Leave', days: 'Days', numOfdays: '0.0000'},
      {title: 'Carry forward annual', days: 'Days', numOfdays: '0.0000'},
      {title: 'Total', days: 'Days', numOfdays: '0.0000'},
    ],
  },
  {
    title: 'Cycle end date',
    data: [
      {title: 'BCEA Annual Leave', days: 'Date', numOfdays: '31 Oct 2022'},
      {title: 'Carry forward annual', days: 'Days', numOfdays: '30 Apr 2022'},
    ],
  },
];

const MyLeaveDetails = () => {
  const renderItems = item => (
    <View style={styles.leaveDetailsListItemContainer}>
      <View style={styles.leaveDetailsListItemStyle}>
        <Text style={{flex: 1, color: 'rgba(0, 0, 0, 0.65)'}}>
          {item.title}
        </Text>
        <Text style={{color: 'rgba(0, 0, 0, 0.65)'}}>{item.days}</Text>
      </View>
      <Text style={{textAlign: 'right'}}>{item.numOfdays}</Text>
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
        renderItem={({item}) => renderItems(item)}
        renderSectionHeader={({section: {title}}) => (
          <Text style={styles.ListItemHeaderStyle}>{title}</Text>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  leaveDetailsContainerStyle: {
    padding: 16,
    backgroundColor: 'rgba(229, 229, 229, 0)',
  },
  leaveDetailsHeaderTextStyle: {
    fontSize: 24,
    lineHeight: 31,
    fontWeight: '700',
  },
  ListItemHeaderStyle: {
    fontSize: 15,
    lineHeight: 20,
    fontWeight: 'bold',
    paddingTop: 32,
    paddingBottom: 16,
  },
  leaveDetailsListItemContainer: {
    height: 64,
    backgroundColor: '#fff',
    padding: 16,
    marginTop: 2,
  },
  leaveDetailsListItemStyle: {
    flexDirection: 'row',
  },
});

export default MyLeaveDetails;
