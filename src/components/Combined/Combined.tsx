import { useState } from "react"
import { useCombinedStore } from "./combinedStore"

const Combined = () => {
  const { posts, todos, addPost, addTodo } = useCombinedStore()
  const [postInput, setPostInput] = useState<string>('')
  const [todoInput, setTodoInput] = useState<string>('')

  return (
    <div>
      <h2>Posts</h2>
      <ul>
        {posts.map((post, index) => (
          <li key={index}>{post}</li>
        ))}
      </ul>

      <h2>Todos</h2>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>{todo}</li>
        ))}
      </ul>

      <input type="text" value={postInput} onChange={(event) => setPostInput(event.target.value)} />
      <button onClick={() => addPost(postInput)}>Add new post</button>

      <hr />

      <input type="text" value={todoInput} onChange={(event) => setTodoInput(event.target.value)} />
      <button onClick={() => addTodo(todoInput)}>Add new todo</button>
    </div>
  )
}

export default Combined