import React from "react";
import "./style.css";

function ProfileCardReadOnly(props) {
  return (


    <div>
      {/* <img src={props.image} className="card-img-top" alt={props.name} /> */}
      <div className="card-body" id="ProfileCardRO">
        <div className="card-body">
        <p>
          <strong>Name:</strong>{" "}
          <input
            value={props.name}
            name="name"
            onChange={props.handleInputChange}
          />
        </p>
        <p>
          <strong>ID:</strong>{" "}
          <input
            value={props.id}
            name="id"
            onChange={props.handleInputChange}
          />
        </p>
        <p>
          <strong>Membertype:</strong>{" "}
          <input
            value={props.membertype}
            name="membertype"
            onChange={props.handleInputChange}
          />{" "}
        </p>
        <p>
          <strong>Email:</strong>{" "}
          <input
            value={props.email}
            name="email"
            onChange={props.handleInputChange}
          />{" "}
        </p>
        <p>
          <strong>phone:</strong>{" "}
          <input
            value={props.phone}
            name="phone"
            onChange={props.handleInputChange}
          />{" "}
        </p>
        <p>
          <strong>textaddress:</strong>{" "}
          <input
            value={props.textaddress}
            name="textaddress"
            onChange={props.handleInputChange}
          />
        </p>
        <p>
          <strong>allergies:</strong>{" "}
          <input
            value={props.allergies}
            name="allergies"
            onChange={props.handleInputChange}
          />{" "}
        </p>
        <p>
          {" "}
          <strong>medication:</strong>{" "}
          <input
            value={props.medication}
            name="medication"
            onChange={props.handleInputChange}
          />{" "}
        </p>
      </div>
      </div>

    </div>
  );
}

export default ProfileCardReadOnly;

    // <div className="card">
    //   <div className="img-container">
    //     <img alt={props.name} src={props.image} />
    //   </div>
    //   <div className="content">
    //     <ul>
    //       <li>
    //         <strong>EDIT:</strong> <input value={props.name} name="name" onChange={props.handleInputChange}/>
    //       </li>
    //       <li>
    //         <strong>ID:</strong> <input value={props.id} name="id" onChange={props.handleInputChange}/>
    //       </li>
    //       <li>
    //         <strong>Membertype:</strong> <input value={props.membertype} name="membertype" onChange={props.handleInputChange}/>
    //       </li>
    //       <li>
    //         <strong>email:</strong> <input value={props.email} name="email" onChange={props.handleInputChange}/>
    //       </li>
    //       <li>
    //         <strong>dob:</strong>  <input value={props.dob} name="dob" onChange={props.handleInputChange}/>
    //       </li>
    //       <li>
    //         <strong>phone:</strong> <input value={props.phone} name="phone" onChange={props.handleInputChange}/>
    //       </li>
    //       <li>
    //         <strong>textaddress:</strong>  <input value={props.textaddress} name="textaddress" onChange={props.handleInputChange}/>
    //       </li>
    //       <li>
    //         <strong>allergies:</strong>  <input value={props.allergies} name="allergies" onChange={props.handleInputChange}/>
    //       </li>
    //       <li>
    //         <strong>medication:</strong>  <input value={props.medication} name="medication" onChange={props.handleInputChange}/>
    //       </li>
    //       <li>
    //         <strong>familyname:</strong>  <input value={props.familyname} name="familyname" onChange={props.handleInputChange}/>
    //       </li>
    //     </ul>
    //   </div>
    // </div>