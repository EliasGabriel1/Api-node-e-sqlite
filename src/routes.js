import { Router } from "express";
import { createTable, insertPessoa, updatePessoa, selectPessoas, selectPessoa, deletePessoa } from "./Controler/pessoa.js";

const router = Router();

createTable();

router.get('/', (req, res)=> {
    res.json({
        "statusCode": 200,
        "msg": "A Api está funcionando na posta 3000"
    })
    }
)

router.get('/pessoas', selectPessoas)
router.get('/pessoa', selectPessoa)
router.post('/pessoa', insertPessoa)
router.put('/pessoa', updatePessoa)
router.delete('/pessoa', deletePessoa)

export default router;