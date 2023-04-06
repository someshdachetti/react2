const Notification = (props) => {};

const element = (
  <div>
    <div className="xx">
      <h1>Notifications</h1>

      <div className="blue">
        <div className="x">
          <img src="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png" />
          <h1 className="heading">Information message</h1>
        </div>
      </div>

      <div className="green">
        <div className="x">
          <img src="https://assets.ccbp.in/frontend/react-js/success-icon-img.png" />
          <h1 className="heading">Success message</h1>
        </div>
      </div>

      <div className="yellow">
        <div className="x">
          <img src="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png" />
          <h1 className="heading">Warning message</h1>
        </div>
      </div>

      <div className="red">
        <div className="x">
          <img src="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" />
          <h1 className="heading">Danger message</h1>
        </div>
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
