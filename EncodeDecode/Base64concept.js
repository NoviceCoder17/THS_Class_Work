// Base 64
// Publicly available format
// Dividing data to 6 bit segments 
// Max value is 63
// A-z, a-z, 0-9, +, /, =(padding-special value)
// Images used are enocded using base 64, email attachment, security protocol, data storage
// Data sent is slightly increase in size
// Base64 can be used in html(for an image)


//CLI
// 0. Exit
// 1. Encode
// 2 . Decode
// check if its a proper string(only A-z, a-z, 0-9, +, /)- Validation

/*
Base64 Encoding

A 			B 				C
65			66				67	1. letter to ascii

1000001  	1000010			1000011  2. ascii to binary

01000001  	01000010		01000011  3. padding to 8

010000010100001001000011    4. merging/combining the values

010000 010100 001001 000011  5. taking out in parts of 6

16  		 20	    9  	3            6. binary to decimal values

Q		U          J          D		7. mapping to values on the table

QUJD



HELLO

H			E			L			L			O
72			69			76			76			79

1001000		1000101		1001100		1001100		1001111

01001000	01000101	01001100	01001100	01001111

0100100001000101010011000100110001001111

010010 000100 010101 001100 010011 000100 111100        (count = 1)

18		4		21		12		19       4		60

S		E		V		M		T		E		8

SEVMTE8=

SEVMTE8=   count = 1

S	 	E		V		M		T		E		8	
18		4		21		12		19		4		60   1. letter to base64 value

010010	100		10101	1100	10011	100		111100

010010	000100		010101	001100	010011	000100		111100

0100100001000101010011000100110001001111  00

01001000 01000101 01001100 01001100 01001111

72		69		76			76		79
H		E		L		L		O



*/
