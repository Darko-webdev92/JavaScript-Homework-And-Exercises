# EXTRA HOMEWORK 1
1. When a user inserts a birthday date calculate if that user is an adult (if you don't know how to work with Date object, the value can be inserted as a number or as a string separated with '/' character)

Ex. 
- 15021999 -> Adult
- 23/10/2015 -> Not Adult

If the date (day and month) user insert is equal with today's date (day and month) write "Happy Birthday, you are/are not adult"
Ex. 

-	let assume today's date is 01/01/2022, and the user inserts 01/01/1996 -> "Happy Birthday, you are adult"
-	let assume today's date is 01/01/2022, and the user inserts 01/01/2010 -> "Happy Birthday, you are not adult"
	
# EXTRA HOMEWORK 2
2. Create a web calculator with all the standard features. The calculator should have buttons for the numbers to click (just like calculators in real life, no inputs!). It should have buttons for the operations: Sum, Subtract, Multiply and Divide. It should also have the standard buttons equals, decimal dot and reset ( C ). There should be a display where we can see the numbers that we are entering and results (like calculators in real life). The calculator should show error message if number is too large or if we are dividing by zero.

Note: The eval() function is not allowed!


![Alt text](https://camo.githubusercontent.com/66ababff0bb4e163405715d68ce824e66ee891ba30de7a077e2a334f1cdd22ac/68747470733a2f2f7468756d62732e6766796361742e636f6d2f57686f6c65546172744962657269616e636869666663686166662d73697a655f726573747269637465642e676966)

# EXTRA HOMEWORK 3

Create a flag using a matrix. The user inserts square matrix order and the result should be a flag
Ex. 

let assume matrix order is 5 -> the result should be equal to 

	[[ "*", "*", "*", "*", "*" ], [ "*", "+", "+", "+", "*" ], [ "*", "+", "+", "+", "*" ], [ "*", "+", "+", "+", "*" ], [ "*", "*", "*", "*", "*" ]]
	
or better representation of the result
	
	*****
	*+++*
	*+++*
	*+++*
	*****


# EXTRA HOMEWORK 4

Calculate the sum and difference of the matrix. The calculations need to be done horizontally, vertically and in total (number should be in the range of -10 and 10)

Ex. 
let assume the matrix is [[1, 2, 3], [4, 5, 6], [7, 8, 9]] ->
	
SUM results

		- horizontally = [6, 15, 24]
		- vertically = [12, 15, 18]
		- total = 45
	
Differance results

		- horizontally = [-4, -7, -10]
		- vertically = [-10, -11, -12]
		- total = -43
		
# EXTRA HOMEWORK 5

Check if the matrix is an identity matrix. An identity matrix is a square matrix in which all entries on the main diagonal are equal to 1 and the rest are 0
Ex. 

let assume the matrix is

     [[1, 0, 0], [0, 1, 0], [0, 0, 1]]
-> write "The matrix is identity matrix"

let assume the matrix is

     [[1, 0, 1], [0, 1, 0], [0, 1, 1], [1, 1, 1]] 
-> write "The matrix is not identity matrix"

6*. Sum and multiply elements in upper triangular and lower triangular matrix (number should be in the range of 0 and 10). Make sure to convert the matrix to be upper or lower triangular matrix!
Ex.
	let assume the matrix is [[1, 2, 3], [4, 5, 6], [7, 8, 9]]
	
	Upper triangular matrix:
		SUM = 26
		PRODUCT = 1620
		
	Lower triangular matrix:
		SUM = 34
		PRODUCT = 10080
