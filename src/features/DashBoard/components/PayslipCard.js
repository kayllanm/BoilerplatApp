import React from 'react';
import {View, Text} from 'react-native';
import PDF from '../assets/pdf.svg';
import Mail from '../assets/mail.svg';
import Download from '../assets/download.svg';

const PayslipCard = ({item}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 16,
        backgroundColor: 'white',
        padding: 16,
        borderRadius: 8,
      }}>
      <View style={{flex: 1}}>
        <PDF width={40} height={40} />
      </View>
      <View style={{flex: 2, flexDirection: 'column'}}>
        <Text>{item.month}</Text>
        <Text style={{color: 'rgba(0, 0, 0, 0.38)'}}>{item.size}</Text>
      </View>
      <View style={{flexDirection: 'row'}}>
        <View style={{paddingRight: 24}}>
          <Mail width={24} height={24} />
        </View>
        <View style={{paddingRight: 16}}>
          <Download width={24} height={24} />
        </View>
      </View>
    </View>
  );
};

export default PayslipCard;
