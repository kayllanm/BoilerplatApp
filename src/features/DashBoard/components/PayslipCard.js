import React from 'react';
import {View, Text} from 'react-native';
import PDF from '../assets/pdf.svg';
import Mail from '../assets/mail.svg';
import Download from '../assets/download.svg';
import PayslipCardStyles from './PayslipCardStyles';

const PayslipCard = ({item}) => {
  const {payslipCardContainer, payslipMonthTextContainer, pdfSizeText} =
    PayslipCardStyles;
  return (
    <View style={payslipCardContainer}>
      <View style={{flex: 1}}>
        <PDF width={40} height={40} />
      </View>
      <View style={payslipMonthTextContainer}>
        <Text>{item.month}</Text>
        <Text style={pdfSizeText}>{item.size}</Text>
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
