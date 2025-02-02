import Todo from './Todo';

function TodoList({todos, toggleStatus}) {
  if (!todos) {
    console.log(todos)
    return <div>Loading...</div>; // или някакво друго съобщение за зареждане
  }

  return (
    <table className="table">
      <thead>
        <tr>
          <th className="table-header-task">Task</th>
          <th className="table-header-status">Status</th>
          <th className="table-header-action">Action</th>
        </tr>
      </thead>
      <tbody>
      {todos.map(todo => <Todo key={todo._id} {...todo} toggleStatus={toggleStatus} />)}
      </tbody>
    </table>
  );
}

export default TodoList;
