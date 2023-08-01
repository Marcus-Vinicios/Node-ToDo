const express = require("express")
const router = express.Router()

//Modulo responsável pelas rotas da aplicação.
const TaskController = require('../controllers/TaskController')

router.get('/tasks/add', TaskController.createTask) //Rota de criação de tarefa.
router.post('/tasks/add', TaskController.createTaskSave) //Envia os dados da criação da tarefa.
router.post('/tasks/remove', TaskController.removeTask) //Rota de deleção de uma tarefa.
router.get('/tasks/edit/:id', TaskController.updateTask) //Rota de atualização da tarefa.
router.post('/tasks/edit', TaskController.updateTaskSave) //Envia as atulizações das informações da tarefa
router.post('/tasks/update', TaskController.toggleTaskStatus) //Alteração do status da tarefa.
router.get('/tasks/view/:id', TaskController.viewTask) //Rota de visualização de uma tarefa.
router.get('/', TaskController.showTasks) //Rota de visualização de todas as tarefas.

module.exports = router