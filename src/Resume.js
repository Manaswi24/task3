import React from 'react';
import data from './data/data.json';
import profileIcon from './profile.svg';

export default function Resume(props) {
      fetch('https://jsonplaceholder.typicode.com/posts')
     .then(Response=>Response.json())
     .then(data=>console.log(data))

    let info=data.profile[props.location.data.id]
    console.log(info.career)
return(
        <div className="row justify-content-center">
            <div className="col-lg-3 m-2">
                <div className="card shadow">
                    <div className="card-body text-center">
                        <img src={profileIcon} alt="profile Icon" style={{width:"30%"}}/>
                        <h2>{info.basics.name}</h2>
                        <h4 className="text-secondary">{info.basics.role}</h4>
                        <a href={"tel:"+info.basics.phone}>
                            <h4>{info.basics.phone}</h4>
                        </a>
              <a href={"mailto:"+info.basics.email}>
                <h4>{info.basics.email}</h4>
              </a>
                    </div>
               </div>
            </div>
            
                    <div className="col-lg-8 m-2">
                <div className="card shadow" >
                    <div className="card-body">
                        <h2>Career Object:</h2>
                        <hr />
                        <p>{info.career}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
