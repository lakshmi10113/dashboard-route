import React from 'react';
import { Button } from 'react-bootstrap';

function Card(props){
    return (
<div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{props.type.title}</h5>
            <h6 className="card-price text-center">${props.type.price}<span className="period">/month</span></h6>
            <hr />
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.type.title === "Free" ? <>{props.type.user}</> : <strong>{props.type.user}</strong>}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.type.storage}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.type.public_project}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{props.type.community_access}</li>
              <li className={props.type.private_project_enable ? "" :"text-muted"}><span className="fa-li"><i className={props.type.private_project_enable ? "fas fa-check" :"fas fa-times"}></i></span>{props.type.private_project}</li>
              <li className={props.type.phone_support_enable ? "" :"text-muted"}><span className="fa-li"><i className={props.type.phone_support_enable ? "fas fa-check" :"fas fa-times"}></i></span>{props.type.phone_support}</li>
              <li className={props.type.subdomain_enable ? "" :"text-muted"}><span className="fa-li"><i className={props.type.subdomain_enable ? "fas fa-check" :"fas fa-times"}></i></span><strong>{props.type.unlimited} </strong> {props.type.subdomain}
              </li>
              <li className={props.type.status_report_enable ? "" :"text-muted"}><span className="fa-li"><i className={props.type.status_report_enable ? "fas fa-check" :"fas fa-times"}></i></span> {props.type.status_report}</li>
            </ul>
            <div className="d-grid">
              <Button>BUTTON</Button>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Card;