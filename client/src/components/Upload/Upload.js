import React, { Component } from "react";
import Dropzone from "../Dropzone/Dropzone";
import "./Upload.css";
import Progress from "../Progress/Progress";
import API from "../../utils/API";

class Upload extends Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      uploading: false,
      uploadProgress: {},
      successfullUploaded: false,
      uploadType: props.uploadType,
      memberId: props.id,
      families: props.families,
      selectedFamily: props.selectedFamily,
      addresses: "",
      subject: props.subject,
      message: props.message
    };

    this.onFilesAdded = this.onFilesAdded.bind(this);
    this.uploadFiles = this.uploadFiles.bind(this);
    this.sendRequest = this.sendRequest.bind(this);
    this.renderActions = this.renderActions.bind(this);


  };

  onFilesAdded(files) {
    console.log('files ' + console.log(files));
    console.log(this.state.uploadType);

    this.setState(prevState => ({
      files: prevState.files.concat(files)
    }));

  };

  async uploadFiles() {
    this.setState({ uploadProgress: {}, uploading: true });

    var index = this.props.selectedFamily;
    var afamily = this.props.families[index];
    var address = afamily.addresses;
    //  var address = this.props.families[index].addresses;
    //make sure the address is set before proceeding
    this.setState({ addresses: address }, () => {
      console.log('addresses state ' + this.state.addresses);
    });

    const promises = [];

    // only upload files if not just email.
    if (this.state.files.length > 0) {
      this.state.files.forEach(file => {
        promises.push(this.sendRequest(file));
      });
      try {
        await Promise.all(promises);

        this.setState({ successfullUploaded: true, uploading: false });
      } catch (e) {
        // Not Production ready! Do some error handling here instead...
        this.setState({ successfullUploaded: true, uploading: false });
      }
    }
    //email without a file is not working
    else {
      const email = {
        "to": address, "subject": this.props.subject, "text": this.props.message,
        "filename": []
      };
      //if sending just an email, otherwise just uploading and sending
      API.sendEmail(email)
        .then(res => {
          this.setState({ successfullUploaded: true, uploading: false });
          if (res.data.status === "error") {
            throw new Error(res.data);
          }
        })
        .catch(err => {
          this.setState({ error: err.name })
          this.setState({ successfullUploaded: true, uploading: false });
        });
    };
  };

  sendRequest(file) {
    return new Promise((resolve, reject) => {
      const req = new XMLHttpRequest();
      req.upload.addEventListener("progress", event => {
        if (event.lengthComputable) {
          const copy = { ...this.state.uploadProgress };
          copy[file.name] = {
            state: "pending",
            percentage: (event.loaded / event.total) * 100
          };
          this.setState({ uploadProgress: copy });
        }
      });

      req.upload.addEventListener("load", event => {
        const copy = { ...this.state.uploadProgress };
        copy[file.name] = { state: "done", percentage: 100 };
        this.setState({ uploadProgress: copy });
        resolve(req.response);
      });

      req.upload.addEventListener("error", event => {
        const copy = { ...this.state.uploadProgress };
        copy[file.name] = { state: "error", percentage: 0 };
        this.setState({ uploadProgress: copy });
        reject(req.response);
      });

      const formData = new FormData();
      //file.name can be changed to what we want it called on the server, need to include file extension.
      let filename = file.name;
      if (this.state.uploadType === 'member') {
        filename = 'member' + this.state.memberId + '.' + file.name.split('.').pop();
      };
      console.log('filename ' + filename);

      formData.append("file", file, filename);

      console.log('formdata ' + JSON.stringify(formData))

      API.uploadFile(formData)
        .then(res => {
          console.log('res data' + JSON.stringify(res.data));

          if (this.state.uploadType === 'email') {
            const email = {
              "to": this.state.addresses, "subject": this.props.subject, "text": this.props.message,
              "filename": res.data.filename
            }
            //if sending an email, otherwise just uploading
            API.sendEmail(email)
              .then(res => {
                //this.setState({ successfullUploaded: true, uploading: false });
                if (res.data.status === "error") {
                  throw new Error(res.data);
                }
                resolve(req.response);
              });
          }
          else {
            //just uploading the file
            resolve(req.response);
          }
        });
    });
  };

  renderProgress(file) {
    const uploadProgress = this.state.uploadProgress[file.name];
    if (this.state.uploading || this.state.successfullUploaded) {
      return (
        <div className="ProgressWrapper">
          <Progress progress={uploadProgress ? uploadProgress.percentage : 0} />
          <img
            className="CheckIcon"
            alt="done"
            src="baseline-check_circle_outline-24px.svg"
            style={{
              opacity:
                uploadProgress && uploadProgress.state === "done" ? 0.5 : 0
            }}
          />
        </div>
      );
    }
  }

  renderActions() {
    if (this.state.successfullUploaded) {
      return (
        <button
          onClick={() =>
            this.setState({ files: [], successfullUploaded: false })
          }
        >
          Complete
        </button>
      );
    } else {
      return (
        //button will be disabled if they're sending email and no addresses, or a file load and no files.  Don't need a file for email.
        <button
          disabled={(this.state.uploadtype === 'email' && this.state.addressess === null) ||
            (this.state.uploadtype !== 'email' && (this.state.files.length < 0 || this.state.uploading))}
          onClick={this.uploadFiles}
        >
          Submit
        </button>
      );
    }
  }

  render() {
    return (
      <div className="Upload">
        {/*<span className="Title">Upload Files</span>*/}
        <div className="Content">
          <div>
            <Dropzone
              onFilesAdded={this.onFilesAdded}
              disabled={this.state.uploading || this.state.successfullUploaded}
            />
          </div>
          <div className="Files">
            {this.state.files.map(file => {
              return (
                <div key={file.name} className="Row">
                  <span className="Filename">{file.name}</span>
                  {this.renderProgress(file)}
                </div>
              );
            })}
          </div>
        </div>
        <div className="Actions">{this.renderActions()}</div>
      </div>
    );
  }
}

export default Upload;
