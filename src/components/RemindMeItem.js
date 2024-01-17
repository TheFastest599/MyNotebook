import React, { useContext, useState } from 'react';
import dayjs from 'dayjs';
import globalContext from '../context/global/globalContext';

// dayjs is a lightweight JavaScript date library for parsing, validating, manipulating, and formatting dates.
const utc = require('dayjs/plugin/utc');
// Importing the 'timezone' plugin to handle time zones
const timezone = require('dayjs/plugin/timezone');

// Adding the plugins to Day.js
dayjs.extend(utc);
dayjs.extend(timezone);

function RemindMeItem(props) {
  const { remindMe, updateBtnId, updateRemindMe, deleteRemindMe } = props;
  const gcontext = useContext(globalContext);
  const { showAlert } = gcontext;

  const [open, setOpen] = useState(false);
  let handleReminder = function () {
    if (remindMe.reminder.length > 200 && !open) {
      return remindMe.reminder.slice(0, 200) + '...';
    } else {
      return remindMe.reminder;
    }
  };
  document.addEventListener('click', e => {
    if (e.target.id !== remindMe._id + 'reminder') {
      setOpen(false);
    }
  });

  return (
    <div className={`${open ? 'col-12' : 'col-md-4 '} my-2`}>
      <div className="glassBox card">
        <div
          className="remindMeStatus"
          style={
            remindMe.status === 'completed'
              ? { backgroundColor: 'rgb(0, 211, 0)' }
              : { backgroundColor: 'rgb(255, 234, 0)' }
          }
        ></div>
        <div className="card-body ">
          <h5 className="card-title"> {remindMe.title}</h5>
          <p
            className="card-text"
            id={remindMe._id + 'reminder'}
            onClick={e => {
              if (
                e.target.id === remindMe._id + 'reminder' &&
                remindMe.reminder.length > 200
              ) {
                setOpen(true);
              }
            }}
          >
            {handleReminder()}
          </p>
          <div className="d-flex justify-content-between">
            <div>
              <i
                className="fa-solid fa-trash-can mx-2"
                type="button"
                onClick={() => {
                  deleteRemindMe(remindMe._id);
                  showAlert('Deleted Successfully', 'success');
                  // console.log('Remind Me deleted');
                }}
              ></i>
              <button
                className="fa-solid fa-pen-to-square mx-2 edit"
                type="button"
                data-bs-toggle="modal"
                data-bs-target={`#${updateBtnId}`}
                onClick={() => {
                  // console.log('Remind Me updated');
                  updateRemindMe(remindMe);
                }}
                style={{ backgroundColor: 'transparent', border: 'none' }}
                disabled={remindMe.status === 'completed'}
              ></button>
            </div>
            <p className="card-text">
              <small>
                {`Set for : ${dayjs
                  .unix(remindMe.dateTimeUtcUnix)
                  .local()
                  .format('DD-MM-YYYY HH:mm')} . ${
                  remindMe.status === 'completed' ? 'Completed' : 'Pending'
                }`}
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default RemindMeItem;
