import express from 'express';
import Role from '../models/Role.js';
import { createRole, deleteRole, getAllRoles, updateRole } from '../controllers/role.controller.js';

const router = express.Router();

//Create a new role in DB
router.post('/create', createRole);

//Update a role in DB
router.put('/update/:id', updateRole);

//Get All Role
router.get('/getAll', getAllRoles)

//Delete a role
router.delete('/deleteRole/:id',deleteRole)

export default router;