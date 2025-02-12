import { commentFactory } from '../../../services/commentServices';
import { useService } from "../../../hooks/useService";
import { useForms } from "../../../hooks/useForms";

export function AddComment({
    gameId,
    comments,
    setComments
}) {
    const commentService = useService(commentFactory);

    const {formValues, onChangeHandler, onSubmit} = useForms({
        author: '',
        comment: '',
        gameId,
    }, onSubmitComment);

    async function createComment() {
        const result = await commentService.createComment(formValues);
        return result;
    }

    async function onSubmitComment(e) {
        const newComment = await createComment();
        setComments(state => ([...state, newComment]));
    }
    return (
        <article className="create-comment">
            <label>Add new comment:</label>
            <form className="form" onSubmit={onSubmit}>
                <input name="author" placeholder="Author" value={formValues.author} onChange={onChangeHandler} />
                <textarea name="comment" placeholder="Comment......" value={formValues.comment} onChange={onChangeHandler}></textarea>
                <input className="btn submit" type="submit" value="Add Comment" />
            </form>
        </article>
    )
}