import { List, ListItem } from '@chakra-ui/core';
import React from 'react';
import { useRecoilValue } from 'recoil';
import { tasksState } from '../atoms';
import Task from './Task';

const TasksList = () => {
    const tasks = useRecoilValue(tasksState);

    return (
        <List mt={10}>
            { tasks.map((task) => {
                return (
                    <ListItem key={"task-"+task.id} >
                        <Task t={task}></Task>
                    </ListItem>
                )
            }) }
        </List>
    );
}

export default TasksList;