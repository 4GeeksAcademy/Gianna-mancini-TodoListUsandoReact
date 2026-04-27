import TodoInput from "./TodoInput"
import TodoList from "./TodoList"
import Title from "./Title"
import { useState } from "react"
import TodoFooter from "./TodoFooter"

const Home = () => { 
	const [TodosFromAPI, setTodosFromAPI] = useState([])

	function handleAddTodo (todoText) {
		const newTodo = {id: TodosFromAPI.length + 1 + "", text: todoText}
		setTodosFromAPI(prevTodos => ([...prevTodos, newTodo]))
	}

	const handleRemove = (id) => {
       setTodosFromAPI(TodosFromAPI.filter(todo => todo.id !== id ))
	}
 
	return (
		<div className="d-flex justify-content-center align-items-center bg-light min-vh-100">
			<div className="todo-wrapper"> 
				<Title />
				<div className="todo-card">
					<TodoInput onAddTodo = {handleAddTodo} /> 
					<TodoList todos = {TodosFromAPI} onRemoveTodo = {handleRemove} />
					<TodoFooter todosCount = {TodosFromAPI.length} />
				</div>
			</div>
		</div> 
	)
}

export default Home;