"use server";

import { revalidateTag } from "next/cache";


export const getallTask = async (url: string) => {
    const fetchTask = await fetch(url,{
        next:{
            tags:["task"]
        }
    });
    const res = fetchTask.json();
    return res;
};

export const addTask = async (url: string, data: any) => {
    const fetchTask = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    revalidateTag("task")
    return "Task added"
};
export const deleteTask = async (url: string, id:number) => {
    const fetchTask = await fetch(`${url}/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
        // body: JSON.stringify(data),
    });
    revalidateTag("task")
    
    return "Task deleted"
};
export const updateTask = async (url: string, data:any) => {
    const fetchTask = await fetch(`${url}/${data.id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
    });
    revalidateTag("task")
    
    return "Task updated"
};

 



