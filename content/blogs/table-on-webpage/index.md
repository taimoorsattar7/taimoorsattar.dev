---
title: How to structure/style data in table
description: We can use table to structure large amount of data in column and rows. Table is the HTML way to layout the data.
date: 2021-05-19T16:21:10.500Z
tags:
  - table
  - html
  - CSS
featuredpost: false
---

We can use table to structure large amount of data in column and rows. Table is the HTML way to layout the data. Tables are the oldest way to doing layout on webpage, but it still works fine. The CSS way to create layout in web page are [CSS float](https://taimoorsattar.dev/blogs/css-float), [flexbox](https://taimoorsattar.dev/blogs/CSS-flexbox) and [CSS grid](https://taimoorsattar.dev/blogs/CSS-grid).

Creating tables in Html is the combination of tr and th tag. For this blog post, we will be a creating Table in HTML for the grocery store item and styling in CSS. Here are elements of HTML used in table:

To create a simple table, we can write HTML as follow

```html
<table>
	<caption>Grocery Items Bill</caption>
	<thead>
		<colgroup>
			<col span="2" style="background-color:red">
				<col style="background-color:yellow">
		</colgroup>
		<tr>
			<th scope="col" colspan="2" class="col-item-name">Item Name</th>
			<th class="col-quantity">Quantity</th>
			<th class="col-price">Price</th>
		</tr>
	</thead>
	<tbody>
		<tr>
			<td>Potatoes</td>
			<td>51</td>
			<td>$1.00</td>
		</tr>
		<tr>
			<td>Nuts</td>
			<td>20</td>
			<td>$5</td>
		</tr>
	</tbody>
	<tfoot>
		<td>item</td>
		<td>167</td>
		<td>$18.8</td>
	</tfoot>
</table>
```

In the above HTML, we have use HTML tag and attribute to define the table that are define as below.

| Sr#  | Table HTML tags |                                      Second column                                      |
| :--- | :-------------- | :-------------------------------------------------------------------------------------: |
| 1.   | <caption>       | It define the caption of the table, must be inserted immediately after the <table> tag  |
| 2.   |                 |                       It define the table header for the content.                       |
| 3.   | <tbody>         |    It define blocks of rows, consist of a body of data for the parent table element.    |
| 4.   | <colgroup>      | It is used to group multiple column in the table, to assign specific set of properties. |
| 5.   | <th>            |                                       Table Head                                        |
| 6.   | <tr>            |                                        Table Row                                        |
| 7.   | <td>            |                                       Table Data                                        |
| 8.   | <tfoot>         |                                      Table Footer                                       |

HTML table also support attributes as below.


| Sr#  | HTML Table Attributes |                      Second column                      |                     Third column |
| :--- | :-------------------- | :-----------------------------------------------------: | -------------------------------: |
| 1.   | scope="col"           | identify exactly what content a table header relates to | col, row, colgroup, and rowgroup |


## Style the HTML

Styling of the table makes it more good looking. The task we will be doing there is that we will be color every even row of the table. A little trick we will be using is the use of use of nth-child in styling. Using nth-child pseudo selector we can select each even row of table.

Here is Table CSS code below:

```css
table{
    border-spacing: 0;
    border-collapse: collapse;
    width: 50%;
    margin: 20px auto;
}
table th,table td{
    border: 1px solid black;
    padding: 10px;
    vertical-align: top;
}
.col-item-name{
    width: 50%;
}
.col-quantity,.col-price{
width: 25%;
}
table th {
text-align: left;
background-color: #869960;
color: #fff;
text-shadow: 1px 1px 0 rgba(0, 0, 0, 0.4);
}

table tbody tr:nth-child(even) td{
background-color: lightgreen;
}
.ammend-table tfoot{
background-color: lightgrey;
}
```

```css
table.a {
  table-layout: auto;
  width: 180px;
}

table.b {
  table-layout: fixed;
  width: 180px;
}
```