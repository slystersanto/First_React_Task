import logo from './logo.svg';
import './App.css';

function App() {
  const getdata=[
    {
      title:"FREE",
      sub_title:"$0/month",
      notvalid:"❌",
      valid:"✔️",
    },
    {
      title:"PLUS",
      sub_title:"$9/month",
      notvalid:"❌",
      valid:"✔️",
    },
    {
      title:"PRO",
      sub_title:"$49/month",
      notvalid:"❌",
      valid:"✔️",
    },

  ];
  return (
    <div className='App'>
      {getdata.map((item,index)=>(
        <Subscription
        key={index}
        title={item.title}
        sub_title={item.sub_title}
        notvalid={item.notvalid}
        valid={item.valid}
        />
        ))}
    </div>
  );
}

export default App;


function Subscription(props){
  return(
   <div className='container'>
    <div className='cards'>
      <p className='title'>{props.title}</p>
        <p className='sub_title'>{props.sub_title}</p>
          <hr></hr>

          <ul>
            <li>{props.valid}Single User</li>
            <li>{props.valid}5GB Storage</li>
            <li>{props.valid}Unlimited Public Projects</li>
            <li>{props.valid}Community Access</li>
            <li>{props.notvalid}Unlimited Private Projects</li>
            <li>{props.notvalid}Dedicated Phone Support</li>
            <li>{props.notvalid}Free Subdomain</li>
            <li>{props.notvalid}Monthly Status Reports</li>
          </ul>
        <div>  <button className='btn-bottom' type="button"><b>BUTTON</b></button>

        </div>
      
    </div>
   </div>
  )
}
