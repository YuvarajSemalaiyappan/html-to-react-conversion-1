import React from "react";


export default function card ({a,b,c,d,e,f,g,h,i,j,k}){

   return(
    
<div className="col-lg-4">
        <div className="card mb-5 mb-lg-0">
          <div className="card-body">
            <h5 className="card-title text-muted text-uppercase text-center">{a==="Plus" || a==="Pro" ? <strong>{a}</strong> : a}</h5>
            
            <h6 className="card-price text-center">{b}<span className="period">{c}</span></h6>
            <hr></hr>
            <ul className="fa-ul">
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{d}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{e}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{f}</li>
              <li><span className="fa-li"><i className="fas fa-check"></i></span>{g}</li>
              <li className={a==="Free" ? "text-muted" : ""}><span className="fa-li"><i className={`fas ${a==="Free" ? "fa-times" : "fa-check"}`}></i></span>{h}</li>
              <li className={a==="Free" ? "text-muted" : ""}><span className="fa-li"><i className={`fas ${a==="Free" ? "fa-times" : "fa-check"}`}></i></span>{i}</li>
              <li className={a==="Free" ? "text-muted" : ""}><span className="fa-li"><i className={`fas ${a==="Free" ? "fa-times" : "fa-check"}`}></i></span>{j}</li>
              <li className={a==="Free" || a==="Plus" ? "text-muted" : ""}><span className="fa-li"><i className={`fas ${a==="Free" || a=== "Plus" ? "fa-times" : "fa-check"}`}></i></span>{k}</li>
            </ul>
            <div className="d-grid">
              <a href="#" className="btn btn-primary text-uppercase">Button</a>
            </div>
          </div>
        </div>
      </div>

   )


}