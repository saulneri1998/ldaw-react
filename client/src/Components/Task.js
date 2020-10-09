import { Box, Button, Grid } from '@chakra-ui/core';
import React from 'react';
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { tasksState } from '../atoms';

const Task = ({ t }) => {
    const url = "http://127.0.0.1:4000"

    const [tasks, setTasks] = useRecoilState(tasksState);

    const handleDone = () => {
        axios.put(url + '/tasks', {
            id: t.id
        }).then(() => {
            const index = tasks.findIndex(task => task.id === t.id);
            let modified = JSON.parse(JSON.stringify(tasks));
            modified[index].status = "done";
            modified.sort((a, b) => {
                if (a.status < b.status) { return 1 }
                else if (a.status > b.status) { return -1 }
                return 0
            })
            setTasks(modified);
        }).catch(err => console.log(err));
    }

    const handleDelete = () => {
        axios.post(url + '/deleteTask', {
            id: t.id
        }).then(() => {
            const index = tasks.findIndex(task => task.id === t.id);
            let modified = JSON.parse(JSON.stringify(tasks));
            modified.splice(index, 1);
            setTasks(modified);
        }).catch(err => console.log(err));
    }

    if (t.status === "pending") {
        return (
            <Grid m={1} p={1} bg="gray.100" templateColumns="5fr 1fr 1fr">
                <Box >{ t.description }</Box>
                <Button onClick={handleDone} m={1} size="sm" variantColor="green">Done</Button>
                <Button onClick={handleDelete} m={1} size="sm" variantColor="red">Delete</Button>
            </Grid>
        );
    }
    
    return (
        <Grid m={1} p={1} bg="gray.300" templateColumns="5fr 1fr 1fr">
            <Box >{ t.description }</Box>
            <Box></Box>
            <Button onClick={handleDelete} m={1} size="sm" variantColor="red">Delete</Button>
        </Grid>
    );
}

export default Task;