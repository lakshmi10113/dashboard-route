import './App.css';
import React from 'react';
// import { Button } from 'react-bootstrap';
import Card from './Card.js';
import {useState} from 'react';

function App() {
  const detail=[
  {
    title:"Free",
    price: 0,
    user: "Single User",
    storage: "5GB Storage",
    public_project: "Unlimited Public Projects",
    community_access:"Community Access",
    private_project:"Unlimited Private Projects",
    private_project_enable: false,
    phone_support:"Dedicated Phone Support",
    phone_support_enable: false,
    subdomain:"Free Subdomain",
    subdomain_enable:false,
    status_report: "Monthly Status Reports",
    status_report_enable: false
  },
  {
    title:"Plus",
    price: 10,
    user: "5 Users",
    storage: "50GB Storage",
    public_project: "Unlimited Public Projects",
    community_access:"Community Access",
    private_project:"Unlimited Private Projects",
    private_project_enable: true,
    phone_support:"Dedicated Phone Support",
    phone_support_enable: true,
    subdomain:"Free Subdomain",
    subdomain_enable:true,
    status_report: "Monthly Status Reports",
    status_report_enable: false
  },
  {
    title:"Pro",
    price: 29,
    user: "Unlimited Users",
    storage: "150GB Storage",
    public_project: "Unlimited Public Projects",
    community_access:"Community Access",
    private_project:"Unlimited Private Projects",
    private_project_enable: true,
    phone_support:"Dedicated Phone Support",
    phone_support_enable: true,
    subdomain:"Free Subdomain",
    subdomain_enable:true,
    status_report: "Monthly Status Reports",
    status_report_enable: true,
    unlimited:"Unlimited"
  }
];
  return (
    <div>
   
   <section class="pricing py-5">
  <div class="container">
    <div class="row">
      <Card type={detail[0]}/>
      <Card type={detail[1]}/>
      <Card type={detail[2]}/>

    </div>
  </div>
</section>




</div>
  );
}

export default App;
