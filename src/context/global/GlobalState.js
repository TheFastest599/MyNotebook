import { useState } from 'react';
import GlobalContext from './globalContext';

const GlobalState = props => {
  // Alert----------------------------
  const capitalize = word => {
    const lower = word.toLowerCase();
    return lower.charAt(0).toUpperCase() + lower.slice(1);
  };
  const showAlert = (text, type) => {
    const notitypes = ['alert-success', 'alert-danger', 'alert-primary'];
    for (let i = 0; i < notitypes.length; i++) {
      if (
        document.getElementById('notiAlert').classList.contains(notitypes[i])
      ) {
        document.getElementById('notiAlert').classList.remove(notitypes[i]);
      }
    }
    const notification = new window.bootstrap.Toast(
      document.getElementById('notification')
    );
    document.getElementById('notiAlert').classList.add(`alert-${type}`);
    document.getElementById('notifcationContent').innerHTML = `${capitalize(
      type
    )}: ${text}`;
    notification.show();
  };

  // ---------------------------------
  // Spinner---------------------------
  const [spinner, setSpinner] = useState(false);
  return (
    <GlobalContext.Provider value={{ showAlert, spinner, setSpinner }}>
      {props.children}
    </GlobalContext.Provider>
  );
};

export default GlobalState;
