import React from 'react';
import LeaveEditNApply from './LeaveEditNApply';

const LeaveEditNApplyContainer = ({navigation, route}) => {
  const leaveApplication = {
    leave: {
      leaveType: 'Annual leave',
      startDate: new Date(),
      endDate: new Date(2022, 3, 24),
      unitsTaken: '13.0000',
      leaveReason: 'Holiday',
    },
    listOfCommentsData: [
      {
        username: 'John Smith',
        date: '5m ago',
        comment:
          'This is an example of a comment left by an manager or approver on a Annual Leave Request.',
      },
      {
        username: 'Kate Black',
        date: '10m ago',
        comment:
          'This is an example of a comment left by a manager or approver on a Annual Leave Request. This is an example of a comment left by a manager or approver on a Annual Leave Request',
      },
      {
        username: 'John Smith',
        date: '1h ago',
        comment:
          'This is an example of a comment left by an manager or approver on a Annual Leave Request. This is an example of a comment left by a manager or approver on a Annual Leave Request',
      },
    ],
    attachments: [
      {
        month: 'Attachment-1',
        size: '24.2 MB',
      },
    ],
  };

  const leaveTypes = [
    {label: 'Family', value: 'Family'},
    {label: 'Sick leave', value: 'Sick leave'},
    {label: 'Maternity Leave', value: 'Maternity Leave'},
    {label: 'Annual leave', value: 'Annual leave'},
    {label: 'Paternity Leave', value: 'Paternity Leave'},
  ];

  const leaveReasons = [
    {label: 'TimeOff', value: 'TimeOff'},
    {label: 'family', value: 'family responsibility'},
    {label: 'Holiday', value: 'Holiday'},
  ];

  return (
    <>
      {route.params.hasData && (
        <LeaveEditNApply
          navigation={navigation}
          create={false}
          leave={leaveApplication.leave}
          leaveTypes={leaveTypes}
          leaveReasons={leaveReasons}
          comments={leaveApplication.listOfCommentsData}
          attachements={leaveApplication.attachments}
        />
      )}
      {!route.params.hasData && (
        <LeaveEditNApply
          navigation={navigation}
          create={true}
          leaveTypes={leaveTypes}
          leaveReasons={leaveReasons}
        />
      )}
    </>
  );
};

export default LeaveEditNApplyContainer;
