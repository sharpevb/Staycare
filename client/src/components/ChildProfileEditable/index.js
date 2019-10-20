import React, { Component } from "react";

// import "./style.css";

class ChildProfileEditable extends Component {
  state = {
    
  };


  inputs= [
      {
        label: "Name:",
        name: "name",
        value: this.props.name,
        editName: "nameEditable",
        editable: this.props.nameEditable
      },
      {
        label: "ID:",
        name: "id",
        value: this.props.id,
        editName: "idEditable",
        editable: this.props.idEditable
      },
      {
        label: "Member Type:",
        name: "membertype",
        value: this.props.membertype,
        editName: "membertypeEditable",
        editable: this.props.membertypeEditable
      }
    ]
  
    // {
    //   label: "Email:",
    //   value: this.props.email
    // },
    // {
    //   label: "DOB:",
    //   value: this.props.dob
    // },
    // {
    //   label: "Phone:",
    //   value: this.props.phone
    // },
    // {
    //   label: "Text address:",
    //   value: this.props.textaddress
    // },
    // {
    //   label: "Allergies:",
    //   value: this.props.allergies
    // },
    // {
    //   label: "Medication:",
    //   value: this.props.medication
    // },
    // {
    //   label: "Family Name:",
    //   value: this.props.familyname
    // }
  

  render() {
    //   return (
    //     <div>
    //     {this.state.isInEditMode
    //     ? this.renderEditView()
    //     : this.renderDefaultView()}
    return (
      <div className="card">
        <div className="card-img-top">
          <img
            alt={this.props.name}
            width="128px"
            src="https://i.kym-cdn.com/photos/images/original/000/225/119/2de.jpg"
          />
        </div>
        <div className="card-body" height="100%">
          <ul>
            {this.inputs.map(input => {
            console.log(input)
            console.log(input.editable);
            return (
              input.editable ? (
                <li key={input.name}>
                  <strong>{input.label}</strong>
                  <br />
                  <input
                    type="text"
                    value={input.value}
                     />
                  <button editable={input.editable} onClick={this.props.changeEditMode}>X</button>
                  <button name={input.name} value={input.value} onClick={this.props.onSave}>OK</button>
                </li>
              ) : (
                <div
                  key={input.name}
                  onDoubleClick={this.props.changeEditMode}
                  editname={input.editName}
                  editable={input.editable.toString()}
                >
                  {input.value}
                </div>
              ))}
            )}
            {/* <li>
            <strong>Name:</strong> <input type='text' value={this.props.name}/>
          </li>
          <li>
            <strong>Location:</strong> <input type='text' value={this.props.id}/>
          </li>
          <li>
            <strong>Occupation:</strong> {this.props.membertype}
          </li>
          <li>
            <strong>email:</strong> {this.props.email}
          </li>
          <li>
            <strong>dob:</strong> {this.props.dob}
          </li>
          <li>
            <strong>phone:</strong> {this.props.phone}
          </li>
          <li>
            <strong>textaddress:</strong> {this.props.textaddress}
          </li>
          <li>
            <strong>allergies:</strong> {this.props.allergies}
          </li>
          <li>
            <strong>medication:</strong> {this.props.medication}
          </li>
          <li>
            <strong>familyname:</strong> {this.props.familyname}
          </li> */}
          </ul>
        </div>
     
      </div>
    );
  }
}

export default ChildProfileEditable;

// function ChildProfileEditable(this.props) {
//   return (
//     <div className="card">
//       <div className="card-img-top">
//         <img alt={this.props.name} width="128px" src="https://i.kym-cdn.com/photos/images/original/000/225/119/2de.jpg" />
//       </div>
//       <div className="card-body" height="100%">
//         <ul>
//           <li>
//             {/* name='profile.name' is coming from state, will need to set each individual value from state. value={this.props.name} is  */}
//             <strong>Name:</strong> <input type='text' value={this.props.name}/>
//           </li>
//           <li>
//             <strong>Location:</strong> <input type='text' value={this.props.id}/>
//           </li>
//           <li>
//             <strong>Occupation:</strong> {this.props.membertype}
//           </li>
//           <li>
//             <strong>email:</strong> {this.props.email}
//           </li>
//           <li>
//             <strong>dob:</strong> {this.props.dob}
//           </li>
//           <li>
//             <strong>phone:</strong> {this.props.phone}
//           </li>
//           <li>
//             <strong>textaddress:</strong> {this.props.textaddress}
//           </li>
//           <li>
//             <strong>allergies:</strong> {this.props.allergies}
//           </li>
//           <li>
//             <strong>medication:</strong> {this.props.medication}
//           </li>
//           <li>
//             <strong>familyname:</strong> {this.props.familyname}
//           </li>
//         </ul>
//       </div>
//     </div>
//   );
// }

// export default ChildProfileEditable;
