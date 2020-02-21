sap.ui.jsview("cat.view.myview5",{
	
	getControllerName: function(){
		console.log("Mohd:STOP2");
		return "cat.controller.myctrl5";
	},
	
	createContent: function(oController){
		console.log("Mohd:STOP4");
			var oButton5 = new sap.m.Button("idBtn5",{
								text:"Caliculate",
								icon:"sap-icon://accept",	
								type:"Accept",
							    iconFirst:false,
								width:"150px",
							//TextDirection:"RTL",
								//enabled:false,
								press: function(){
									alert("Hi Mohammed");
								},
								tap: function(){ //this one is deprecated
									alert("Tapped me!!");
								}
			});
			
			console.log("Mohd:STOP5");
				var oInput5 = new sap.m.Input("idInp5",{
								description:"USD",
								fieldWidth: "150px",
								maxLength:10,
								//valueHelpOnly:true,
								submit: function(){
									alert("Enter Input "+ this.idInp5);
								}
			});
			console.log("Mohd:STOP6");
			var oLable5 = new sap.m.Label("idLab5", {
								text:"Enter Amount",
								required:true,
								textDirection:"RTL",
								textAlign:"Center",
								width:"250px"
								
			});
			console.log("Mohd:STOP7");
			var oImage5 = new sap.m.Image("idImg5",{
						src:"Images/Samreen.jpg",
						width:"10%",
						//mode:"Background"
						press: function(){
							alert("This is Samreen");
						}
			});
			console.log("Mohd:STOP8");
			var oChb5 = new sap.m.CheckBox("idChb5", {
							text:"SAP",
							selected:true,
							textAlign:"Right",
							//width:"100px",
							//editable:false,
							select: function(){
								alert("SAP is Selected");
							}
							
							
			});
			return [oLable5,oInput5,oChb5,oButton5,oImage5];
		}

	

});
