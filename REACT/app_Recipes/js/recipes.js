const data = [
    {
        "name": "Запеченный лосось",
        "ingredients": [
            { "name": "Лосось", "amount": 1, "measurement": "lb" },
            { "name": "Кедровые орехи", "amount": 1, "measurement": "cup" },
            { "name": "Салат с маслом", "amount": 2, "measurement": "cups" },
            { "name": "Желтый Кабачок", "amount": 1, "measurement": "med" },
            { "name": "Оливковое Масло", "amount": 0.5, "measurement": "cup" },
            { "name": "Чеснок", "amount": 3, "measurement": "cloves" }
        ],
        "steps": [
            "Preheat the oven to 350 degrees.",
            "Spread the olive oil around a glass baking dish.",
            "Add the salmon, garlic, and pine nuts to the dish.",
            "Bake for 15 minutes.",
            "Add the yellow squash and put back in the oven for 30 mins.",
            "Remove from oven and let cool for 15 minutes. Add the lettuce and serve."
        ]
    },

    {
        "name": "Рыбные тако",
        "ingredients": [
            { "name": "Белая рыба", "amount": 1, "measurement": "lb" },
            { "name": "Сыр", "amount": 1, "measurement": "cup" },
            { "name": "Капустный салат", "amount": 2, "measurement": "cups" },
            { "name": "Помидоры", "amount": 2, "measurement": "large" },
            { "name": "Лепешки", "amount": 3, "measurement": "med" }
        ],
        "steps": [
            "Cook the fish on the grill until hot.",
            "Place the fish on the 3 tortillas.",
            "Top them with lettuce, tomatoes, and cheese."
        ]
    }
]

const Ingredients = ({ data = [] }) => (
    <ul className="ingredients">
        {data.map((ingredient, i) => (
            <li key={i}>{ingredient.name}</li>
        ))}
    </ul>
);

const Instructions = ({ data = [] }) => (
    <section className="instructions">
        <h4>Как готовить:</h4>
        {data.map((step, i) => (
            <p key={i}>{`---  ${step}`}</p>
        ))}
    </section>
);

const Recipe = ({ name, ingredients, steps }) => (
    <section id={name.toLowerCase().replace(/ /g, "-")}>
        <h1>{name}</h1>
        <Ingredients data={ingredients} />
        <Instructions data={steps} />
    </section>
);

const Menu = ({ title, recipes }) => (
    <article>
        <header>
            <h1>{title}</h1>
        </header>
        <div className="recipes">
            {recipes.map((recipe, i) => (
                <Recipe key={i} {...recipe} />
            ))}
        </div>
    </article>
);

ReactDOM.render(
    <Menu recipes={data} title="Delicious Recipes" />,
    document.getElementById("react-container")
);