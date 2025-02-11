import { useEffect, useState } from "react";
import { commentFactory } from '../../../services/commentServices';

export function AddComment({
    gameId,
    comments,
    setComments
}) {
    const [formValues, setFormValues] = useState({
        author: '',
        comment: '',
    });

    function onChange(e) {
        setFormValues(state => ({ ...state, [e.target.name]: e.target.value }));
    }

    async function createComment() {
        const result = await commentFactory.createComment(gameId, formValues);
        return result;
    }

    async function onSubmitComment(e) {
        e.preventDefault();
        const newComment = await createComment();
        setComments(state => ([...state, newComment]));
    }
    return (
        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form" onSubmit={onSubmitComment}>
                <input name="author" placeholder="Author" value={formValues.author} onChange={onChange} />
                <textarea name="comment" placeholder="Comment......" value={formValues.comment} onChange={onChange}></textarea>
                <input className="btn submit" type="submit" value="Add Comment" />
            </form>
        </article>
    )
}