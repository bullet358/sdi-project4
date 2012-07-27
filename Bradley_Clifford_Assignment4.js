alert("JavaScript works!");

/* 
Does a string follow a 123-456-7890 pattern like a phone number?
*/

var firstQuest = function(){
	 var phoneNum = new RegExp(/\B[0-9]{3}-[0-9]{3}-[0-9]{4}\B/);
		return phoneNum;
};


console.log(firstQuest);



/*
Does a string follow an aaa@bbb.ccc pattern like an email address?

*/


var secondQuest = function(){
	var emailAdd = new RegExp(/\b[A-Z a-z 0-9 ._%-]=+@[A-Z a-z 0-9 .]+\.[A-Z a-z]{2,4}\b/);
		return emailAdd;


};

console.log(secondQuest);



/*
Is the string a URL? Does it start with http:?

*/

var thirdQuest = function(){
	var webAdd = new RegExp(/\bh(t{2})p\b/);
		return webAdd;

};

console.log(thirdQuest)

/*
Title-case a string (split into words then uppercase the first letter of each word

*/

var fourthQuest = function(){
	var titleCase = new RegExp(/\b[A-Z]a-z 0-9+\b[A-Z]a-z 0-9+\b[A-Z]a-z 0-9+\b/);
		return titleCase;
};

console.log(fourthQuest);
/*
Given a string that is a list of things separated by a given string, as well as
another string separator, return a string with the first separator changed to the second: 

*/
var hugeFunc = {

var str = [a,b,c]

var newStr = str.replace(
		([1],/);
		([3],/);
	);




}