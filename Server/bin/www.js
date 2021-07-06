var http = require('http')
var PORT = 9000
var mysql = require('mysql')
var queryString = require('querystring')
var server = http.createServer(
    // serverHandel
    function (req, res) {
        res.setHeader('Content-type', 'application/json')
        var method = req.method
        var url = req.url
        var path = url.split('?')[0]
        var query = queryString.parse(url.split("?")[1])
        var con = mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: '1111',
            port: '3306',
            database: 'myblog'
        })
        con.connect()
        function exec(sql) {
            return new Promise(function (resolve, reject) {
                con.query(sql, function (err, result) {
                    if (err) {
                        reject(err)
                        return
                    }
                    resolve(result)
                })
            })
        }

        //查询
        if (method === "GET" && path === "/api/list") {
            var sql = `select * from users where 1=1`
            var title = query.title || ''
            var content = query.content || ''
            if (title) {
                sql += `  and title like '%${title}%'`
            }
            if (content) {
                sql += `  and content like '%${content}%'`
            }
            sql += `;`
            exec(sql).then(function (result) {
                res.end(JSON.stringify({ rows: result, responseCode: 0, responseMsg: "成功" }))
            })
        }
        //详情
        if (method === "GET" && path === "/api/detail") {

            var sql = `select * from users where 1=1`
            var id = query.id || ''
            if (id) {
                sql += `  and id='${id}'`
            }
            sql += `;`
            exec(sql).then(function (result) {
                res.end(JSON.stringify({ rows: result[0], responseCode: 0, responseMsg: "成功" }))
            })
        }
        //新增
        if (method === "POST" && path === "/api/add") {
            var postData = "";
            req.on('data', function (chunk,) {
                postData += chunk.toString();    //串联  data 数据
            });

            //获取完所有数据后执行req.on（‘end’,function(){}）
            req.on('end', function () {
                var title = JSON.parse(postData).title
                var content = JSON.parse(postData).content
                var sql = `insert into users (title,content) values('${title}','${content}');`
                exec(sql).then(function (result) {
                    res.end(JSON.stringify({ responseCode: 0, responseMsg: "成功" }))
                })
            })
        }
        //修改
        if (method === "POST" && path === "/api/update") {
            var postData = "";
            req.on('data', function (chunk,) {
                postData += chunk.toString();    //串联  data 数据
            });

            //获取完所有数据后执行req.on（‘end’,function(){}）
            req.on('end', function () {
                var title = JSON.parse(postData).title
                var content = JSON.parse(postData).content
                var id = JSON.parse(postData).id
                var sql = `update users set title='${title}' , content='${content}' where id='${id}';`
                exec(sql).then(function (result) {
                    res.end(JSON.stringify({ responseCode: 0, responseMsg: "成功" }))
                })
            })
        }
        //删除
        if (method === "POST" && path === "/api/delete") {
            var postData = "";
            req.on('data', function (chunk,) {
                postData += chunk.toString();    //串联  data 数据
            });

            //获取完所有数据后执行req.on（‘end’,function(){}）
            req.on('end', function () {
                var id = JSON.parse(postData).id
                var sql = `delete from users where id='${id}';`
                exec(sql).then(function (result) {
                    res.end(JSON.stringify({ responseCode: 0, responseMsg: "成功" }))
                })
            })
        }


    }

)
server.listen(PORT,function(req,res){
   console.log(`http server running at http://localhost:'${PORT}'`)
})

