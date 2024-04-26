import React from "react";
import { Link } from "react-router-dom";
import { useOutletContext } from "react-router-dom";
import Food from "./Food";

function FoodList() {
    const { foods, user } = useOutletContext();

    const foodsComponents = foods.map(food => (
        <div key={food.id}>
            <Link to={`/foods/${food.id}`}>
                <img src={food.image} alt={food.name} />
            </Link>
            <Food food={food} />
        </div>
    ));

    function displayFoodInfo() {
        if (user && user.type === 'admin') {
            return <h1>Here are all of the foods:</h1>;
        } else if (user && user.type === 'user' && foods.length > 0) {
            return <h1>Here are the foods that you've reviewed:</h1>;
        } else if (user && user.type === 'user' && foods.length === 0) {
            return <h1>You haven't reviewed any foods yet.</h1>;
        } else {
            return null;
        }
    }

    return (
        <>
            <br/>
            {user ? displayFoodInfo() : null}
            <ul className="food-list">{foodsComponents}</ul>
        </>
    );
}

export default FoodList;
