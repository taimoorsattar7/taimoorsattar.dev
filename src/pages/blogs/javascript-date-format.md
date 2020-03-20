---
title: How to format Date in JavaScript that looks Clean
description: >-
  Javascript have a built in object called `Date`. `Date` object in javascript
  is used to work with Date and Time.
date: 2020-03-20T20:22:29.865Z
tags:
  - format
  - date
  - javascript
featuredpost: false
---
Javascript have a built in object called `Date`. `Date` object in javascript is used to work with Date and Time. In javascript, we use below command to get the current date.
```
var d = new Date();
alert( d ); // shows current date/time
```

The output will be like: `Tue Mar 17 2020 21:53:21 GMT+0300 (Arabian Standard Time)`. Date and Time may vary depending on your time to execution of the command.

You can return you the custom date by writing 7 numbers specified year, month, day, hour, minute, second, and millisecond (in sequence):

```
	var d = new Date(2020, 11, 24, 10, 33, 30, 0);
```

The above will return as follow: `Thu Dec 24 2020 10:33:30 GMT+0300 (Arabian Standard Time)`

Date object in javascript generally provide two types of function:

- getter function: Function used to `get` the date values.
- setters function: Function used to `set` the date values.

|Getter Function | Description |
|:--- |:---- |
|getFullYear() |	Get the year as a four digit number (yyyy) |
|getMonth() |	Get the month as a number (0-11) |
|getDate() |	Get the day as a number (1-31) |
|getHours() |	Get the hour (0-23) |
|getMinutes() |	Get the minute (0-59) |
|getSeconds() |	Get the second (0-59) |
|getMilliseconds() |	Get the millisecond (0-999) |
|getTime() |	Get the time (milliseconds since January 1, 1970) |
|getDay() |	Get the weekday as a number (0-6) |

The setter function are like getter and mention below:

|Setter Function | Description |
|:--- |:---- |
|setDate()|	Set the day as a number (1-31) |
|setFullYear()|	Set the year (month and day) |
|setHours()|	Set the hour (0-23) |
|setMilliseconds()|	Set the milliseconds (0-999) |
|setMinutes()|	Set the minutes (0-59) |
|setMonth()|	Set the month (0-11) |
|setSeconds()|	Set the seconds (0-59) |
|setTime()|	Set the time (milliseconds since January 1, 1970) |

Now you know the basic commands of date object in javascript. Now let's look at the example to show custom date format on the blogs publish section. We have to format the date like this `Mar 4,2020`.

In HTML, <time> datetime attribute tag is the legit way to define time and date as shown below.

```
<time datetime="2017-02-14">Beautiful day</time>
```
From here you can call JavaScript function with the parameter of date and it returns the formatted date.

As we see that there is no getter function that returns the month in the `alphabet`. So we can map the `numeric digits` to `alphabets` as shown below. We can also use a logic statement to achieve a similar result. 

```js
const monthMap = {
		0: 'Jan',
		1: 'Feb',
		2: 'Mar',
		3: 'April',
		4: 'May',
		5: 'June',
		6: 'July',
		7: 'Aug',
		8: 'Sep',
		9: 'Oct',
		10: 'Nov',
		11: 'Dec'
	}

```

Next, we write a function to format the date. The function accepts the parameter for the publish date of the blog that is not well formated. The function parameter should follow the date pattern as below.

- new Date('July 1, 2020 01:15:00')
- new Date("2020-01-26") // pattern: YYYY-MM-DDTHH:mm:ss:sssZ
- Date(2011, 0, 1, 2, 3, 4, 567)

```js
function publishDate(date){
	//date: YYYY-MM-DDTHH:mm:ss:sssZ

	var dateObj = new Date(date);
	var day = dateObj.getUTCDate();
	var month = monthMap[dateObj.getMonth()];
	var year = dateObj.getFullYear();

	var newdate = day + " " + month + ", " + year;
	return newdate;
}
```

The above function will return the date as per our formatting like `Mar 4,2020`. It look nice and clean to the reader when you display on the blog post, or page, etc.