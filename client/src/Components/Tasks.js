import React, { useEffect } from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { tasksState } from '../atoms';
import NewTask from './NewTask'
import TasksList from './TasksList'
import { Stack } from '@chakra-ui/core';

const Tasks = () => {
    const url = "http://127.0.0.1:4000"
    const [, setTasks] = useRecoilState(tasksState)

    useEffect(() => {
        axios(url + '/tasks').then(response => {
            setTasks(response.data);
        })
    }, [setTasks]);

    return (
        <Stack p={30}>
            <NewTask />
            <TasksList />
        </Stack>
    );
}

export default Tasks;