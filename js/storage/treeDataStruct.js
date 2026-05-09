class Node {
	constructor(name, parent, type) {
		this.name = name;
		this.parent = parent;
		this.children = [];
		this.type = type; // "room" "floor" "building"
	}
}

class TreeDataStruct {
	constructor() {
		this.root = null;
		this.hashMap = new Map();
		this.buildTree();
	}

	buildTree() {
		this.root = new Node('root', null, null);

		// ── First Gate ──
		const FIRSGate = new Node('First Gate', this.root, 'building');
		this.root.children.push(FIRSGate);
		this.hashMap.set(FIRSGate.name.toUpperCase(), FIRSGate);

		const FIRSGateGROUND = new Node('First Gate GROUND', FIRSGate, 'floor');
		FIRSGate.children.push(FIRSGateGROUND);
		this.hashMap.set(FIRSGateGROUND.name.toUpperCase(), FIRSGateGROUND);

		// ── Second Gate ──
		const SECOGate = new Node('Second Gate', this.root, 'building');
		this.root.children.push(SECOGate);
		this.hashMap.set(SECOGate.name.toUpperCase(), SECOGate);

		const SECOGateGROUND = new Node('Second Gate GROUND', SECOGate, 'floor');
		SECOGate.children.push(SECOGateGROUND);
		this.hashMap.set(SECOGateGROUND.name.toUpperCase(), SECOGateGROUND);

		// ── Back Gate ──
		const BACKGate = new Node('Back Gate', this.root, 'building');
		this.root.children.push(BACKGate);
		this.hashMap.set(BACKGate.name.toUpperCase(), BACKGate);

		const BACKGateGROUND = new Node('Back Gate GROUND', BACKGate, 'floor');
		BACKGate.children.push(BACKGateGROUND);
		this.hashMap.set(BACKGateGROUND.name.toUpperCase(), BACKGateGROUND);

		// ── School of Engineering (SOE) ──
		const SCHOOfEngineeringSOE = new Node('School of Engineering (SOE)', this.root, 'building');
		this.root.children.push(SCHOOfEngineeringSOE);
		this.hashMap.set(SCHOOfEngineeringSOE.name.toUpperCase(), SCHOOfEngineeringSOE);

		const SOEGROUND = new Node('SOE GROUND', SCHOOfEngineeringSOE, 'floor');
		SCHOOfEngineeringSOE.children.push(SOEGROUND);
		this.hashMap.set(SOEGROUND.name.toUpperCase(), SOEGROUND);

		const SOEGROUND_ROOMS = [
			['1AX'],
			['Engineering tuck shop'],
			['1A37'],
			['1A36'],
			['1A32'],
			['1a35'],
			['1a27'],
			['1a31'],
			['1a30'],
			['1a28'],
			['1a29'],
			['1a34'],
			['1a25'],
			['1a24'],
			['1a23'],
			['1a21'],
			['1a22'],
			['1a20'],
			['1a19'],
			['1a17'],
			['1a16'],
			['1a15'],
			['1a14b'],
			['1a14a'],
			['1a10'],
			['1a12'],
			['1a11'],
			['1a9'],
			['1a8b'],
			['1a8a'],
			['1a7b'],
			['1a7a'],
			['1a5'],
			['1a6'],
			['1a3'],
			['1a4'],
			['1a2a'],
			['1a1'],
		];

		SOEGROUND_ROOMS.forEach(([roomName]) => {
			const roomNode = new Node(roomName, SOEGROUND, 'room');
			SOEGROUND.children.push(roomNode);
			this.hashMap.set(roomName.toUpperCase(), roomNode);
		});

		const SOE1 = new Node('SOE 1', SCHOOfEngineeringSOE, 'floor');
		SCHOOfEngineeringSOE.children.push(SOE1);
		this.hashMap.set(SOE1.name.toUpperCase(), SOE1);

		const SOE1_ROOMS = [
			['FENC Student affair'],
			['1a58'],
			['1a68'],
			['1a67'],
			['1a59'],
			['1a66'],
			['1a65'],
			['1a60'],
			['1a64'],
			['1a61'],
		];

		SOE1_ROOMS.forEach(([roomName]) => {
			const roomNode = new Node(roomName, SOE1, 'room');
			SOE1.children.push(roomNode);
			this.hashMap.set(roomName.toUpperCase(), roomNode);
		});

		const SOE2 = new Node('SOE 2', SCHOOfEngineeringSOE, 'floor');
		SCHOOfEngineeringSOE.children.push(SOE2);
		this.hashMap.set(SOE2.name.toUpperCase(), SOE2);

		const SOE2_ROOMS = [
			['1b6'],
			['1b4'],
			['1b7'],
			['1b3'],
			['1b8'],
			['1b2'],
			['1b9'],
		];

		SOE2_ROOMS.forEach(([roomName]) => {
			const roomNode = new Node(roomName, SOE2, 'room');
			SOE2.children.push(roomNode);
			this.hashMap.set(roomName.toUpperCase(), roomNode);
		});

		const SOE3 = new Node('SOE 3', SCHOOfEngineeringSOE, 'floor');
		SCHOOfEngineeringSOE.children.push(SOE3);
		this.hashMap.set(SOE3.name.toUpperCase(), SOE3);

		const SOE3_ROOMS = [
			['1c13'],
			['1c2'],
			['1c11'],
			['1c4'],
			['1c10'],
			['1c5'],
			['1c6'],
		];

		SOE3_ROOMS.forEach(([roomName]) => {
			const roomNode = new Node(roomName, SOE3, 'room');
			SOE3.children.push(roomNode);
			this.hashMap.set(roomName.toUpperCase(), roomNode);
		});

		// ── School of Computing and Information Technology (SCIT) ──
		const SCHOOfComputingAndInformationTechnologySCIT = new Node('School of Computing and Information Technology (SCIT)', this.root, 'building');
		this.root.children.push(SCHOOfComputingAndInformationTechnologySCIT);
		this.hashMap.set(SCHOOfComputingAndInformationTechnologySCIT.name.toUpperCase(), SCHOOfComputingAndInformationTechnologySCIT);

		const SCITGROUND = new Node('SCIT GROUND', SCHOOfComputingAndInformationTechnologySCIT, 'floor');
		SCHOOfComputingAndInformationTechnologySCIT.children.push(SCITGROUND);
		this.hashMap.set(SCITGROUND.name.toUpperCase(), SCITGROUND);

		const SCITGROUND_ROOMS = [
			['Tech support (Tier1)'],
			['Lab A'],
			['Lab B'],
		];

		SCITGROUND_ROOMS.forEach(([roomName]) => {
			const roomNode = new Node(roomName, SCITGROUND, 'room');
			SCITGROUND.children.push(roomNode);
			this.hashMap.set(roomName.toUpperCase(), roomNode);
		});

		const SCIT1 = new Node('SCIT 1', SCHOOfComputingAndInformationTechnologySCIT, 'floor');
		SCHOOfComputingAndInformationTechnologySCIT.children.push(SCIT1);
		this.hashMap.set(SCIT1.name.toUpperCase(), SCIT1);

		const SCIT1_ROOMS = [
			['2b8'],
			['2b7'],
			['2b6'],
			['2b5'],
			['2b4'],
			['2b3'],
		];

		SCIT1_ROOMS.forEach(([roomName]) => {
			const roomNode = new Node(roomName, SCIT1, 'room');
			SCIT1.children.push(roomNode);
			this.hashMap.set(roomName.toUpperCase(), roomNode);
		});

		// ── College of Health Sciences (COHS) ──
		const COLLOfHealthSciencesCOHS = new Node('College of Health Sciences (COHS)', this.root, 'building');
		this.root.children.push(COLLOfHealthSciencesCOHS);
		this.hashMap.set(COLLOfHealthSciencesCOHS.name.toUpperCase(), COLLOfHealthSciencesCOHS);

		const COHSGROUND = new Node('COHS GROUND', COLLOfHealthSciencesCOHS, 'floor');
		COLLOfHealthSciencesCOHS.children.push(COHSGROUND);
		this.hashMap.set(COHSGROUND.name.toUpperCase(), COHSGROUND);

		const COHSGROUND_ROOMS = [
			['Lt 23'],
			['3A4'],
			['3A5'],
			['3A6'],
			['3A7A'],
			['3A9A'],
			['3A9B'],
			['3A10'],
			['3A16'],
			['3A18'],
		];

		COHSGROUND_ROOMS.forEach(([roomName]) => {
			const roomNode = new Node(roomName, COHSGROUND, 'room');
			COHSGROUND.children.push(roomNode);
			this.hashMap.set(roomName.toUpperCase(), roomNode);
		});

		const COHS1 = new Node('COHS 1', COLLOfHealthSciencesCOHS, 'floor');
		COLLOfHealthSciencesCOHS.children.push(COHS1);
		this.hashMap.set(COHS1.name.toUpperCase(), COHS1);

		const COHS1_ROOMS = [
			['3B5'],
			['3B6'],
			['3B7'],
			['3B17'],
		];

		COHS1_ROOMS.forEach(([roomName]) => {
			const roomNode = new Node(roomName, COHS1, 'room');
			COHS1.children.push(roomNode);
			this.hashMap.set(roomName.toUpperCase(), roomNode);
		});

		// ── Faculty of Built Environment (FOBE) ──
		const FACUOfBuiltEnvironmentFOBE = new Node('Faculty of Built Environment (FOBE)', this.root, 'building');
		this.root.children.push(FACUOfBuiltEnvironmentFOBE);
		this.hashMap.set(FACUOfBuiltEnvironmentFOBE.name.toUpperCase(), FACUOfBuiltEnvironmentFOBE);

		const FOBEGROUND = new Node('FOBE GROUND', FACUOfBuiltEnvironmentFOBE, 'floor');
		FACUOfBuiltEnvironmentFOBE.children.push(FOBEGROUND);
		this.hashMap.set(FOBEGROUND.name.toUpperCase(), FOBEGROUND);

		const FOBEGROUND_ROOMS = [
			['Lt4'],
			['4a2'],
			['4a3'],
			['4a4'],
			['4a5'],
			['4a6 Soil mechanics laboratory'],
			['4a7'],
			['4a8'],
			['4a9 concrete lab'],
			['4a10'],
			['4A11'],
			['4a12'],
			['4a16a'],
			['4a16b'],
			['4a17'],
		];

		FOBEGROUND_ROOMS.forEach(([roomName]) => {
			const roomNode = new Node(roomName, FOBEGROUND, 'room');
			FOBEGROUND.children.push(roomNode);
			this.hashMap.set(roomName.toUpperCase(), roomNode);
		});

		const FOBE1 = new Node('FOBE 1', FACUOfBuiltEnvironmentFOBE, 'floor');
		FACUOfBuiltEnvironmentFOBE.children.push(FOBE1);
		this.hashMap.set(FOBE1.name.toUpperCase(), FOBE1);

		const FOBE1_ROOMS = [
			['4b6 computer lab'],
			['4b4 SBLM office'],
			['4b3 reference room'],
			['4b5 conference room'],
			['4b2 CSA administration'],
			['4b9'],
			['4b10'],
			['4b11 computer lab'],
			['4b12'],
			['4b16'],
		];

		FOBE1_ROOMS.forEach(([roomName]) => {
			const roomNode = new Node(roomName, FOBE1, 'room');
			FOBE1.children.push(roomNode);
			this.hashMap.set(roomName.toUpperCase(), roomNode);
		});

		const FOBE2 = new Node('FOBE 2', FACUOfBuiltEnvironmentFOBE, 'floor');
		FACUOfBuiltEnvironmentFOBE.children.push(FOBE2);
		this.hashMap.set(FOBE2.name.toUpperCase(), FOBE2);

		const FOBE2_ROOMS = [
			['4c17'],
			['4c14'],
			['4c14a'],
			['4c13'],
			['4c12'],
			['4c9'],
			['4c8 computer lab'],
			['4c7 computer lab'],
			['4c6'],
			['4c5'],
		];

		FOBE2_ROOMS.forEach(([roomName]) => {
			const roomNode = new Node(roomName, FOBE2, 'room');
			FOBE2.children.push(roomNode);
			this.hashMap.set(roomName.toUpperCase(), roomNode);
		});

		const FOBE3 = new Node('FOBE 3', FACUOfBuiltEnvironmentFOBE, 'floor');
		FACUOfBuiltEnvironmentFOBE.children.push(FOBE3);
		this.hashMap.set(FOBE3.name.toUpperCase(), FOBE3);

		// ── School of Business Administration (SOBA) ──
		const SCHOOfBusinessAdministrationSOBA = new Node('School of Business Administration (SOBA)', this.root, 'building');
		this.root.children.push(SCHOOfBusinessAdministrationSOBA);
		this.hashMap.set(SCHOOfBusinessAdministrationSOBA.name.toUpperCase(), SCHOOfBusinessAdministrationSOBA);

		const SOBAGROUND = new Node('SOBA GROUND', SCHOOfBusinessAdministrationSOBA, 'floor');
		SCHOOfBusinessAdministrationSOBA.children.push(SOBAGROUND);
		this.hashMap.set(SOBAGROUND.name.toUpperCase(), SOBAGROUND);

		const SOBAGROUND_ROOMS = [
			['5a6'],
			['5a5'],
			['5a4'],
			['5a3'],
			['5a2'],
			['5a1'],
		];

		SOBAGROUND_ROOMS.forEach(([roomName]) => {
			const roomNode = new Node(roomName, SOBAGROUND, 'room');
			SOBAGROUND.children.push(roomNode);
			this.hashMap.set(roomName.toUpperCase(), roomNode);
		});

		const SOBA1 = new Node('SOBA 1', SCHOOfBusinessAdministrationSOBA, 'floor');
		SCHOOfBusinessAdministrationSOBA.children.push(SOBA1);
		this.hashMap.set(SOBA1.name.toUpperCase(), SOBA1);

		const SOBA1_ROOMS = [
			['5b1'],
			['5b2'],
			['5b3'],
		];

		SOBA1_ROOMS.forEach(([roomName]) => {
			const roomNode = new Node(roomName, SOBA1, 'room');
			SOBA1.children.push(roomNode);
			this.hashMap.set(roomName.toUpperCase(), roomNode);
		});

		const SOBA2 = new Node('SOBA 2', SCHOOfBusinessAdministrationSOBA, 'floor');
		SCHOOfBusinessAdministrationSOBA.children.push(SOBA2);
		this.hashMap.set(SOBA2.name.toUpperCase(), SOBA2);

		// ── College of Business and Management (COBAM) ──
		const COLLOfBusinessAndManagementCOBAM = new Node('College of Business and Management (COBAM)', this.root, 'building');
		this.root.children.push(COLLOfBusinessAndManagementCOBAM);
		this.hashMap.set(COLLOfBusinessAndManagementCOBAM.name.toUpperCase(), COLLOfBusinessAndManagementCOBAM);

		const COBAGROUND = new Node('COBAM GROUND', COLLOfBusinessAndManagementCOBAM, 'floor');
		COLLOfBusinessAndManagementCOBAM.children.push(COBAGROUND);
		this.hashMap.set(COBAGROUND.name.toUpperCase(), COBAGROUND);

		const COBA1 = new Node('COBAM 1', COLLOfBusinessAndManagementCOBAM, 'floor');
		COLLOfBusinessAndManagementCOBAM.children.push(COBA1);
		this.hashMap.set(COBA1.name.toUpperCase(), COBA1);

		const COBA1_ROOMS = [
			['22b1'],
			['22b2'],
			['22b3 lab'],
			['22b4 lab'],
		];

		COBA1_ROOMS.forEach(([roomName]) => {
			const roomNode = new Node(roomName, COBA1, 'room');
			COBA1.children.push(roomNode);
			this.hashMap.set(roomName.toUpperCase(), roomNode);
		});

		const COBA2 = new Node('COBAM 2', COLLOfBusinessAndManagementCOBAM, 'floor');
		COLLOfBusinessAndManagementCOBAM.children.push(COBA2);
		this.hashMap.set(COBA2.name.toUpperCase(), COBA2);

		const COBA2_ROOMS = [
			['22c2'],
		];

		COBA2_ROOMS.forEach(([roomName]) => {
			const roomNode = new Node(roomName, COBA2, 'room');
			COBA2.children.push(roomNode);
			this.hashMap.set(roomName.toUpperCase(), roomNode);
		});

		// ── Faculty of Sports and Science (FOSS) ──
		const FACUOfSportsAndScienceFOSS = new Node('Faculty of Sports and Science (FOSS)', this.root, 'building');
		this.root.children.push(FACUOfSportsAndScienceFOSS);
		this.hashMap.set(FACUOfSportsAndScienceFOSS.name.toUpperCase(), FACUOfSportsAndScienceFOSS);

		const FOSSGROUND = new Node('FOSS GROUND', FACUOfSportsAndScienceFOSS, 'floor');
		FACUOfSportsAndScienceFOSS.children.push(FOSSGROUND);
		this.hashMap.set(FOSSGROUND.name.toUpperCase(), FOSSGROUND);

		// ── Faculty of Education and Liberal Studies (FELS) ──
		const FACUOfEducationAndLiberalStudiesFELS = new Node('Faculty of Education and Liberal Studies (FELS)', this.root, 'building');
		this.root.children.push(FACUOfEducationAndLiberalStudiesFELS);
		this.hashMap.set(FACUOfEducationAndLiberalStudiesFELS.name.toUpperCase(), FACUOfEducationAndLiberalStudiesFELS);

		const FELSGROUND = new Node('FELS GROUND', FACUOfEducationAndLiberalStudiesFELS, 'floor');
		FACUOfEducationAndLiberalStudiesFELS.children.push(FELSGROUND);
		this.hashMap.set(FELSGROUND.name.toUpperCase(), FELSGROUND);

		const FELSGROUND_ROOMS = [
			['8a2 lab'],
			['8a3'],
			['8a1b'],
			['8a1a'],
			['8a4'],
			['8a6'],
			['Lt 9'],
			['Lt 10'],
		];

		FELSGROUND_ROOMS.forEach(([roomName]) => {
			const roomNode = new Node(roomName, FELSGROUND, 'room');
			FELSGROUND.children.push(roomNode);
			this.hashMap.set(roomName.toUpperCase(), roomNode);
		});

		const FELS1 = new Node('FELS 1', FACUOfEducationAndLiberalStudiesFELS, 'floor');
		FACUOfEducationAndLiberalStudiesFELS.children.push(FELS1);
		this.hashMap.set(FELS1.name.toUpperCase(), FELS1);

		const FELS1_ROOMS = [
			['8b1a'],
			['8b1b'],
			['8b5'],
			['8b2'],
			['Lt10b'],
		];

		FELS1_ROOMS.forEach(([roomName]) => {
			const roomNode = new Node(roomName, FELS1, 'room');
			FELS1.children.push(roomNode);
			this.hashMap.set(roomName.toUpperCase(), roomNode);
		});

		const FELS2 = new Node('FELS 2', FACUOfEducationAndLiberalStudiesFELS, 'floor');
		FACUOfEducationAndLiberalStudiesFELS.children.push(FELS2);
		this.hashMap.set(FELS2.name.toUpperCase(), FELS2);

		const FELS2_ROOMS = [
			['8c7a'],
			['8c6a'],
			['8c3'],
			['8c2 lab'],
			['8c11'],
			['8c2'],
			['8c1'],
			['Lt9b'],
		];

		FELS2_ROOMS.forEach(([roomName]) => {
			const roomNode = new Node(roomName, FELS2, 'room');
			FELS2.children.push(roomNode);
			this.hashMap.set(roomName.toUpperCase(), roomNode);
		});

		// ── Main Administration Building ──
		const MAINAdministrationBuilding = new Node('Main Administration Building', this.root, 'building');
		this.root.children.push(MAINAdministrationBuilding);
		this.hashMap.set(MAINAdministrationBuilding.name.toUpperCase(), MAINAdministrationBuilding);

		const MAINAdministrationBuildingGROUND = new Node('Main Administration Building GROUND', MAINAdministrationBuilding, 'floor');
		MAINAdministrationBuilding.children.push(MAINAdministrationBuildingGROUND);
		this.hashMap.set(MAINAdministrationBuildingGROUND.name.toUpperCase(), MAINAdministrationBuildingGROUND);

		const MAINAdministrationBuilding1 = new Node('Main Administration Building 1', MAINAdministrationBuilding, 'floor');
		MAINAdministrationBuilding.children.push(MAINAdministrationBuilding1);
		this.hashMap.set(MAINAdministrationBuilding1.name.toUpperCase(), MAINAdministrationBuilding1);

		const MAINAdministrationBuilding2 = new Node('Main Administration Building 2', MAINAdministrationBuilding, 'floor');
		MAINAdministrationBuilding.children.push(MAINAdministrationBuilding2);
		this.hashMap.set(MAINAdministrationBuilding2.name.toUpperCase(), MAINAdministrationBuilding2);

		// ── Student Union Business Office ──
		const STUDUnionBusinessOffice = new Node('Student Union Business Office', this.root, 'building');
		this.root.children.push(STUDUnionBusinessOffice);
		this.hashMap.set(STUDUnionBusinessOffice.name.toUpperCase(), STUDUnionBusinessOffice);

		const STUDUnionBusinessOfficeGROUND = new Node('Student Union Business Office GROUND', STUDUnionBusinessOffice, 'floor');
		STUDUnionBusinessOffice.children.push(STUDUnionBusinessOfficeGROUND);
		this.hashMap.set(STUDUnionBusinessOfficeGROUND.name.toUpperCase(), STUDUnionBusinessOfficeGROUND);

		// ── Nursing Department ──
		const NURSDepartment = new Node('Nursing Department', this.root, 'building');
		this.root.children.push(NURSDepartment);
		this.hashMap.set(NURSDepartment.name.toUpperCase(), NURSDepartment);

		const NURSDepartmentGROUND = new Node('Nursing Department GROUND', NURSDepartment, 'floor');
		NURSDepartment.children.push(NURSDepartmentGROUND);
		this.hashMap.set(NURSDepartmentGROUND.name.toUpperCase(), NURSDepartmentGROUND);

		const NURSDepartmentGROUND_ROOMS = [
			['NURS-A1'],
			['NURS-A2'],
			['NURS-LAB2'],
		];

		NURSDepartmentGROUND_ROOMS.forEach(([roomName]) => {
			const roomNode = new Node(roomName, NURSDepartmentGROUND, 'room');
			NURSDepartmentGROUND.children.push(roomNode);
			this.hashMap.set(roomName.toUpperCase(), roomNode);
		});

		const NURSDepartment1 = new Node('Nursing Department 1', NURSDepartment, 'floor');
		NURSDepartment.children.push(NURSDepartment1);
		this.hashMap.set(NURSDepartment1.name.toUpperCase(), NURSDepartment1);

		// ── School of Hospitality and Tourism Management (SHTM) ──
		const SCHOOfHospitalityAndTourismManagementSHTM = new Node('School of Hospitality and Tourism Management (SHTM)', this.root, 'building');
		this.root.children.push(SCHOOfHospitalityAndTourismManagementSHTM);
		this.hashMap.set(SCHOOfHospitalityAndTourismManagementSHTM.name.toUpperCase(), SCHOOfHospitalityAndTourismManagementSHTM);

		const SHTMGROUND = new Node('SHTM GROUND', SCHOOfHospitalityAndTourismManagementSHTM, 'floor');
		SCHOOfHospitalityAndTourismManagementSHTM.children.push(SHTMGROUND);
		this.hashMap.set(SHTMGROUND.name.toUpperCase(), SHTMGROUND);

		const SHTMGROUND_ROOMS = [
			['SHTM Conference Room'],
			['18A4'],
			['18A5'],
			['18A6'],
			['18A7'],
			['18A9'],
			['18A10'],
		];

		SHTMGROUND_ROOMS.forEach(([roomName]) => {
			const roomNode = new Node(roomName, SHTMGROUND, 'room');
			SHTMGROUND.children.push(roomNode);
			this.hashMap.set(roomName.toUpperCase(), roomNode);
		});

		const SHTM1 = new Node('SHTM 1', SCHOOfHospitalityAndTourismManagementSHTM, 'floor');
		SCHOOfHospitalityAndTourismManagementSHTM.children.push(SHTM1);
		this.hashMap.set(SHTM1.name.toUpperCase(), SHTM1);

		const SHTM1_ROOMS = [
			['18B1'],
			['18B2'],
			['18B5'],
			['18B7'],
			['18B8'],
			['18B9'],
		];

		SHTM1_ROOMS.forEach(([roomName]) => {
			const roomNode = new Node(roomName, SHTM1, 'room');
			SHTM1.children.push(roomNode);
			this.hashMap.set(roomName.toUpperCase(), roomNode);
		});

		const SHTM2 = new Node('SHTM 2', SCHOOfHospitalityAndTourismManagementSHTM, 'floor');
		SCHOOfHospitalityAndTourismManagementSHTM.children.push(SHTM2);
		this.hashMap.set(SHTM2.name.toUpperCase(), SHTM2);

		const SHTM3 = new Node('SHTM 3', SCHOOfHospitalityAndTourismManagementSHTM, 'floor');
		SCHOOfHospitalityAndTourismManagementSHTM.children.push(SHTM3);
		this.hashMap.set(SHTM3.name.toUpperCase(), SHTM3);

		// ── Computing and Engineering Entrepreneurial Centre (CEEC) ──
		const COMPAndEngineeringEntrepreneurialCentreCEEC = new Node('Computing and Engineering Entrepreneurial Centre (CEEC)', this.root, 'building');
		this.root.children.push(COMPAndEngineeringEntrepreneurialCentreCEEC);
		this.hashMap.set(COMPAndEngineeringEntrepreneurialCentreCEEC.name.toUpperCase(), COMPAndEngineeringEntrepreneurialCentreCEEC);

		const CEECGROUND = new Node('CEEC GROUND', COMPAndEngineeringEntrepreneurialCentreCEEC, 'floor');
		COMPAndEngineeringEntrepreneurialCentreCEEC.children.push(CEECGROUND);
		this.hashMap.set(CEECGROUND.name.toUpperCase(), CEECGROUND);

		const CEECGROUND_ROOMS = [
			['1A40'],
			['1A41'],
			['1A42'],
			['1A43'],
		];

		CEECGROUND_ROOMS.forEach(([roomName]) => {
			const roomNode = new Node(roomName, CEECGROUND, 'room');
			CEECGROUND.children.push(roomNode);
			this.hashMap.set(roomName.toUpperCase(), roomNode);
		});

		const CEEC1 = new Node('CEEC 1', COMPAndEngineeringEntrepreneurialCentreCEEC, 'floor');
		COMPAndEngineeringEntrepreneurialCentreCEEC.children.push(CEEC1);
		this.hashMap.set(CEEC1.name.toUpperCase(), CEEC1);

		const CEEC1_ROOMS = [
			['C1'],
			['C2'],
		];

		CEEC1_ROOMS.forEach(([roomName]) => {
			const roomNode = new Node(roomName, CEEC1, 'room');
			CEEC1.children.push(roomNode);
			this.hashMap.set(roomName.toUpperCase(), roomNode);
		});

		// ── Shared Facilities ──
		const SHARFacilities = new Node('Shared Facilities', this.root, 'building');
		this.root.children.push(SHARFacilities);
		this.hashMap.set(SHARFacilities.name.toUpperCase(), SHARFacilities);

		const SHARFacilitiesGROUND = new Node('Shared Facilities GROUND', SHARFacilities, 'floor');
		SHARFacilities.children.push(SHARFacilitiesGROUND);
		this.hashMap.set(SHARFacilitiesGROUND.name.toUpperCase(), SHARFacilitiesGROUND);

		const SHARFacilitiesGROUND_ROOMS = [
			['47a1'],
			['47a2'],
			['47a3o'],
			['47a4'],
			['47a5'],
			['47a6'],
			['47a7'],
			['47a8'],
		];

		SHARFacilitiesGROUND_ROOMS.forEach(([roomName]) => {
			const roomNode = new Node(roomName, SHARFacilitiesGROUND, 'room');
			SHARFacilitiesGROUND.children.push(roomNode);
			this.hashMap.set(roomName.toUpperCase(), roomNode);
		});

		const SHARFacilities1 = new Node('Shared Facilities 1', SHARFacilities, 'floor');
		SHARFacilities.children.push(SHARFacilities1);
		this.hashMap.set(SHARFacilities1.name.toUpperCase(), SHARFacilities1);

		const SHARFacilities1_ROOMS = [
			['47b1'],
			['47b2 Computer lab'],
			['47b3 Computer lab'],
			['47b4'],
			['47b5'],
			['47b6'],
			['47b7'],
			['47b8'],
		];

		SHARFacilities1_ROOMS.forEach(([roomName]) => {
			const roomNode = new Node(roomName, SHARFacilities1, 'room');
			SHARFacilities1.children.push(roomNode);
			this.hashMap.set(roomName.toUpperCase(), roomNode);
		});

		const SHARFacilities2 = new Node('Shared Facilities 2', SHARFacilities, 'floor');
		SHARFacilities.children.push(SHARFacilities2);
		this.hashMap.set(SHARFacilities2.name.toUpperCase(), SHARFacilities2);

		const SHARFacilities2_ROOMS = [
			['47c1'],
			['47c2'],
			['47c3'],
			['47c4'],
		];

		SHARFacilities2_ROOMS.forEach(([roomName]) => {
			const roomNode = new Node(roomName, SHARFacilities2, 'room');
			SHARFacilities2.children.push(roomNode);
			this.hashMap.set(roomName.toUpperCase(), roomNode);
		});

		// ── Drawing Room ──
		const DRAWRoom = new Node('Drawing Room', this.root, 'building');
		this.root.children.push(DRAWRoom);
		this.hashMap.set(DRAWRoom.name.toUpperCase(), DRAWRoom);

		const DRAWRoomGROUND = new Node('Drawing Room GROUND', DRAWRoom, 'floor');
		DRAWRoom.children.push(DRAWRoomGROUND);
		this.hashMap.set(DRAWRoomGROUND.name.toUpperCase(), DRAWRoomGROUND);

		// ── Chapel ──
		const CHAP = new Node('Chapel', this.root, 'building');
		this.root.children.push(CHAP);
		this.hashMap.set(CHAP.name.toUpperCase(), CHAP);

		const CHAPGROUND = new Node('Chapel GROUND', CHAP, 'floor');
		CHAP.children.push(CHAPGROUND);
		this.hashMap.set(CHAPGROUND.name.toUpperCase(), CHAPGROUND);

		// ── Auditorium ──
		const AUDI = new Node('Auditorium', this.root, 'building');
		this.root.children.push(AUDI);
		this.hashMap.set(AUDI.name.toUpperCase(), AUDI);

		const AUDIGROUND = new Node('Auditorium GROUND', AUDI, 'floor');
		AUDI.children.push(AUDIGROUND);
		this.hashMap.set(AUDIGROUND.name.toUpperCase(), AUDIGROUND);

		// ── Calvin McKain Library ──
		const CALVMcKainLibrary = new Node('Calvin McKain Library', this.root, 'building');
		this.root.children.push(CALVMcKainLibrary);
		this.hashMap.set(CALVMcKainLibrary.name.toUpperCase(), CALVMcKainLibrary);

		const CALVMcKainLibraryGROUND = new Node('Calvin McKain Library GROUND', CALVMcKainLibrary, 'floor');
		CALVMcKainLibrary.children.push(CALVMcKainLibraryGROUND);
		this.hashMap.set(CALVMcKainLibraryGROUND.name.toUpperCase(), CALVMcKainLibraryGROUND);

		const CALVMcKainLibrary1 = new Node('Calvin McKain Library 1', CALVMcKainLibrary, 'floor');
		CALVMcKainLibrary.children.push(CALVMcKainLibrary1);
		this.hashMap.set(CALVMcKainLibrary1.name.toUpperCase(), CALVMcKainLibrary1);

		// ── Faculty of Law (FOL) ──
		const FACUOfLawFOL = new Node('Faculty of Law (FOL)', this.root, 'building');
		this.root.children.push(FACUOfLawFOL);
		this.hashMap.set(FACUOfLawFOL.name.toUpperCase(), FACUOfLawFOL);

		const FOLGROUND = new Node('FOL GROUND', FACUOfLawFOL, 'floor');
		FACUOfLawFOL.children.push(FOLGROUND);
		this.hashMap.set(FOLGROUND.name.toUpperCase(), FOLGROUND);

		// ── Andrea Groceries ──
		const ANDRGroceries = new Node('Andrea Groceries', this.root, 'building');
		this.root.children.push(ANDRGroceries);
		this.hashMap.set(ANDRGroceries.name.toUpperCase(), ANDRGroceries);

		const ANDRGroceriesGROUND = new Node('Andrea Groceries GROUND', ANDRGroceries, 'floor');
		ANDRGroceries.children.push(ANDRGroceriesGROUND);
		this.hashMap.set(ANDRGroceriesGROUND.name.toUpperCase(), ANDRGroceriesGROUND);

		// ── The Barn - UTech Student Activity Centre ──
		const THEBarnUTechStudentActivityCentre = new Node('The Barn - UTech Student Activity Centre', this.root, 'building');
		this.root.children.push(THEBarnUTechStudentActivityCentre);
		this.hashMap.set(THEBarnUTechStudentActivityCentre.name.toUpperCase(), THEBarnUTechStudentActivityCentre);

		const THEBarnUTechStudentActivityCentreGROUND = new Node('The Barn - UTech Student Activity Centre GROUND', THEBarnUTechStudentActivityCentre, 'floor');
		THEBarnUTechStudentActivityCentre.children.push(THEBarnUTechStudentActivityCentreGROUND);
		this.hashMap.set(THEBarnUTechStudentActivityCentreGROUND.name.toUpperCase(), THEBarnUTechStudentActivityCentreGROUND);

		// ── Hotel ──
		const HOTE = new Node('Hotel', this.root, 'building');
		this.root.children.push(HOTE);
		this.hashMap.set(HOTE.name.toUpperCase(), HOTE);

		const HOTEGROUND = new Node('Hotel GROUND', HOTE, 'floor');
		HOTE.children.push(HOTEGROUND);
		this.hashMap.set(HOTEGROUND.name.toUpperCase(), HOTEGROUND);

		const HOTE1 = new Node('Hotel 1', HOTE, 'floor');
		HOTE.children.push(HOTE1);
		this.hashMap.set(HOTE1.name.toUpperCase(), HOTE1);

		// ── Burger King (BK) ──
		const BURGKingBK = new Node('Burger King (BK)', this.root, 'building');
		this.root.children.push(BURGKingBK);
		this.hashMap.set(BURGKingBK.name.toUpperCase(), BURGKingBK);

		const BKGROUND = new Node('BK GROUND', BURGKingBK, 'floor');
		BURGKingBK.children.push(BKGROUND);
		this.hashMap.set(BKGROUND.name.toUpperCase(), BKGROUND);

		// ── Juici Patties ──
		const JUICPatties = new Node('Juici Patties', this.root, 'building');
		this.root.children.push(JUICPatties);
		this.hashMap.set(JUICPatties.name.toUpperCase(), JUICPatties);

		const JUICPattiesGROUND = new Node('Juici Patties GROUND', JUICPatties, 'floor');
		JUICPatties.children.push(JUICPattiesGROUND);
		this.hashMap.set(JUICPattiesGROUND.name.toUpperCase(), JUICPattiesGROUND);

		// ── Office of Admissions and Enrolment Management ──
		const OFFIOfAdmissionsAndEnrolmentManagement = new Node('Office of Admissions and Enrolment Management', this.root, 'building');
		this.root.children.push(OFFIOfAdmissionsAndEnrolmentManagement);
		this.hashMap.set(OFFIOfAdmissionsAndEnrolmentManagement.name.toUpperCase(), OFFIOfAdmissionsAndEnrolmentManagement);

		const OFFIOfAdmissionsAndEnrolmentManagementGROUND = new Node('Office of Admissions and Enrolment Management GROUND', OFFIOfAdmissionsAndEnrolmentManagement, 'floor');
		OFFIOfAdmissionsAndEnrolmentManagement.children.push(OFFIOfAdmissionsAndEnrolmentManagementGROUND);
		this.hashMap.set(OFFIOfAdmissionsAndEnrolmentManagementGROUND.name.toUpperCase(), OFFIOfAdmissionsAndEnrolmentManagementGROUND);

		// ── Student Services Building ──
		const STUDServicesBuilding = new Node('Student Services Building', this.root, 'building');
		this.root.children.push(STUDServicesBuilding);
		this.hashMap.set(STUDServicesBuilding.name.toUpperCase(), STUDServicesBuilding);

		const STUDServicesBuildingGROUND = new Node('Student Services Building GROUND', STUDServicesBuilding, 'floor');
		STUDServicesBuilding.children.push(STUDServicesBuildingGROUND);
		this.hashMap.set(STUDServicesBuildingGROUND.name.toUpperCase(), STUDServicesBuildingGROUND);

		const STUDServicesBuilding1 = new Node('Student Services Building 1', STUDServicesBuilding, 'floor');
		STUDServicesBuilding.children.push(STUDServicesBuilding1);
		this.hashMap.set(STUDServicesBuilding1.name.toUpperCase(), STUDServicesBuilding1);

		// ── Sculpture Park ──
		const SCULPark = new Node('Sculpture Park', this.root, 'building');
		this.root.children.push(SCULPark);
		this.hashMap.set(SCULPark.name.toUpperCase(), SCULPark);

		const SCULParkGROUND = new Node('Sculpture Park GROUND', SCULPark, 'floor');
		SCULPark.children.push(SCULParkGROUND);
		this.hashMap.set(SCULParkGROUND.name.toUpperCase(), SCULParkGROUND);

		// ── NCB ──
		const NCB = new Node('NCB', this.root, 'building');
		this.root.children.push(NCB);
		this.hashMap.set(NCB.name.toUpperCase(), NCB);

		const NCBGROUND = new Node('NCB GROUND', NCB, 'floor');
		NCB.children.push(NCBGROUND);
		this.hashMap.set(NCBGROUND.name.toUpperCase(), NCBGROUND);

		// ── Scholarship Unit ──
		const SCHOUnit = new Node('Scholarship Unit', this.root, 'building');
		this.root.children.push(SCHOUnit);
		this.hashMap.set(SCHOUnit.name.toUpperCase(), SCHOUnit);

		const SCHOUnitGROUND = new Node('Scholarship Unit GROUND', SCHOUnit, 'floor');
		SCHOUnit.children.push(SCHOUnitGROUND);
		this.hashMap.set(SCHOUnitGROUND.name.toUpperCase(), SCHOUnitGROUND);

	}

	getHashMap() {
		return this.hashMap;
	}
}

export {TreeDataStruct};