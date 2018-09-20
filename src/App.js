import React, { Component } from 'react';
import './App.css';
class App extends Component {
  state = {
    appcard: [],
    bannercard: []
  }
  componentDidMount() {
    var xhttp = new XMLHttpRequest();
    xhttp.open("GET", "http://54.159.197.120:3000/squashStore", false);
    xhttp.send();
    var JS = JSON.parse(xhttp.responseText);

    var xhttp1 = new XMLHttpRequest();
    xhttp1.open("GET", "http://54.159.197.120:3000/listBanners", false);
    xhttp1.send();
    var JS1 = JSON.parse(xhttp1.responseText);
    this.setState({
      appcard: JS,
      bannercard: JS1
    })
    console.log("Baner", this.state.bannercard);


  }

  createApp = () => {
    var req = new Request("http://54.159.197.120:3000/updateStore", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({ mimage: document.getElementById('mimage').value, mname: document.getElementById('mname').value, murl: document.getElementById('murl').value, mcat: document.getElementById('mcat').value })
    })
    fetch(req).then(function (res) {
      console.log("RESSSS", res);
      if (res.status === 200) {
        window.location.reload();
      }
      


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
      if (res.status === 200) {
        window.location.reload();
        //inga edha tick symbol pop agura mari vai da.. like success message
      }
    });
  }
  createBanner = () => {
    var req = new Request("http://54.159.197.120:3000/createBanner", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({ bimg: document.getElementById('ban-image').value, burl: document.getElementById('ban-url').value, btype: document.getElementById('ban-type').value })
    })
    fetch(req).then(function (res) {
      console.log("RESSSS", res);
      if (res.status === 200) {
        window.location.reload();

      }

    });
  }
  deleteBanner = () => {
    var req = new Request("http://54.159.197.120:3000/deleteBanner", {
      method: "POST",
      headers: new Headers({ "Content-Type": "application/json" }),
      body: JSON.stringify({ bimg: document.getElementById('del-image').value })
    })
    fetch(req).then(function (res) {
      console.log("RESSSS", res);
      if (res.status === 200) {
        window.location.reload();
      }

    });
  }

  render() {
    var list = this.state.appcard.map(appcard => {
      return (<li>{appcard.mname}</li>)
    });
    console.log("list", list);
    var banlist = this.state.bannercard.map(bannercard => {
      return (<li>{bannercard.bimg}</li>)
    });
    console.log("list", banlist);
    return (
      <div className="App">
        <nav className="nav-container">
          <span>Squash Dashboard</span>
        </nav>
        <div className="flex-container">
          <div className="AddApp div">
            <h3>Add Apps</h3>
            <input id="mimage" type="text" placeholder="Image URL" className="text-view" /><br />
            <input id="mname" type="text" placeholder="App Name" className="text-view" /><br />
            <input id="murl" type="text" placeholder="App Link" className="text-view" /><br />
            <input id="mcat" type="text" placeholder="App Category" className="text-view" /><br /><br />

            <input type="button" value="Create App" className="button" onClick={this.createApp} />
          </div>
          <div className="ListApp div">
            <h3>List Apps</h3>
            <div className="scroll">
              <ul>
                {list}
              </ul>
            </div>

          </div>
          <div className="DelApp div">
            <h3>Delete Apps</h3>
            <input type="text" id="mname-del" placeholder="App Name" className="text-view" /><br /><br />
            <input type="button" value="Delete App" className="button" onClick={this.deleteApp} />

          </div>
          <div className="Banner div">
            <h3>Add Banner</h3>
            <input id="ban-image" type="text" placeholder="Banner Image URL" className="text-view" /><br />
            <input id="ban-url" type="text" placeholder="Banner Redirect URL" className="text-view" /><br />
            <input id="ban-type" type="text" placeholder="Banner-Type" className="text-view" /><br /><br />
            <input type="button" value="Create Banner" className="button" onClick={this.createBanner} />
          </div>
          <div className="Banner div">
            <h3>List Banners</h3>
            <div className="scroll">
              <ul>
                {banlist}
              </ul>
            </div>
          </div>
          <div className="Banner div">
            <h3>Delete Banner</h3>
            <input id="del-image" type="text" placeholder="Banner Image URL" className="text-view" /><br />
            <input type="button" value="Delete Banner" className="button" onClick={this.deleteBanner} />
          </div>

        </div>
      </div>
    );
  }
}

export default App;
