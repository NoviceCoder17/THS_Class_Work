/*Encoding & Decoding*/
// Ex: MP4 cannot be read on notepad++
// Process of converting data into another format for usage or transmission
// Question: Can a password be encoded? No
// When we enocde data from one format to another using publicly available data scheme(Anybody can crack it)
// NOT used for security reasons
// Ex: Base 64 schemes, Unicode/ASCII (compression purpose, zip)

/*Encryption and Decryption */
// Encrypt a password??? Any form of confidential data SHOULD not be encrypted/decrypted- should be non-reversible
// Transmission of data from one form to another format, in such a way only a 
// specific individual should be able to reverse the transmission
// Key: Private/secret key- if the key is lost then decryption cannot be reversed
// Public key is used for encryption
//blockchain wallet- 
// 1 format- only one key is generated(SYMMETRIC KEY CYPTOGRAPHY)
// 2 format- 2 keys(public keys and private keys) are generated- Any transaction by public key is
// easily decrypted by private data - (ASYMMETRIC KEY CYPTOGRAPHY)
// Used in concept called JSONWebtoken(symmetric) ,RSA, ed25519/ssh(asymmetric), 
//https- Secure- Encrypted- transported layer security is added-SSL(we nned to purchase)

/*Hacking*/
// converting a value to hash value by passing through an algorithm
// Encryption is used but cannot be decrypted- Used for passwords(an algorithm is used)
// Eg: hell0 => 23deede211
// 23deede211 => 222w2wdsdefrfrf( rehashing- you do not get original value)
// with every rehash, time required to has increases
// How are passwords compared using hashing? i/p- password--> Hashed(Hash value generated dependent on input value and algo)
// Next time when a user logs in- input is hashed and the hashed value is compared
// EG: md5, Bcrypt, Salting(how long does it take to hash a pwd)