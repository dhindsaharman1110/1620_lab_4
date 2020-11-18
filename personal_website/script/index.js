let course1 ={
    code: "ACIT 1420",
    name: "Introduction to system Administration"
}

let course2 ={
    code: "ACIT 1620",
    name: "Web Fundamental Technologies"
}

let course3 ={
    code: "ACIT 1630",
    name: "Database Systems"
}

let courseList=[course1, course2, course3]

number_entered=prompt("Enter course code number (4-digit)")
while(number_entered.length != 4 || isNaN(number_entered)== true){
    number_entered=prompt("Enter course code number (4-digit)")
}

let check=0;

for (let i=0; i<courseList.length; i++){
    let course = courseList[i];
    if (courseList[i].code.includes(number_entered) == true){
        console.log("Yes, I am taking the course:" + courseList[i].code + "-" + courseList[i].name)
        check=1
    }
}

if (check == 0){
    let newcourse={
        code: number_entered,
        name: null
    }
    courseList.push(newcourse)
    console.log("Success, the course details are successfully added")
}