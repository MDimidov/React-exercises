function Todo({
    _id,
    text,
    isCompleted,
    toggleStatus
}) {
    return (
        <tr className={`todo ${isCompleted ? 'is-completed' : '' }`.trim()}>
          <td>{text}</td>
          <td>{isCompleted ? 'Complete' : 'Not Complete'}</td>
          <td className="todo-action">
            <button className="btn todo-btn" onClick={() => toggleStatus(_id)}>Change status</button>
          </td>
        </tr>
    );
}

export default Todo;