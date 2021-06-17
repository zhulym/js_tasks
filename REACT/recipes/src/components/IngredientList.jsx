import React from "react";
import Ingredient from './Ingredient'

const IngredientList = ({ list = [] }) => {
    return (

        < ul className="ingredients">
            {list.map((ingredient, i) => (
                <Ingredient key={i} {...ingredient} />
            ))}
        </ul>

    )
}

export default IngredientList

