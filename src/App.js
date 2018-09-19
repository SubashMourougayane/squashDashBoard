import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {
  componentDidMount() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://54.159.197.120:3000/squashStore", false);
    xhttp.send();
    var JS = JSON.parse(xhttp.responseText);
    for (var i = 0; i < Object.keys(JS).length; i++) {
      console.log(i, JS[i].mname);
      // indha JS variable la irukuradhu APP LIST DIV la list aganum
    }

  }
  createBanner=()=>{
    console.log("createBanner");
  }
  createApp = () => {
    var req = new Request("http://54.159.197.120:3000/updateStore", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({ mimage: document.getElementById('mimage').value, mname: document.getElementById('mname').value, murl: document.getElementById('murl').value })
    })
    fetch(req).then(function (res) {
      console.log("RESSSS", res);
      if(res.status===200){
        //inga edha green clor tick symbol pop agura mari vai da.. like success message
      }
      document.getElementById('mname').value = "";
      document.getElementById('mimage').value = "";
      document.getElementById('murl').value = "";


    });
  }
  deleteApp = () => {
    var req = new Request("http://54.159.197.120:3000/deleteApp", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({ mname: document.getElementById('mname-del').value })
    })
    fetch(req).then(function (res) {
      console.log("RESSSS", res);
      if(res.status===200){
        //inga edha tick symbol pop agura mari vai da.. like success message
      }
    });
  }

  render() {


    return (
      <div className="App">
        <div className="flex-container">
          <div className="AddApp">
            <h3>Add Apps</h3>
            <input id="mimage" type="text" placeholder="Image URL" className="text-view" /><br />
            <input id="mname" type="text" placeholder="App Name" className="text-view" /><br />
            <input id="murl" type="text" placeholder="App Link" className="text-view" /><br /><br />
            <input type="button" value="Create App" className="button" onClick={this.createApp} />
          </div>
          <div className="ListApp">
            <h3>List Apps</h3>


          </div>
          <div className="DelApp">
            <h3>Delete Apps</h3>
            <input type="text" id="mname-del" placeholder="App Name" className="text-view" /><br /><br />
            <input type="button" value="Delete App" className="button" onClick={this.deleteApp} />

          </div>
          <div className="Banner">
            <h3>Banner</h3>
            <input id="ban-image" type="text" placeholder="Banner Image URL" className="text-view" /><br />
            <input id="ban-url" type="text" placeholder="Banner Redirect URL" className="text-view" /><br />
            <input id="ban-type" type="text" placeholder="Banner-Type" className="text-view" /><br /><br />
            <input type="button" value="Create Banner" className="button" onClick={this.createBanner} />
          </div>
         
        </div>
      </div>
    );
  }
}

export default App;
