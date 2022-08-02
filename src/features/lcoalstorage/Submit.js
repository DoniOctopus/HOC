import React from "react";
import WithLocalStorage from "../../shared/WithLocalStorage";

const SubmitButton = () => {
    return (
        <div>
        </div>
    )
}

export default WithLocalStorage(SubmitButton, (username, favoriteFood) => {
    localStorage.setItem("userName", username)
    localStorage.setItem("favoriteFood", favoriteFood)
});
