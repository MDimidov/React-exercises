export function CommentItem({ author, comment }) {
    return (
        <li className="comment">
            <p>{author}: {comment}.</p>
        </li>
    );
}