var groupmates = [
    {
        "name": "Михаил",
        "group": "1701",
        "age": 19,
        "marks": [5, 4, 3, 4, 5]
    },
    {
        "name": "Влдимир",
        "group": "1701",
        "age": 19,
        "marks": [4, 3, 5, 2, 5]
    },
    {
        "name": "Дмитрий",
        "group": "1702",
        "age": 23,
        "marks": [5, 5, 5, 5, 4]
    },
    {
        "name": "Анастасия",
        "group": "1702",
        "age": 20,
        "marks": [2, 2, 2, 2, 2]
    },
    {
        "name": "Алиса",
        "group": "1702",
        "age": 22,
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

var SortStudents = function(students, t)
{
    group = t;
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
