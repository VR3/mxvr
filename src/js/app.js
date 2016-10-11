import 'aframe';
import 'babel-polyfill';
import {Animation, Entity, Scene} from 'aframe-react';
import React from 'react';
import ReactDOM from 'react-dom';

import Camera from './components/Camera';
import Cursor from './components/Cursor';
import Sky from './components/Sky';

class MXVRScene extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: 'red'
    }
  }

  changeColor = () => {
    const colors = ['red', 'orange', 'yellow', 'green', 'blue'];
    this.setState({
      color: colors[Math.floor(Math.random() * colors.length)],
    });
  };

  //Open Window _blank in facebook
  gotoFacebook = () => {
    window.open('http://facebook.com/mxvrco');
  };

  //Open Window _blank in twitter
  gotoTwitter = () => {
    window.open('http://twitter.com/mxvrco');
  };

  //Open Window _blank in meetup
  gotoMeetup = () => {
    window.open('http://meetup.com/mxvrco');
  };


  //Get Random Image from mxvr.co/media/*/img/*.jpg;
  getRandImgFromMedia = () =>{
    var meetupNo;
    var imageNo;

    var imageSrc;

    meetupNo = Math.floor(Math.random()* 10);
    ("00"+meetupNo).substr(-2,2);
    
    imageSrc = 'http://mxvr.co/media/'+meetupNo+'/img/001.jpg';

    console.log("Image Source", imageSrc);


    return imageSrc;
  };


  getImageFromMedia = () =>{
    var imageUrl;
    $.ajax({
      type: "POST",
      url: "http://mxvr.co/src/php/getimage.php",
      success: function (data) {
        console.log(data);
        imageUrl = data;
      }
    });
  };


  render () {
    return (
      <Scene>

        <a-assets>
          //---- 3D Assets
          //MXVR Logo
          <a-asset-item id="mxvr-obj" src="../obj/mxvr.obj"></a-asset-item>
          <a-asset-item id="mxvr-mtl" src="../obj/mxvr.mtl"></a-asset-item>

          //MXVR Text Logo
          <a-asset-item id="mxvrtext-obj" src="../obj/mxvrtext-obj.obj"></a-asset-item>
          <a-asset-item id="mxvrtext-mtl" src="../obj/mxvrtext-obj.mtl"></a-asset-item>

          //Facebook Logo
          <a-asset-item id="facebook-obj" src="../obj/facebook.obj"></a-asset-item>
          <a-asset-item id="facebook-mtl" src="../obj/facebook.mtl"></a-asset-item>

          //Twitter Logo
          <a-asset-item id="twitter-obj" src="../obj/twitter.obj"></a-asset-item>
          <a-asset-item id="twitter-mtl" src="../obj/twitter.mtl"></a-asset-item>

          //Meetup Logo
          <a-asset-item id="meetup-obj" src="../obj/meetup.obj"></a-asset-item>
          <a-asset-item id="meetup-mtl" src="../obj/meetup.mtl"></a-asset-item>

          //SamsungGearVR
          <a-asset-item id="gearvr-obj" src="../obj/SamsungVRObj.obj"></a-asset-item>
          <a-asset-item id="gearvr-mtl" src="../obj/SamsungVRObj.mtl"></a-asset-item>

          //Apple
          <a-asset-item id="apple-obj" src="../obj/AppleObj.obj"></a-asset-item>
          <a-asset-item id="apple-mtl" src="../obj/AppleObj.mtl"></a-asset-item>

          //Android
          <a-asset-item id="android-obj" src="../obj/AndroidObj.obj"></a-asset-item>
          <a-asset-item id="android-mtl" src="../obj/AndroidObj.mtl"></a-asset-item>

          //Oculus
          <a-asset-item id="oculus-obj" src="../obj/OculusObj.obj"></a-asset-item>
          <a-asset-item id="oculus-mtl" src="../obj/OculusObj.mtl"></a-asset-item>

          //Laptop
          <a-asset-item id="laptop-obj" src="../obj/LaptopObj.obj"></a-asset-item>
          <a-asset-item id="laptop-mtl" src="../obj/LaptopObj.mtl"></a-asset-item>

          //GoPro
          <a-asset-item id="gopro-obj" src="../obj/GoProObj.obj"></a-asset-item>
          <a-asset-item id="gopro-mtl" src="../obj/GoProObj.mtl"></a-asset-item>

          //Phone
          <a-asset-item id="phone-obj" src="../obj/PhoneObj.obj"></a-asset-item>
          <a-asset-item id="phone-mtl" src="../obj/PhoneObj.mtl"></a-asset-item>

        </a-assets>

        <Camera><Cursor/></Camera>

        <Sky/>

        <Entity light={{type: 'ambient', color: '#888'}}/>
        <Entity light={{type: 'directional', intensity: 0.5}} position={[-1, 1, 0]}/>
        <Entity light={{type: 'directional', intensity: 1}} position={[1, 1, 0]}/>

        //Curved Images
        <a-curvedimage src="http://mxvr.co/media/09/img/001.jpg" radius="4" theta-length="30" height="1.5"
                     rotation="0 -75 0" scale=".6 .6 .6"></a-curvedimage>

        <a-curvedimage src="http://mxvr.co/media/08/img/001.jpg" radius="4" theta-length="30" height="1.5"
                     rotation="0 -30 0" scale=".6 .6 .6"></a-curvedimage>

        <a-curvedimage src="http://mxvr.co/media/07/img/001.jpg" radius="4" theta-length="30" height="1.5"
                     rotation="0 15 0" scale=".6 .6 .6"></a-curvedimage>

        <a-curvedimage src="http://mxvr.co/media/01/img/001.jpg" radius="4" theta-length="30" height="1.5"
                     rotation="0 -75 0" scale=".6 .6 .6" position="0 1 0"></a-curvedimage>

        <a-curvedimage src="http://mxvr.co/media/02/img/001.jpg" radius="4" theta-length="30" height="1.5"
                     rotation="0 -30 0" scale=".6 .6 .6" position="0 1 0"></a-curvedimage>

        <a-curvedimage src="http://mxvr.co/media/06/img/001.jpg" radius="4" theta-length="30" height="1.5"
                     rotation="0 15 0" scale=".6 .6 .6" position="0 1 0"></a-curvedimage>

        <a-curvedimage src="http://mxvr.co/media/03/img/001.jpg" radius="4" theta-length="30" height="1.5"
                     rotation="0 -75 0" scale=".6 .6 .6" position="0 -1 0"></a-curvedimage>

        <a-curvedimage src="http://mxvr.co/media/04/img/001.jpg" radius="4" theta-length="30" height="1.5"
                     rotation="0 -30 0" scale=".6 .6 .6" position="0 -1 0"></a-curvedimage>

        <a-curvedimage src="http://mxvr.co/media/05/img/001.jpg" radius="4" theta-length="30" height="1.5"
                     rotation="0 15 0" scale=".6 .6 .6" position="0 -1 0"></a-curvedimage>


        //MXVR Logo
        <Entity obj-model={{obj: "#mxvr-obj", mtl: "#mxvr-mtl"}} 
                scale={[0.5, 0.5, 0.5]} position="0 0 -5">
          <Animation attribute="position" dur="2500" from="0 10 -10" to="0 4.5 -10"></Animation>
          <Animation attribute="scale" dur="2500" from="0.5 0.5 0.5" to="1 1 1"></Animation>
        </Entity>

        //MXVR Text
        <Entity obj-model={{obj: "#mxvrtext-obj", mtl: "#mxvrtext-mtl"}} 
                scale={[0.5, 0.5, 0.5]} position="0 0 -5">
          <Animation attribute="position" dur="2000" from="0 20 -15" to="0 2 -10"></Animation>
          <Animation attribute="scale" dur="2500" from="0.25 0.25 0.25" to=".5 .5 .5"></Animation>
        </Entity>


        //Twitter Btn
        <Entity obj-model={{obj: "#twitter-obj", mtl: "#twitter-mtl"}}
                scale="0.09 0.09 0.09" position="-3 -1 -10"
                onClick={this.gotoTwitter}>
                <Animation attribute="position" dur="5000" from="-3 30 -20" to="-3 -1 -10"></Animation>
                <Animation attribute="rotation" begin="500" dur="430000" repeat="loop" to="0 360 0"/>
        </Entity>

        //Facebook Btn
        <Entity obj-model={{obj: "#facebook-obj", mtl: "#facebook-mtl"}}
                scale="0.09 0.09 0.09" position="0 -0.5 -10"
                onClick={this.gotoFacebook}>
                <Animation attribute="position" dur="5000" from="0 30 -20" to="0 -0.5 -10"></Animation>
                <Animation attribute="rotation" begin="2000" dur="30000" repeat="loop" to="0 360 0"/>
        </Entity>

        //Meetup Btn
        <Entity obj-model={{obj: "#meetup-obj", mtl: "#meetup-mtl"}}
                scale="0.095 0.09 0.09" position="3 -1 -10"
                onClick={this.gotoMeetup}>
                <Animation attribute="position" dur="5000" from="3 30 -20" to="3 -1 -10"></Animation>
                <Animation attribute="rotation" begin="1000" dur="30000" repeat="loop" to="0 360 0"/>
        </Entity>

        //SamsungGearVR
        <Entity obj-model={{obj: "#gearvr-obj"}} 
                scale="0.75 0.75 0.75"
                position="0 -2 -5">
          <Animation attribute="rotation" dur="8000" repeat="0" to="0 360 360"/>
          <Animation attribute="position" dur="8000" from="0 -10 -5" to="0 -4 -6"/>
        </Entity>

        //OculusVR
        <Entity obj-model={{obj: "#oculus-obj"}} 
                scale="0.5 0.5 0.5"
                position="-8 -4 -5"
                rotation="0 45 0">
          <Animation attribute="position" dur="8000" from="-8 -10 -5" to="-7 -5 -6"/>
        </Entity>

        //Phone
        <Entity obj-model={{obj: "#phone-obj"}} 
                material={{color: this.state.color}} 
                //onClick={this.changeColor}
                scale="0.6 0.6 0.6"
                position="6 0 -6"
                rotation="0 45 0">
          <Animation attribute="position" dur="8000" from="8 -10 -5" to="5 0 -5"/>
        </Entity>

        //Laptop
        <Entity obj-model={{obj: "#laptop-obj"}} 
                material={{color: this.state.color}} 
                //onClick={this.changeColor}
                scale="0.6 0.6 0.6"
                position="6 0 -6"
                rotation="0 45 0">
          <Animation attribute="position" dur="8000" from="-8 -10 -5" to="-5 0 -5"/>
        </Entity>

        //GoPro
        <Entity obj-model={{obj: "#gopro-obj"}} 
                material={{color: this.state.color}} 
                //onClick={this.changeColor}
                scale="0.4 0.4 0.4"
                position="8 -4 -5"
                rotation="0 -45 0">
          <Animation attribute="position" dur="8000" from="8 -10 -5" to="7 -5 -6"/>
        
        </Entity>

      </Scene>
    );
  }
}

ReactDOM.render(<MXVRScene/>, document.querySelector('.scene-container'));
