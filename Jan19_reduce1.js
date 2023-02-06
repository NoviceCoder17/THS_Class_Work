var wizards = [
    {
        name: 'Harry Potter',
        house: 'Gryfindor'
    },
    {
        name: 'Cedric Diggory',
        house: 'Hufflepuff'
    },
    {
        name: 'Tonks',
        house: 'Hufflepuff'
    },
    {
        name: 'Ronald Weasley',
        house: 'Gryfindor'
    },
    {
        name: 'Hermione Granger',
        house: 'Gryfindor'
    }
];

//Create a new array, that will contain just the names of the wizards who are in 
//hufflepuff

// function filterWiz(data){
//     var filtered=[]
//     var result = wizards.filter(ele => ele.house === "Hufflepuff").map((ele=>ele.name))
//     console.log(result)
    
// }

//filterWiz(wizards)

var points = {
    HarryPotter: 500,
    CedricDiggory: 750,
    RonaldWeasley: 100,
    HermioneGranger: 1270
};

var hufflepuffs=wizards.reduce((acc,curr)=>{
        if(curr.house=="Hufflepuff"){
            acc.push(curr.name)
        }
        return acc
    }, [])
console.log(hufflepuffs)

var hufflepuffs1=wizards.reduce((acc,curr)=>{
        let name = curr.name.replace(" ", "")
        console.log(name)  // no space in the names of wizards object
        if(points[name]){  // check in points object for the name
            curr.points= points[name]
        }
        else{
            curr.points= 0
        }
        acc.push(curr)
        return acc
    }, [])

    console.log(hufflepuffs)
    console.log(hufflepuffs1)

    // there is no iteration over multiple methods as in filter