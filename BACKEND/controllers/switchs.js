import { db } from '../db.js'


export const getSwitchs = (_, res)=>{
    const q = "SELECT * FROM switchs"     
    db.query(q, (err, data)=>{
        if(err) return res.json(err)

        return res.status(200).json(data)
    })
}

export const getSwitchsId = (req, res)=>{
    const {id} = req.params 
   
    const q = "SELECT * FROM switchs WHERE `id` ="+id

    db.query(q, (err, data)=>{
        if(err) return res.json(err)
        
        
        return res.status(200).json(data)
    })
}

export const addSwitchs = (req, res) =>{
    const q = 
    "INSERT INTO switchs(`local`, `hostname`, `ip`, `switchborda`) VALUES(?)";

    const values = [
        req.body.local,
        req.body.hostname,
        req.body.ip,
        req.body.switchborda,
    ];

    db.query(q, [values], (err, data)=>{
        if(err) return res.json(err)

        return res.json(data)
    });
};

export const updateSwitch = (req, res) =>{
    // const {id} = req.params
    // const q = "UPDATE switchs SET `local = ?`, `hostname = ?`, `ip = ?`, `switchborda = ?` WHERE `id` = ?";

    // const values = [
    //     req.body.local,
    //     req.body.hostname,
    //     req.body.ip,
    //     req.body.switchborda,
    // ]
    // db.query(q, [...values, id], (err)=>{
    //     if(err) return res.json(err);

    //     return res.status(200).json("Switch atualizado com sucesso");
    // })

    const id = req.params.id;
    const sql = "UPDATE switchs SET local = ?, hostname = ?, ip = ?, switchborda = ? WHERE id ="+id;
    db.query(sql, [req.body.local, req.body.hostname, req.body.ip, req.body.switchborda, id], (err, result) => {
        if(err) return res.json({Error: "update employee error in sql"});
        return res.json({Status: "Success"})
    })
}


export const deleteSwitchs = (req, res) =>{
    const q = "DELETE FROM switchs WHERE `id` = ?";

    db.query(q, [req.params.id], (err)=>{
        if(err) return res.json(err);

        return res.status(200).json("Switch deletado com sucesso")
    })
}