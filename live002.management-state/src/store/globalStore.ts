import { createStore } from './createStore';
import * as I from './types';

export const useGlobalStore = createStore<I.IGlobalStore>(
  (setState, getState) => ({
    user: null,
    todos: [],
    login: () => {
      setState({
        user: {
          email: 'lucas@email.com',
          name: 'Lucas',
        },
      });
    },
    logout: () => {
      setState({ user: null });
    },
    addTodo: (title: string) => {
      setState((prevState) => ({
        todos: prevState.todos.concat({
          id: Date.now(),
          title,
          author: getState().user?.name ?? 'Guest',
          done: false,
        }),
      }));
    },
    toggleTodoDone: (todoId: number) => {
      setState((prevState) => ({
        todos: prevState.todos.map((todo) =>
          todo.id === todoId ? { ...todo, done: !todo.done } : todo,
        ),
      }));
    },
    removeTodo: (todoId: number) => {
      setState((prevState) => ({
        todos: prevState.todos.filter((todo) => todo.id !== todoId),
      }));
    },
  }),
);
