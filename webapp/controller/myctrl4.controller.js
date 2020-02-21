sap.ui.define(
	["sap/ui/core/mvc/Controller"],
	function(oSamreen){
		console.log("Mohd:STOP3");
		return oSamreen.extend("four.controller.myctrl4", {
			newButton: function(){
				alert("new Button clicked");
			}
		});
		
	});