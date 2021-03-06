/*
2011.2.15. tuan

2011.2.16. edit the UI

v1.0.1

2011.3.5. add tabview browse + wordpress, copy from Tuan Project
2011.3.12. edit the tableview browser code
2011.3.13. add internet connection check
2011.3.13. add save picture for browser
*/


// data for tableview
var data = [

	{title:'摄影技巧',font:{fontSize:18,fontWeight:'bold'},leftImage: '../images/tableview/0_00.png',hasChild:true},
	{title:'后期处理',font:{fontSize:18,fontWeight:'bold'},leftImage: '../images/tableview/0_01.png',hasChild:true},
	{title:'美图欣赏',font:{fontSize:18,fontWeight:'bold'},leftImage: '../images/tableview/0_02.png',hasChild:true},
	{title:'导购评测',font:{fontSize:18,fontWeight:'bold'},leftImage: '../images/tableview/0_03.png',hasChild:true}
	];

// tableview object
var tableView = Titanium.UI.createTableView({
	backgroundColor:'transparent',
	data:data,
//	style:Titanium.UI.iPhone.TableViewStyle.PLAIN,
	top:10
});


// create table view data object
var data0 = [
	{title:'摄影技巧', url:'http://mingrihui.com/category/tips/',hasChild:true},
	{title:'后期处理', url:'http://mingrihui.com/category/study/',hasChild:true},
	{title:'美图欣赏', url:'http://mingrihui.com/category/photo/',hasChild:true},
	{title:'导购评测', url:'http://mingrihui.com/category/guide/',hasChild:true}
];

if (Titanium.Network.online == true)
{
	Ti.API.info('online true');
}
else
{
	var alertOnline = Titanium.UI.createAlertDialog({
		title:'互联网连接状态'
	//	message:'Hello World'
	});
	
	alertOnline.buttonNames = null; // unset in case you did 2/3rd and then back to 1st
	alertOnline.message = '没有检查到互联网连接，将影响在线访问';
	alertOnline.show();
	
	}


// create table view event listener
tableView.addEventListener('click', function(e)
{
	var w = Ti.UI.createWindow();
	
	var webMain = Ti.UI.createWebView({url:data0[e.index].url});
	w.add(webMain);
	
	var actInd = Titanium.UI.createActivityIndicator({
    	height: 50,
    	width: 10,
    	style:Titanium.UI.iPhone.ActivityIndicatorStyle.DARK
    });
	w.add(actInd);
            
    // test web controls
	var ButtonBar = Titanium.UI.createButtonBar({
		labels:['   关 闭   ','   后 退   ', '   刷 新   ', '   前 进   ', '   保 存   '],
		backgroundColor:'#003',
		style:Titanium.UI.iPhone.SystemButtonStyle.BAR
		});
			
	var flexSpace = Titanium.UI.createButton({
		systemButton:Titanium.UI.iPhone.SystemButton.FLEXIBLE_SPACE
		});
			
	w.setToolbar([flexSpace,ButtonBar,flexSpace]);
	
	ButtonBar.addEventListener('click',function(ce){
		if (ce.index == 0)
		{
			w.close();
		}
		if (ce.index == 1)
		{
			if (webMain.canGoBack()==true){
            	webMain.goBack();
            }
            else{
            	w.close();
            }
		}
		if (ce.index == 2)
		{
			webMain.reload();
		}
		if (ce.index == 3)
		{
			if (webMain.canGoForward()==true){
            	webMain.goForward();
        	}
        }
        if (ce.index == 4)
		{
			var f = webMain.toImage();
			Titanium.Media.saveToPhotoGallery(f);
			
			var alertSaveWeb = Titanium.UI.createAlertDialog({
				title:'图片保存',
				message:'当前页面内容已经保存到用户相册。'
			});
			alertSaveWeb.show();
			setTimeout(function()
			{
				alertSaveWeb.hide();
			},2000);
		}
	});        
 	w.open({modal:true});
 	w.hideNavBar();
 	
 	webMain.addEventListener('beforeload',function(e){
 		Ti.API.info('begin to load');	
 		actInd.show();
 	});
 	
 	webMain.addEventListener('load',function(e){
 		Ti.API.info('load ok');	
 		actInd.hide();
 	});
 	
 	
});


       
// add table view to the window
Titanium.UI.currentWindow.add(tableView);          