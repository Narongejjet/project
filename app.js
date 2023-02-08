var express = require('express')
var cors = require('cors')
var app = express()
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
const bcrypt = require('bcrypt')
const saltRounds = 10
var jwt = require('jsonwebtoken');
const secret = 'fullstack-login'


app.use(cors())
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

const mysql = require('mysql2');
const connection = mysql.createConnection('mysql://c65mh8osjqaght4lskrb:pscale_pw_2WpK0cVxpdEcMB44OG1niP4aotba9YHzOa6scv1o3w5@ap-southeast.connect.psdb.cloud/allonline?ssl={"rejectUnauthorized":true}');

function authenticateToken(req, res, next) {
    // console.log(req.headers);
    const authHeader = req.headers['authorization']
    const token = authHeader //&& authHeader.split(' ')[1]
    // console.log(token);
    if (token == null) return res.sendStatus(401)

    jwt.verify(token, secret, (err, user) => {
      if (err) {
        console.log(err)
        return res.status(403).json({message:"Unauthenticated:For Signed in User Only"})
      }

      req.user = user

      next()
    })
  }

app.get('/getlogin',jsonParser,authenticateToken, function (req, res, next) {
  const uid = req.user.id 
  console.log(uid);
    connection.query('Select fname,lname from customers where id = ?',[uid],(err,results)=>{
        if(err){
            res.status(500).send(err)
        } else{
            console.log(results);
            res.send(results)
        }
    }) 
})

app.post('/register', jsonParser, function (req, res, next) {
    connection.execute(
        "select * from customers where email = ?", [req.body.email],
        function (err, customers) {
            if (err) {
                res.json({ status: 'err' , message:"This email has been taken." })
            } else
                bcrypt.hash(req.body.password, saltRounds, function (err, hash) {
                    connection.execute(
                        "INSERT INTO customers (email, password, fname, lname, role) VALUES (?, ?, ?, ?, 'user')",
                        [req.body.email, hash, req.body.fname, req.body.lname],
                        function (err, results, fields) {
                            if (err) {
                                res.json({ status: 'error', message: err })
                                return
                            }
                            res.json({ status: 'ok' })
                        }
                    );
                });
        }
    )
})



// app.post('/login', jsonParser, function (req, res, next) {
//     connection.execute(
//         'SELECT * FROM customers WHERE email = ?',
//         [req.body.email],
//         function (err, users, fields) {
//             if (err) { res.json({ status: 'error', message: err }); return }

//             if (users.length == 0) { res.json({ status: 'error', message: 'no user found' }); return }

//             bcrypt.compare(req.body.password, users[0].password, function (err, isLogin) {
//                 if (isLogin) {
//                     var token = jwt.sign({ email: users[0].email }, secret, { expiresIn: '1h' });
//                     res.json({ status: 'ok', message: 'login success', token })
//                 } else {
//                     res.json({ status: 'error', message: 'login failed' })
//                 }
//             });
//         }
//     );
// })

app.post('/login', jsonParser, function (req, res, next) {
    connection.execute(
        'SELECT * FROM customers WHERE email = ?',
        [req.body.email],
        function (err, users, fields) {
            if (err) { res.json({ status: 'error', message: err }); return }

            if (users.length == 0) { res.json({ status: 'error', message: 'no user found' }); return }

            bcrypt.compare(req.body.password, users[0].password, function (err, isLogin) {
                if (isLogin) {
                    var token = jwt.sign({ id: users[0].id }, secret, { expiresIn: '1h' });
                    res.json({ status: 'ok', message: 'login success', token })
                } else {
                    res.json({ status: 'error', message: 'login failed' })
                }
            });
        }
    );
})

app.post('/loginAdmin', jsonParser, function (req, res, next) {
    connection.execute(
        'SELECT * FROM admin WHERE email = ?',
        [req.body.email],
        function (err, users, fields) {
            if (err) { res.json({ status: 'error', message: err }); return }

            if (users.length == 0) { res.json({ status: 'error', message: 'no user found' }); return }

            bcrypt.compare(req.body.password, users[0].password, function (err, isLogin) {
                if (isLogin) {
                    var token = jwt.sign({ email: users[0].email }, secret, { expiresIn: '1h' });
                    res.json({ status: 'ok', message: 'login success', token })
                } else {
                    res.json({ status: 'error', message: 'login failed' })
                }
            });
        }
    );
})

app.post('/authen', jsonParser, function (req, res, next) {
    try {
        const token = req.headers.authorization.split(' ')[1]
        var decoded = jwt.verify(token, secret);
        res.json({ status: 'ok', decoded })
    } catch (err) {
        res.json({ status: 'error', message: err.message })
    }
})

app.listen(3333, jsonParser, function () {
    console.log('CORS-enabled web server listening on port 3333')
})


app.get('/customers', (req, res) => {
    connection.query(`SELECT id, email, fname, lname, role FROM customers`, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(results);
        }
    });
});

app.put('/customers/update/:id', (req, res) => {
    const id = req.params.id;
    const updateData = req.body;
    const query = `UPDATE customers SET email = '${updateData.email}', fname = '${updateData.fname}', lname = '${updateData.lname}', role = '${updateData.role}' WHERE id = ${id}`;

    connection.query(query, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(results);
        }
    });
});
  

app.get('/product', (req, res) => {
    connection.query(`SELECT * FROM Product`, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(results);
        }
    });
});

app.post('/product/add', (req, res) => {
    const Product = req.body;
    const query = `INSERT INTO Product (ProID, ProIMG, Proname, Price, Sale, Flash, Description, Stock, Status) VALUES ('${Product.ProID}', '${Product.ProIMG}', '${Product.Proname}', '${Product.Price}','${Product.Sale}', '${Product.Flash}', '${Product.Description}', '${Product.Stock}', '${Product.Status}')`;

    connection.query(query, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(results);
        }
    });
});

app.post('/product/add/flash', (req, res) => {
    const Product = req.body;
    const query = `INSERT INTO Product (Sale, Flash) VALUES ('${Product.Sale}', '${Product.Flash}')`;

    connection.query(query, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(results);
        }
    });
});

app.put('/product/update/:id', (req, res) => {
    const ProID = req.params.id;
    const updateData = req.body;
    const query = `UPDATE Product SET ProIMG = '${updateData.ProIMG}', Proname = '${updateData.Proname}', Price = '${updateData.Price}', Sale = '${updateData.Sale}', Flash = '${updateData.Flash}', Description = '${updateData.Description}', Stock = '${updateData.Stock}', Status = '${updateData.Status}' WHERE ProID = ${ProID}`;

    connection.query(query, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else if (results.affectedRows === 0) {
            res.status(404).send({ message: "Product not found" });
          } else {
            res.send(results);
        }
    });
});


app.delete('/product/delete/:id', (req, res) => {
    const query = `DELETE FROM Product WHERE ProID = ${req.params.id}`;

    connection.query(query, (err, results) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.send(results);
        }
    });
});
app.listen(3001, () => {
    console.log('Server started on port 3001');
});
