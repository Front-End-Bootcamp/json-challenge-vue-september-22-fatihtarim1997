import data from "../data/data.json" assert { type: "json" };

const getGroup = (groupName) => {
	const selectGroup = {// SEçilen grubun gösterileceği değişken
		group: groupName,
		name: [],
		assistant: "",
	};
	data.forEach((item) => { // Değikene seçilen grubun öğrencilerin eklenmesi 
		if (item.group === groupName && item.type === null) {
			selectGroup.name.push(item.name);
		}
		if (item.group === groupName && item.type !== null) { // Değişkene seçilen grubun asistanının eklenmesi
			selectGroup.assistant = item.name;
		}
	});
	console.log(selectGroup);
};

getGroup("SteelBlue");
