/*const add = (a, b) => {
    return a + b;
};
const sub = (a, b) => {
    return a - b;
};
const name = "johan";

module.exports.add = add;
module.exports.sub = sub;*/

exports.myDateTime = function () {
return Date();

};

/*function evenNumberPrint(){
    for (var i = 2; i <= 20; i += 2) {
        return i;
    }
} 
evenNumberPrint();*/

/*function arraySort(){
    arr.sort()
    console.log(arr);
}
var arr = [3, 1, 8, 5, 2, 1];
arraySort();*/

/*const getDetails = function(name,company){
    return name + " is working in " + company
}
console.log(getDetails("Mike","Google"));*/

/*const getDetails = (name = "Mike",company = "Google") => name + " is working in " + company
console.log(getDetails());*/;

/*const getDetails = name => name + " is working in "
console.log(getDetails("Mike","Google"));*/

/*const student = {
    name: 'Johan',
    courseJoined: ['Node', 'Angular', 'Express'],
    dispCourses: ()=>{
        this.courseJoined.forEach((course) => {
            console.log(this.name + ' joined ' + course)
        })
    }
}
student.dispCourses()*/

function getBookRecommendations() {
    return [
       "Amit",
       "manoj"
    ];
}
module.exports.getBookRecommendations = getBookRecommendations;