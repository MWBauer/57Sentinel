var total;
var gradeCounter;
var grade;
var gradeValue;
var average;

total = 0;
gradeCounter = 0;
check = true;

/*while (check) {
  grade = window.prompt("Enter numberical score, -1 to Quit", "0");
  gradeValue = parseInt(grade);
  if (gradeValue == -1) {
    check = false;
    break;
  }
  total += gradeValue;
  gradeCounter++;
}

if (gradeCounter != 0) {
  console.log(total);
  average = total / gradeCounter;
  document.writeln(
    "<h1>The class average for " +
      gradeCounter +
      " students is " +
      average +
      ".</h1>"
  );
} else {
  document.writeln("<p>No grades were entered.</p>");
}*/






grade = window.prompt("Enter numerical score, -1 to Quit", "0");
gradeValue=parseInt(grade);

while(gradeValue != -1) {
total = total + gradeValue;
gradeCounter++ = gradeCounter + 1;

if(gradeCounter != 0) {
average = total / gradeCounter;
document.writeln("<h1>Class average is " + average + "</h1>");
}
else
  document.writeln("<p>No grades were entered.</p>");