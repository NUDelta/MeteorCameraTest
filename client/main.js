import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './main.html';

Template.camera.onCreated(function() {

});

Template.camera.helpers({
  isMobile: function() {
    return Meteor.isCordova;
  }
});

Template.camera.events({
  'click #openCamera'(event) {
    CameraPreview.startCamera({x: 0, y:0, width: 640, height: 480, tapPhoto: false, camera: CameraPreview.CAMERA_DIRECTION.BACK }, function(imgData){

    });
  },
});
