let firstObj = {
    name : "Kshitij Gupta",
    age : 23,
    Company : "Mirketa"
}

const firstMethod = () => {
    console.log("First Method from exportJS");
}

module.exports = {
    firstObj,
    firstMethod
}