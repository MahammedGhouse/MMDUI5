sap.ui.jsview("chitti.view.main",{
		
		getControllerName: function(){
			return "chitti.controller.mycntrl";
		},
		createContent:function(oController){
			var oMdctrl = new sap.m.Button("idBtn",{
												text: "Click Button",
												icon: "sap-icon://wallet",
												press: function()
												{
													alert("Clicked Button");
												}
											});
				return oMdctrl;
		}
	});

	
/*sap.ui.jsview("chitti.view.main",{
	
	getControllerName: function(){
		return "chitti.controller.mycntrl";	
	},
	createContent: function(oSuperman){
		var oInp = new sap.m.Input();
		var oAnubhav = new sap.m.Button("idBtn",{
				text: "Anubhav Is here",
				icon: "sap-icon://add-employee",
				press: function(){
					alert("vannakam to UI5");
				}
			});
		return [oInp, oAnubhav];
	}	
});*/