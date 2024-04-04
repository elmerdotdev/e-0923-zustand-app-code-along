import { StateCreator, create } from "zustand";

type PostsSlice = {
  posts: string[],
  addPost: (newPost: string) => void
}

type TodosSlice = {
  todos: string[],
  addTodo: (newTodo: string) => void
}

const createPostsSlice: StateCreator<
  PostsSlice & TodosSlice,
  [],
  [],
  PostsSlice
> = (set) => ({
  posts: [],
  addPost: (newPost) => set((state) => ({ posts: [...state.posts, newPost] }))
})

const createTodosSlice: StateCreator<
  PostsSlice & TodosSlice,
  [],
  [],
  TodosSlice
> = (set) => ({
  todos: [],
  addTodo: (newTodo) => set((state) => ({ todos: [...state.todos, newTodo] }))
})

// Combined store (combines posts slice and todos slice)
export const useCombinedStore = create<PostsSlice & TodosSlice>()((...a) => ({
  ...createPostsSlice(...a),
  ...createTodosSlice(...a)
}))