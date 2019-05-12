var groupmates = [
    {
        "name": "Василий",
        "group": "1701",
        "age": 19,
        "marks": [5, 4, 3, 4, 5]
    },
    {
        "name": "Ричард",
        "group": "1701",
        "age": 19,
        "marks": [4, 3, 5, 2, 5]
    },
    {
        "name": "Валентина",
        "group": "1708",
        "age": 23,
        "marks": [5, 5, 5, 5, 4]
    },
    {
        "name": "Георгий",
        "group": "1704",
        "age": 20,
        "marks": [2, 2, 2, 2, 2]
    },
    {
        "name": "Мсвати",
        "group": "1",
        "age": 50,
        "marks": [5, 4, 5, 5, 4]
    }
];

console.log(groupmates);

var rpad = function(str, length) {
	 str = str.toString();
	 while (str.length < length)
		  str = str + ' ';
	  return str;
};

var printStudents = function(students) {
	console.log(
		rpad("Имя студента", 15),
		rpad("Группа", 8),
		rpad("Возраст", 8),
		rpad("Оценки", 20),
	);
	for (var i = 0; i < students.length; i++) {
		console.log(
			rpad(students[i]['name'], 15),
			rpad(students[i]['group'], 8),
			rpad(students[i]['age'], 8),
			rpad(students[i]['marks'], 20),
		);
	}
	console.log('\n');
};

printStudents(groupmates);

var SortStudents = function(students)
{
	group = "1701";
	console.log("Сортировка по группе " + group);
	console.log(
		rpad("Имя студента", 15),
		rpad("Группа", 8),
		rpad("Возраст", 8),
		rpad("Оценки", 20),
	);
	for (var i = 0; i < students.length; i++) {
		if (students[i]['group'] == group) {
			console.log(
				rpad(students[i]['name'], 15),
				rpad(students[i]['group'], 8),
				rpad(students[i]['age'], 8),
				rpad(students[i]['marks'], 20),
			);
		}
	}
	console.log('\n');
};

SortStudents(groupmates);

var foldBtns = document.getElementsByClassName("fold-button");
var onePst = document.getElementsByClassName("one-post");

for (var i = 0; i < foldBtns.length; i++) {
	foldBtns[i].addEventListener("click", function(e) {
		if (e.target.className == "fold-button folded") {
			e.target.innerHTML = "свернуть";
			e.target.className = "fold-button";
			var j;
			for (j = 0; j < foldBtns.length; j++) {
				if (e.target == foldBtns[j]) {
					break;
				}
			}
			onePst[j].classList.remove("folded");
		}
		else {
			e.target.innerHTML = "развернуть";
			e.target.className = "fold-button folded";
			var j;
			for (j = 0; j < foldBtns.length; j++) {
				if (e.target == foldBtns[j]) {
					break;
				}
			}
			onePst[j].classList.add("folded");
		}
	});
}






	
	
	