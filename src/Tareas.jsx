import React, { useState } from 'react';
import TaskList from './Tasklist component';
import './Tareas.css';

const Tareas = () => {
    const [tareas, setTareas] = useState([
        { id: 1, text: 'Hacer la compra', completed: false },
        { id: 2, text: 'Lavar los platos', completed: true },
        { id: 3, text: 'Sacar la basura', completed: false }
    ]);

    const addTask = () => {
        const newTask = {
            id: tareas.length + 1,
            text: 'Nueva tarea',
            completed: false
        };
        setTareas([...tareas, newTask]);
    };

    return (
        <div className='container'>
            <h1 className='title'>Lista de Tareas</h1>
            <div className='task-list-container'> <TaskList tasks={tareas} /></div>
           <div className='form-container'> <button onClick={addTask} className='btn-agregar'>Agregar Tarea</button></div>
        </div>
    );
};

export default Tareas;