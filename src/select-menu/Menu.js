import { React, useState} from "react";
import './Menu.css';

const Menu = () => {
    // Values to be put into the menu, can be edited for any values
    const menuVals = ["San Diego",
                    "Los Angeles",
                    "San Francisco",
                    "Seattle",
                    "New York",
                    "Austin",
                    "Pluto",
                    "Minnesota",
                    "Houston",
                    "Chicago"
                ];     
    const [selectedVals, setSelectedVals] = useState([]);
    const [visibility, setVisibility] = useState(false);
    
    // Function to remove a single element from an array
    const removeElement = (singleElement) => {
        let valArray = structuredClone(selectedVals);
        let index = valArray.indexOf(singleElement);
        let newArray = []
        for (let i = 0; i < valArray.length; i++){
            if (i != index){
                newArray.push(valArray[i]);
            }
        }
        return newArray;
    };

    // Function to determine the text for the header
    const renderHeader = () => {
        if (selectedVals.length == 0){
            return "Select...";
        } else {
            let headerText = "";

            // Loop over all present values within the selected values
            for (let i = 0; i < selectedVals.length; i++){
                headerText += selectedVals[i] + ", ";
            }
            return headerText.substring(0, headerText.length - 2);
        }
    };

    // Function to return new array with newly selected value
    const addElement = (singleElement) =>{
        let valArray = structuredClone(selectedVals);
        valArray.push(singleElement);
        return valArray
    }

    // Function to determine what should get rendered for dropdown
    const renderElements = () => {
        if (!visibility){
            return;
        }
        // Depending on if the element has been selected, render a selected or deselected element
        return(
            menuVals.map((singleElement) => {
                if (selectedVals.includes(singleElement)){
                    return (
                        <div className="singleElementSelected" onClick={() => {setSelectedVals(removeElement(singleElement))}}>
                            <input type="checkbox" id={singleElement + "checked"} checked/>
                            {singleElement}  
                        </div>
                    )
                } else {
                    return (
                        <div className="singleElement" onClick={() => {setSelectedVals(addElement(singleElement))}}>
                            <input type="checkbox" id={singleElement}/>
                            {singleElement} 
                        </div>
                    )
                }
            })
        )
    };

    // Component to be returned
    return (
        <div>
            <div className="header" onClick={() => {setVisibility(!visibility)}}>{renderHeader()}</div>
            <div className="dropdownBox">{renderElements()}</div>
        </div>
    )
}

export default Menu;