import { InputGroup, Input, InputRightElement, Button } from '@chakra-ui/core';
import React, { useState } from 'react'
import axios from 'axios';
import { useRecoilState } from 'recoil';
import { tasksState } from '../atoms';

const NewTask = () => {
    const url = "http://127.0.0.1:4000"
    const [tasks, setTasks] = useRecoilState(tasksState)
    const [input, setInput] = useState("");

    const handleChange = (e) => {
        setInput(e.target.value)
    }

    const handleClick = () => {
        axios.post(url + "/tasks", {
            description: input
        }).then(response => {
            setInput("");
            setTasks([response.data, ...tasks])
        }).catch(err => {
            console.log(err)
        })
    }

    return (
        <InputGroup size="md">
            <Input
                pr="4.5rem"
                type="text"
                placeholder="New task"
                value={input}
                onChange={handleChange}
            />
            <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                Add
                </Button>
            </InputRightElement>
        </InputGroup>
    );
}

export default NewTask;