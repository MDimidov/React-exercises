import { useEffect } from "react";
import { commentFactory } from '../../../services/commentServices';
import { CommentItem } from "./CommentItem";
import { useService } from "../../../hooks/useService";

export function Comments({
    gameId,
    comments,
    setComments,
}) {
    
    const commentService = useService(commentFactory)
    useEffect(() => {
        const fetchComments = async () => {
            try {
                const res = await commentService.getCommentsByGameId(gameId);
                const data = Object.values(res);
                setComments(data);
            } catch (error) {
                console.error("Failed to fetch comments: ", error);
            }
        };

        fetchComments();
    }, [gameId, setComments]);

    return (
        <div className="details-comments">
            <h2>Comments:</h2>
            <ul>
                {/* <!-- list all comments for current game (If any) --> */}
                {comments.map(c => (
                    <CommentItem key={c._id} {...c} />
                ))}

            </ul>

            {/* <!-- Display paragraph: If there are no games in the database --> */}
            {!comments?.length > 0 && (
                <p className="no-comment">No comments.</p>
            )}
        </div>
    );
}