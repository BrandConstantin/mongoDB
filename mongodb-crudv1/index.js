var express = require('express');
var app = express();
var mongodb = require('mongodb');
var app = express();

app.set('view engine', 'jade');
//la url de la base de datos
var dbUrl = 'mongodb://localhost:27017/prueba';

app.get('/', function(req, res) {
    /*let datos = {
            usuarios: [{
                nombre: 'pepe',
                apellido: 'guantanamo',
                edad: 444,
                pais: 'espanishstan'
            }]
        }*/
    mongodb.connect(dbUrl, function(err, db) {
        let datos = {};
        //nombre de la tabla a conectar
        db.collection('usuarios').find().toArray(function(err, docs) {
            datos.usuarios = docs;
            res.render = ('index', datos);
        });
    });
});

app.listen(4200, function() {
    console.log('Servidor arrancando en el puerto http://localhost:4200');
});