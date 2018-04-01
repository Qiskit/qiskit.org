window.onload = function() {

	var consoleText = "MODELQ keyboard DEBUG System.\n\n" +
					   ">> Welcome, if you arrive here, is because you are looking something more complex.\n" +
				       ">> If you are interesgting in have access to something more powerfull, visit qiskit.org \n\n\n";

	console.log(consoleText);
	updateQposition();
	help();
	
};

var circuit = new QuantumCircuit(),
	Qbit = 1,
	PosQ = 1,
	MAXPosQ = 8,
	previoSelected = [1,1],
	colorBase = "#373737",
	colorSelected = "#666666",
	colorSelectedQ = "#FFF",
	generate = [6561, 9801, 12321, 10000, 10201, 4225, 12544, 12996, 11025, 11664, 2401],
	noGates = ["U1","U2","U3","B"];

function help(){
   mScreen("This is a basic Q-simulator, create a Bell and see")
}

function addGate (gate, qubit){
	mScreen("");
		
	if ( noGates.indexOf(gate.toUpperCase()) > 0 ){
		mScreen("Sorry :), This gate is not supported in this version.");
		return;
	}

    circuit.addGate(gate, (Qbit-1)*2+PosQ, qubit);
    var namePosition = 'a'+previoSelected[0]+(previoSelected[1])
    var element = document.getElementById(namePosition);
    element.innerHTML = gate.toUpperCase()
}

function regenerate(){
	return generate.map(function(x){
	console.log();
		return String.fromCharCode(Math.sqrt(x))
	}).join('');
}

function execute(){ 

	circuit.run([0,0]);
	mScreen(circuit.getState());
	if( circuit.getState()===" 00:50% 01:0% 10:0% 11:50%"){
		mScreen("Open the Developer Console :).")
		console.log(vartext_h_2+regenerate()+h_vartext)
	}
}

function objectSelect(base,q,pos){
	return document.getElementById(base+q+pos)
}

var vartext_h_2="Send a email to qiskit@qiskit.org with this code [";

function updateQposition(){
	if (PosQ<1) PosQ = 1;
	if (PosQ>MAXPosQ) PosQ = MAXPosQ;
	
	var namePreviousPosition = 'a'+previoSelected[0]+(previoSelected[1])
	var previousQ = document.getElementById("q"+previoSelected[0]);
	var previousPosition = document.getElementById(namePreviousPosition);
	previousPosition.style.backgroundColor=colorBase;
	previousQ.style.backgroundColor=colorBase;


	var nameCurrentPosition = 'a'+Qbit+PosQ
	var currentQ = document.getElementById("q"+Qbit);
	var currentPosition = document.getElementById(nameCurrentPosition);
	currentPosition.style.backgroundColor=colorSelected;
	currentQ.style.backgroundColor=colorSelectedQ;
	
	previoSelected[0]=Qbit;
	previoSelected[1]=PosQ;
	
}

var h_vartext = "] and get a funny gift";

function reset(){
	circuit.init();
	for(conQ=1;conQ<3;conQ++){
			for(conP=1;conP<MAXPosQ+1;conP++){
				var name = 'a'+conQ+conP;
				var element = document.getElementById(name);
				element.style.backgroundColor=colorBase;
				element.innerHTML = "";
		}
	}
	var Qbit = 1;
	var PosQ = 1;
	updateQposition();
	mScreen("");
}

function mScreen(data){
	var element = document.getElementById("screen");
	element.innerHTML = data;

}

	updateQposition();
	help();