// const handelRouter = require('./src/router/index')
var serverHandel =  function(req, res) {
    // res.setHeader('Content-type', 'application/json')
    // const data=handelRouter(req,res)
    // if (data){
    //     res.end(
    //         JSON.stringify(data)
    //     )
    //     // return
    // }
    console.log(222222)
    res.end(" JSON.stringify(data)")
}
module.exprots = serverHandel