import React from 'react'
import { Select, Input, Button, Grid, Header, Icon } from 'semantic-ui-react'
import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'



const options = [
    { key: "deporte", text: "Deporte", value: "deporte" },
    { key: "casa", text: "Casa", value: "casa" },
    { key: "oficina", text: "Oficina", value: "oficina" },
    { key: "otra", text: "Otra", value: "otra" }
]

function InputTask(props) {
    const [task, setTask] = useState({
        idTask: "",
        taskName: "",
        categoryTask: ""
    })

    const [error, setError] = useState(false)

    const onChangeTask = (e) => {
        setTask({
            ...task,
            [e.target.name]: e.target.value
        })

    }

    const onChangeCategoryTask = (e, data) => {
        setTask({
            ...task,
            [data.name]: data.value
        })
    }

    const { createTask } = props;

    const onSubmitTask = (e) => {
        // que no recarge la pagina 
        e.preventDefault()
        // validacion
        if (task.taskName.trim() === "" && task.taskName.trim() === "") {
            setError(true)
            return
        }
        //eliminar mensaje previo
        setError(false)

        //asignar un ID

        task.idTask = uuidv4();

        //crear la tarea
        createTask(task)


        //limpiar los inputs
        setTask({
            idTask: "",
            taskName: "",
            categoryTask: ""
        })

    }

    return (
        <>
            <Grid centered columns={2}>
                <Input type='text' action className='input-gral'>

                    <Input
                        size='small'
                        icon="add" placeholder="Escribe tu tarea..."
                        iconPosition='left'
                        name="taskName"
                        value={task.taskName}
                        onChange={onChangeTask}
                    >
                    </Input>
                    <Select
                        compact options={options}
                        className="select-form-task"
                        name="categoryTask"
                        placeholder='Categoria'
                        value={task.categoryTask}
                        onChange={onChangeCategoryTask}
                    >
                    </Select>
                    <Button type='submit' color='violet' onClick={onSubmitTask}>
                        Añadir Tarea
                    </Button>
                </Input>
            </Grid>
            {error && (
                <Grid centered>
                    <Icon name='close'></Icon>
                    <Header.Content>La tarea es obligatoria</Header.Content>
                    <Icon name='close'></Icon>
                </Grid>

            )
            }
        </>
    )
}

export default InputTask