const firstControllerMethod = (req,res) => {
    res.send("First Controller Method in controller.js");
}
const secondControllerMethod = (req,res) => {
    res.send("Second Controller Method in controller.js");
}
module.exports = {
    firstControllerMethod,
    secondControllerMethod
}