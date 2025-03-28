const express = require('express');

app = express();

app.use(express.json());


let id_auto = 4;
let lista = [
    {id:1, nombre: "Carlos", edad:23},
    {id:2, nombre: "Ana", edad:34},
    {id:3, nombre: "Luis", edad:44}
]

app.get('/usuarios', (req, res)=>{
    res.json(lista);
})

app.get('/usuarios/:id', (req, res)=>{
    const id = req.params.id;

    const usuario = lista.filter( u => u.id == id )
    
    res.json(usuario);
})

app.post('/usuarios', (req, res)=>{
    const {nombre, edad} = req.body;
    const est = {id:id_auto++,nombre, edad}

    lista.push( est );
    
    res.status(201).json(est);
})

app.put('/usuarios/:id', (req, res)=>{
    const id = req.params.id;
    const {nombre, edad} = req.body;
    const est = {id,nombre, edad}

    lista = lista.map( u => u.id == id ? est: u );
    
    res.json(est);
})


app.delete('/usuarios/:id', (req, res)=>{
    const id = req.params.id;

    const index = lista.findIndex(u => u.id == id );
    
    if (index<0) {
        res.status(404).json({"mensaje":"El usuario no se econtro"})
    }
    
    lista.splice(index,1)
    res.sendStatus(204);
})


app.listen(3000);


