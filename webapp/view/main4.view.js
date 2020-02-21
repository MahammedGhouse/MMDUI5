sap.ui.jsview("four.view.main4",{
	
	getControllerName: function(){
		console.log("Mohd:STOP2");
		return "four.controller.myctrl4";
	},
	
	createContent: function(oController){
		console.log("Mohd:STOP4");
		var oCtrl4 = new sap.m.Button("idBt",{
									text:"Click me",
									icon: "sap-icon://business-objects-explorer",
									press: function(){
										alert("I am here");
									}
								
		});
		return oCtrl4;
	}
});