/*
2011.2.6.

*/

// load images
var win = Titanium.UI.currentWindow;

//
// CREATE IMAGE VIEW
//

var f = Ti.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory,'/images/system/graycard_about.png');

var imageView = Titanium.UI.createImageView({
	image:f,
	top:0,
	left:5
});

win.add(imageView);
