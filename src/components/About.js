import React from 'react';

function About() {
  return (
    <div className="container my-4">
      <div className="row">
        <h2 className="col-12 display-2">About</h2>
      </div>
      <div className="row ">
        <div className="col-12 aboutTextContent mt-2">
          Welcome to MyNotebook, your go-to platform for streamlined
          note-taking, task management, and future planning. Powered by the MERN
          (MongoDB, Express.js, React, Node.js) stack, our small but mighty
          project is designed to simplify your daily life by providing a
          seamless and efficient way to organize your thoughts, tasks, and
          reminders.
        </div>
      </div>
      <div className="row mt-4 ">
        <div className="col-12 aboutTextContent ">
          <h4 className="col-12 display-4">What We Offer:</h4>
          <div
            className="accordion mx-auto"
            id="accordionExample"
            style={{ maxWidth: '1100px' }}
          >
            <div className="accordion-item mt-4">
              <h2 className="accordion-header">
                <button
                  className="accordion-button aboutTextContent2"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseOne"
                  aria-expanded="true"
                  aria-controls="collapseOne"
                >
                  Notes:
                </button>
              </h2>
              <div
                id="collapseOne"
                className="accordion-collapse collapse show"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body aboutTextContent2">
                  Easily jot down your
                  <strong> ideas, thoughts, and important information </strong>
                  with our intuitive <code>note-taking</code> feature. Whether
                  you're brainstorming for a project or simply want to capture a
                  moment of inspiration, our platform ensures that your notes
                  are organized and accessible whenever you need them.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed aboutTextContent2"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseTwo"
                  aria-expanded="false"
                  aria-controls="collapseTwo"
                >
                  Todos:
                </button>
              </h2>
              <div
                id="collapseTwo"
                className="accordion-collapse collapse"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body aboutTextContent2">
                  Stay on top of your <strong> tasks and to-dos </strong> with
                  our powerful <code> task management system </code>. Create,
                  edit, and mark tasks as completed, helping you prioritize and
                  manage your workload effectively. Our user-friendly interface
                  ensures a hassle-free experience, allowing you to focus on
                  what matters most.
                </div>
              </div>
            </div>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button
                  className="accordion-button collapsed aboutTextContent2"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#collapseThree"
                  aria-expanded="false"
                  aria-controls="collapseThree"
                >
                  Reminders:
                </button>
              </h2>
              <div
                id="collapseThree"
                className="accordion-collapse collapse aboutTextContent2"
                data-bs-parent="#accordionExample"
              >
                <div className="accordion-body">
                  Never miss a <strong> deadline </strong> or forget an{' '}
                  <strong> important event </strong> again. With our{' '}
                  <code> email reminder </code> feature, you can set future
                  reminders for yourself. Receive timely notifications directly
                  to your inbox, keeping you informed and on track with your
                  commitments.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row mt-4">
        <div className="col-12 aboutTextContent mb-5">
          <h4 className="col-12 display-4">How It Works:</h4>
          Our MERN stack project leverages the latest technologies to provide a
          responsive and dynamic user experience. The MongoDB database ensures
          efficient data storage, while Express.js facilitates the smooth flow
          of information between the backend and frontend. The React frontend
          offers a modern and intuitive interface, while Node.js handles the
          server-side operations.
        </div>
      </div>
    </div>
  );
}

export default About;
