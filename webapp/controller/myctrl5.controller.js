/*sap.ui.define(
	["sap/ui/core/mvc/Controller"], 
	function(oMmd){
		return oMmd.extend("cat.controller.myctrl5",{
		
	});
	
});
*/


sap.ui.define(
	["sap/ui/core/mvc/Controller"],
	function(oSamreen){
		console.log("Mohd:STOP3");
		return oSamreen.extend("cat.controller.myctrl5", {
				buttonPressed: function(oEvent){
					alert("Pressed Button-XML");
					var oCore = sap.ui.getCore();
					var oBtn = oCore.getElementById("idBtn5");
					var oSource = oEvent.getSource();
					var oParent1 = oSource.getParent();
					var oParent2 = oParent1.getParent();
					var oParent3 = oParent2.getParent();
					console.log(oSource);
					console.log(oParent1);
					console.log(oParent2);
					console.log(oParent3);
					console.log(oCore);
					console.log(oBtn);
				},
				inputPressed:function(){
					alert("Entered Input-XML");
				},
				imgPressed: function(){
					alert("Samreen-XML");
				},
				cboxPressed: function(){
					alert("SAP is Selected-XML");
				},
				onInit: function(){
					alert("onInit triggered");
				},
				onBeforeRendering: function(){
					alert("onBeforeRendering is triggered");
				},
				onExit:function(){
					alert("onExit is triggered");	
				},
				onAfterRendering: function(){
					alert("onAfterRendering is triggered");
				}
		});
		
	}); 