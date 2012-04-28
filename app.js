//test git
// this sets the background color of the master UIView (when there are no windows/tab groups on it)
Titanium.UI.setBackgroundColor('#000');

// create tab group
var tabGroup = Titanium.UI.createTabGroup();


//
// create base UI tab and root window
//
var win1 = Titanium.UI.createWindow({ 
    url:'main/tabMain.js', 
    title:'摄影灰卡',
    backgroundColor:'#fff'
});
var tab1 = Titanium.UI.createTab({  
    icon:'images/buttons/brightness.png',
    title:'灰卡',
    window:win1
});


var win2 = Titanium.UI.createWindow({  
    url:'main/tabBrowse.js',
    title:'摄影宝典',
    backgroundColor:'#fff'
});
var tab2 = Titanium.UI.createTab({  
    icon:'images/buttons/bookmark.png',
    title:'摄影宝典',
    window:win2
});



var win3 = Titanium.UI.createWindow({  
	url:'main/tabAbout.js',
    title:'摄影灰卡 关于',
    backgroundColor:'#fff'
});
var tab3 = Titanium.UI.createTab({  
    icon:'images/buttons/hat.png',
    title:'关于软件',
    window:win3
});


//
//  add tabs
//
tabGroup.addTab(tab1);
tabGroup.addTab(tab2); 
tabGroup.addTab(tab3);


// open tab group
tabGroup.open();
