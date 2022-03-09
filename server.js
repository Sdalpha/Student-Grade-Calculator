const calcy = () => {
    let os = document.getElementById('os').value;
    let java = document.getElementById('java').value;
    let dsa = document.getElementById('dsa').value;
    let dbms = document.getElementById('dbms').value;
    let grades = " ";
    let totalGrades = parseFloat(os) + parseFloat(java) + parseFloat(dsa) + parseFloat(dbms);
    // alert("Total Marks = " + totalGrades);

    let percentage = totalGrades / 4;
    // alert("Persentage = " + percentage + "%");

    if (percentage <= 100 && percentage >= 80) {
        grades = 'A';
    } else if (percentage <= 79 && percentage >= 60) {
        grades = 'B';
    } else if (percentage <= 59 && percentage >= 50) {
        grades = 'C';
    } else if (percentage <= 49 && percentage >= 25) {
        grades = 'D';
    } else {
        grades = "Fail";
    }
    // alert("Grade : " + grades);

    document.getElementById('showData').innerHTML = `Out of 400 your total is ${totalGrades} and percentage is ${percentage}. Your grade is ${grades}.`
}