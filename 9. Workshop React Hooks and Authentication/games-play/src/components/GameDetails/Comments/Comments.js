import { useEffect } from "react";
import * as request from '../../../services/commentServices';
import { CommentItem } from "./CommentItem";

export function Comments({
    gameId,
    comments,
    setComments,
}) {

    useEffect(() => {
        const fetchComments = async () => {
            try {
                const res = await request.getCommentsByGameId(gameId);
                const data = Object.values(res);
                setComments(data);
            } catch (error) {
                console.error("Failed to fetch comments:", error);
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