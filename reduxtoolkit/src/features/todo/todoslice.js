import { createSlice, nanoid } from "@reduxjs/toolkit";


const initialState = {
    todos: [{id:null, text:null}]
}


const todoSlice = createSlice({
    name: "todo",
    initialState,
    reducers:{
        addtodo :(state, action) => {
            const todo = {
                id:nanoid(),
                text:action.payload
            }
            state.todos.push(todo)
            
        },
        removetodo :(state, action) => {
            state.todos = state.todos.filter((todo)=> todo.id !== action.payload) 
        },

        updatetodo : (state, action)=>{
                 state.todos.map((todo)=> { 
                    if (todo.id === action.payload.id)
                    {
                         todo.text = action.payload.text
                    }
                })
        },

        complitedtodo:(state, action )=> {
              state.todos.map((todo)=> {
                if (todo.id === action.payload.id)
                {
                    todo.text = <del>{action.payload.text}</del> 
                }
                
            })
               
        }

    }
})


export const { addtodo, removetodo, updatetodo, complitedtodo } = todoSlice.actions ;

export default todoSlice.reducer;