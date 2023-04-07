const Notification = (props) => {
const{img,text} = props
return (
  <div>
  <h1>{text}</h1>
  <img src={img}/>
  
  </div>
)
};

const element = (
  <div>
    <div className="xx">
      <h1>Notifications</h1>

      <div className="blue">
        <div className="x">
         <Notification img ="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"/>
          <Notification Text = 'Information Message'/>
        </div>
      </div>

      <div className="green">
        <div className="x">
        <Notification img="https://assets.ccbp.in/frontend/react-js/success-icon-img.png" />
         <Notification text='Success message'/>
        </div>
      </div>

      <div className="yellow">
        <div className="x">
          <Notifaction img ="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png" />
          <Notification text ='Warning message'/>
        </div>
      </div>

      <div className="red">
        <div className="x">
           <Notification img ="https://assets.ccbp.in/frontend/react-js/danger-icon-img.png" />
          <Notification text ='Danger message'/>
        </div>
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
