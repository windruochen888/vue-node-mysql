const handelRouter = (req, res) => {
    const method = req.method //GET POST
    const url = req.url
    const path = url.split('?')[0]
    if (method === "GET" && path === '/api/list') {
        return {
            msg: '这是列表接口'
        }
    }
}
module.exports = handelRouter
