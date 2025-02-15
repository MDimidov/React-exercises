import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useService } from "../../../hooks/useService";
import { gameServiceFactory } from "../../../services/gameServices";
import { useForms } from "../../../hooks/useForms";

export function EditGame({ onSubmitEdit }) {
    const { gameId } = useParams();
    const gameService = useService(gameServiceFactory);

    const { formValues, onChangeHandler, onSubmit, changeValues } = useForms({
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
        summary: '',
    }, onSubmitHandler)

    function onSubmitHandler() {
        onSubmitEdit(gameId, formValues);
    };

    useEffect(() => {
        gameService.getGameById(gameId)
            .then(res => changeValues(res));
    }, [gameId]);

    return (
        <section id="edit-page" className="auth">
            <form id="edit" onSubmit={onSubmit}>
                <div className="container">

                    <h1>Edit Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={formValues.title}
                        onChange={onChangeHandler}
                    />

                    <label htmlFor="category">Category:</label>
                    <input
                        type="text"
                        id="category"
                        name="category"
                        value={formValues.category}
                        onChange={onChangeHandler}
                    />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input
                        type="number"
                        id="maxLevel"
                        name="maxLevel"
                        min="1"
                        value={formValues.maxLevel}
                        onChange={onChangeHandler}
                    />

                    <label htmlFor="game-img">Image:</label>
                    <input
                        type="text"
                        id="imageUrl"
                        name="imageUrl"
                        value={formValues.imageUrl}
                        onChange={onChangeHandler}
                    />

                    <label htmlFor="summary">Summary:</label>
                    <textarea
                        name="summary"
                        id="summary"
                        value={formValues.summary}
                        onChange={onChangeHandler}
                    ></textarea>
                    <input className="btn submit" type="submit" value="Edit Game" />

                </div>
            </form>
        </section>
    );
}