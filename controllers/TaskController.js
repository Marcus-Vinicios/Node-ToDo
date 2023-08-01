const Task = require('../models/Task')

//Este modulo serve como controlador realizando a lógica da aplicação.
module.exports = class TaskController {
    
    //Criação das tarefas.
    static createTask(req, res) {
        res.render('tasks/create')
    }
    //Salva a tarefa criada.
    static async createTaskSave(req, res) {

        const task = {
            title: req.body.title,
            description: req.body.description,
            done: false
        }

        await Task.create(task)

        res.redirect('/')
    }
    //Remove uma tarefa.
    static async removeTask(req, res) {

        const id = req.body.id

        try {
            await Task.destroy({ where: { id: id } })
            console.log("Tarefa excluida com sucesso!")
        } catch (error) {
            console.log('Não foi passivel excluir a tarefa.')
        }

        res.redirect('/')
    }
    //Visualização de uma tarefa.
    static async viewTask(req, res) {

        const id = req.params.id

        const task = await Task.findOne({ where: { id: id }, raw: true })

        res.render('tasks/view', { task })
    }
    //Atualização de uma tarefa.
    static async updateTask(req, res) {

        const id = req.params.id

        const task = await Task.findOne({ where: { id: id }, raw: true })

        res.render('tasks/edit', { task })
    }
    //Salva as alterações feitas.
    static async updateTaskSave(req, res) {

        const id = req.body.id

        const task = {
            title: req.body.title,
            description: req.body.description
        }

        await Task.update(task, { where: { id: id } })

        res.redirect('/')
    }
    //Altera os status da tarefa.
    static async toggleTaskStatus(req, res) {

        const id = req.body.id

        const task = {
            done: req.body.done === '0' ? true : false
        }

        await Task.update(task, { where: { id: id } })
        
        res.redirect('/')
    }
    //Visualização de todas as tarefas.
    static async showTasks(req, res) {

        const tasks = await Task.findAll({ raw: true })

        res.render('tasks/all', { tasks })
    }
}