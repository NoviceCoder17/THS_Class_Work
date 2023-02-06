class Bootcamper{
    constructor(fname, lname, age){
        this.fname = fname,
        this.lname= lname,
        this.age= age
    }
    bio(){
        console.log(this.fname, this.lname)
    }
}
const person1 = new Bootcamper("prea", "Shiva", "22")

//console.log(person1)
person1.bio()