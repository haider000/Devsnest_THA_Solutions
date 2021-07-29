// 1. Write a JavaScript program to list the properties of a JavaScript object.
// Sample object: var student = { name : "David Rayy", sclass : "VI", rollno : 12 };
// Sample Output: name,sclass,rollno

function propsOfObj(obj) {
  for (key in obj) {
    process.stdout.write(key + ",");
  }
}

var student = { name: "David Rayy", sclass: "VI", rollno: 12 };
propsOfObj(student);
