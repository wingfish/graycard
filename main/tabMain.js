/*
2011.2.9.
2011.2.13.
2011.2.23.
*/

var card0 = [
	{url:'../images/gray.png'},
	{url:'../images/black.png'},
	{url:'../images/white.png'}
];

var win = Titanium.UI.currentWindow;

function ShowCard(index)
{
	var winCard = Titanium.UI.createWindow({backgroundImage:card0[index].url});
			
	var t = Ti.UI.iPhone.AnimationStyle.FLIP_FROM_LEFT;
	
	winCard.open({transition:t});
	
	winCard.addEventListener('doubletap', function()
	{
		winCard.close();
	});
	
	// show close button
	var btnCloseCard = Titanium.UI.createButton({
		title:'关闭',
		height:30,
		width:70,
		font:{fontSize:13, fontFamily:'Arial'},
		bottom:10,
		left:120
	});
	
	winCard.add(btnCloseCard);
	
	btnCloseCard.addEventListener('click',function()
	{
		winCard.close();
	});
}

var f = Ti.Filesystem.getFile(Titanium.Filesystem.resourcesDirectory,'/images/system/graycard_note.png');

var imageView = Titanium.UI.createImageView({
	image:f,
	top:15,
	left:5
});

win.add(imageView);


// showCard
var btnShowGray = Titanium.UI.createButton({
	title:'显示灰卡',
	height:30,
	width:100,
	font:{fontSize:13, fontFamily:'Arial'},
	bottom:10,
	left:20
});

btnShowGray.addEventListener('click', function()
{
	ShowCard(0);	
});

win.add(btnShowGray);

// show Black Card
var btnShowBlack = Titanium.UI.createButton({
	title:'显示黑卡',
	height:30,
	width:70,
	font:{fontSize:13, fontFamily:'Arial'},
	bottom:10,
	left:150
});

btnShowBlack.addEventListener('click', function()
{
	ShowCard(1);
});

win.add(btnShowBlack);

// show white Card
var btnShowWhite = Titanium.UI.createButton({
	title:'显示白卡',
	height:30,
	width:70,
	font:{fontSize:13, fontFamily:'Arial'},
	bottom:10,
	left:230
});

btnShowWhite.addEventListener('click', function()
{
	ShowCard(2);
});

win.add(btnShowWhite);






