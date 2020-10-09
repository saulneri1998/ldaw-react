import { atom } from 'recoil';

export const tasksState = atom({
    key: "tasks",
    default: []
})

// export const addTaskState = selector({
//     key: 'addTask', // unique ID (with respect to other atoms/selectors)
//     set: ({set }, newTask) => {
//         const tasks = get(tasksState);
//         tasks.push(newTask)
//         return text.length;
//     },
// });