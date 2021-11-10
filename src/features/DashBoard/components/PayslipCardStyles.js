import {StyleSheet} from 'react-native';

const PayslipCardStyles = StyleSheet.create({
  payslipCardContainer: {
    flexDirection: 'row',
    marginTop: 16,
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 8,
  },
  payslipMonthTextContainer: {flex: 2, flexDirection: 'column'},
  pdfSizeText: {color: 'rgba(0, 0, 0, 0.38)'},
});

export default PayslipCardStyles;
