import React, { useContext, useState } from 'react';
import noteContext from '../context/notes/noteContext';
import globalContext from '../context/global/globalContext';

function Noteitem(props) {
  const gcontext = useContext(globalContext);
  const { showAlert } = gcontext;
  const context = useContext(noteContext);
  const { deleteNote } = context;
  const { note, updateNote, updateBtnId } = props;
  const [open, setOpen] = useState(false);
  let handleDesc = function () {
    if (note.description.length > 200 && !open) {
      return note.description.slice(0, 200) + '...';
    } else {
      return note.description;
    }
  };
  document.addEventListener('click', e => {
    if (e.target.id !== note._id + 'desc') {
      setOpen(false);
    }
  });

  return (
    <div className={`${open ? 'col-12' : 'col-md-4 col-lg-3'} my-2`}>
      <div className="glassBox card">
        <div className="card-body ">
          <h5 className="card-title"> {note.title}</h5>
          <p
            className="card-text"
            id={note._id + 'desc'}
            onClick={e => {
              if (
                e.target.id === note._id + 'desc' &&
                note.description.length > 200
              ) {
                setOpen(true);
              }
            }}
          >
            {handleDesc()}
          </p>
          <div className="d-flex justify-content-between">
            <div>
              <i
                className="fa-solid fa-trash-can mx-2"
                type="button"
                onClick={() => {
                  deleteNote(note._id);
                  showAlert('Deleted Successfully', 'success');
                }}
              ></i>
              <i
                className="fa-solid fa-pen-to-square mx-2"
                type="button"
                data-bs-toggle="modal"
                data-bs-target={`#${updateBtnId}`}
                onClick={() => {
                  updateNote(note);
                }}
              ></i>
            </div>
            <p className="card-text">
              <small>#{note.tag}</small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Noteitem;
