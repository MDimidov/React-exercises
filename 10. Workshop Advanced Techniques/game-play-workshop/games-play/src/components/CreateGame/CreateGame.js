import { useForms } from "../../hooks/useForms";

export function CreateGame({
    onSubmitHandler
}) {
    const { formValues, onChangeHandler, onSubmit } = useForms({
        title: '',
        category: '',
        maxLevel: '',
        imageUrl: '',
        summary: '',
    },
        onSubmitHandler);

    return (
        <section id="create-page" className="auth">
            <form id="create" onSubmit={onSubmit}>
                <div className="container">

                    <h1>Create Game</h1>
                    <label htmlFor="leg-title">Legendary title:</label>
                    <input onChange={onChangeHandler} value={formValues.title} type="text" id="title" name="title" placeholder="Enter game title..." />

                    <label htmlFor="category">Category:</label>
                    <input onChange={onChangeHandler} value={formValues.category} type="text" id="category" name="category" placeholder="Enter game category..." />

                    <label htmlFor="levels">MaxLevel:</label>
                    <input onChange={onChangeHandler} value={formValues.maxLevel} type="number" id="maxLevel" name="maxLevel" min="1" placeholder="1" />

                    <label htmlFor="game-img">Image:</label>
                    <input onChange={onChangeHandler} value={formValues.imageUrl} type="text" id="imageUrl" name="imageUrl" placeholder="Upload a photo..." />

                    <label htmlFor="summary">Summary:</label>
                    <textarea onChange={onChangeHandler} value={formValues.summary} name="summary" id="summary"></textarea>
                    <input className="btn submit" type="submit" value="Create Game" />
                </div>
            </form>
        </section>
    );
}