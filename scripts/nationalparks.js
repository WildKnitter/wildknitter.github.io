"use strict";
//This scripts contains code to dynamically create information on different parks from a JSON file.
//Author:  Pam Belknap

/*
Key for understanding how to access the fields in the JSON file:
objs.parks
objs.parks.length
objs.parks[i].LocationName
objs.parks[i].Address
objs.parks[i].City
objs.parks[i].State
objs.parks[i].ZipCode
objs.parks[i].Phone
objs.parks[i].Fax
objs.parks[i].Latitude
objs.parks[i].Longitude
*/

// Initialize

// Data for Location Dropdown
let parkState = [
    "Alabama", "Alaska", "American Samoa", "Arizona", "Arkansas", "California", "Colorado",
    "Connecticut", "Delaware", "DC", "Florida", "Georgia", "Guam", "Hawaii", "Idaho", "Illinois",
    "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana", "Maine", "Maryland", "Massachusetts",
    "Michigan", "Minnesota", "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
    "New Hampshire", "New Jersey", "New Mexico", "New York", "North Carolina", "North Dakota",
    "Ohio", "Oklahoma", "Oregon", "Pennsylvania", "Puerto Rico", "Rhode Island", "South Carolina",
    "South Dakota", "Tennessee", "Texas", "Utah", "Vermont", "Virgin Islands", "Virginia", "Washington",
    "West Virginia", "Wisconsin", "Wyoming"
];

// Data for Park Type Dropdown
let parkType = [
    "National Park", "National Monument", "Recreation Area", "Scenic Trail", "Battlefield",
    "Historic", "Memorial", "Preserve", "Island", "River", "Seashore", "Trail", "Parkway"
];

window.onload = function() {
    let objs;

    //Starts the communication to the server
    $.getJSON(
            "data/nationalparks.json",
            //This function doesn't necessarily run instantaneously
            function(data) {
                objs = data;
                //load dropdown lists here (code)
                const locationChoice = document.getElementById("locationChoice");
                for (let i = 0; i < parkState.length; i++) {
                    let locationOption = document.createElement("option");
                    locationOption.text = parkState[i];
                    locationOption.value = parkState[i];
                    locationChoice.appendChild(locationOption);
                }
                const parkTypeChoice = document.getElementById("parkTypeChoice");
                for (let i = 0; i < parkType.length; i++) {
                    let parkTypeOption = document.createElement("option");
                    parkTypeOption.text = parkType[i];
                    parkTypeOption.value = parkType[i];
                    parkTypeChoice.appendChild(parkTypeOption);
                }
            }
        )
        //buttons
        //const btnLocation = document.getElementById("btnLocation");
        //btnLocation.onclick = createLocationTable;
        //const btnParkType = document.getElementById("btnParkType");
        //btnParkType.onclick = createParkTypeTable;
    locationChoice.onchange = createLocationTable;
    //createLocationTable();
    parkTypeChoice.onchange = createParkTypeTable;
    //createParkTypeTable();

    const btnAll = document.getElementById("btnAll");
    btnAll.onclick = createAllTable;

    // Function to create a table for a selected location.
    function createLocationTable() {
        let locationChoice = document.getElementById("locationChoice").selectedIndex;
        // to select option from a specific dropdown, in this instance locationChoice.
        let chosenLocation = document.getElementById("locationChoice").options[locationChoice].value;
        let table = document.getElementById("tableHeadParkLocation");
        table.innerHTML = "";
        let row = table.insertRow(table.rows.length);
        let cell1 = row.insertCell(0);
        cell1.innerHTML = "Name";
        let cell2 = row.insertCell(1);
        cell2.innerHTML = "Address";
        let cell3 = row.insertCell(2);
        cell3.innerHTML = "City";
        let cell4 = row.insertCell(3);
        cell4.innerHTML = "State";
        let cell5 = row.insertCell(4);
        cell5.innerHTML = "Zip";
        let cell6 = row.insertCell(5);
        cell6.innerHTML = "Phone";
        let cell7 = row.insertCell(6);
        cell7.innerHTML = "Fax";
        let cell8 = row.insertCell(7);
        cell8.innerHTML = "Latitude";
        let cell9 = row.insertCell(8);
        cell9.innerHTML = "Longitude";
        table.appendChild(row);
        table = document.getElementById("tableBodyParkLocation");
        table.innerHTML = "";
        for (let i = 0; i < objs.parks.length; i++) {
            if (chosenLocation == objs.parks[i].State) {
                let row = table.insertRow(table.rows.length);
                let cell1 = row.insertCell(0);
                cell1.innerHTML = objs.parks[i].LocationName;
                table.appendChild(row);
                let cell2 = row.insertCell(1);
                cell2.innerHTML = objs.parks[i].Address;
                table.appendChild(row);
                let cell3 = row.insertCell(2);
                cell3.innerHTML = objs.parks[i].City;
                table.appendChild(row);
                let cell4 = row.insertCell(3);
                cell4.innerHTML = objs.parks[i].State;
                table.appendChild(row);
                let cell5 = row.insertCell(4);
                cell5.innerHTML = objs.parks[i].ZipCode;
                table.appendChild(row);
                let cell6 = row.insertCell(5);
                cell6.innerHTML = objs.parks[i].Phone;
                table.appendChild(row);
                let cell7 = row.insertCell(6);
                cell7.innerHTML = objs.parks[i].Fax;
                table.appendChild(row);
                let cell8 = row.insertCell(7);
                cell8.innerHTML = objs.parks[i].Latitude;
                table.appendChild(row);
                let cell9 = row.insertCell(8);
                cell9.innerHTML = objs.parks[i].Longitude;
                table.appendChild(row);
            }
        }
    }

    // Function to create a table for a selected park type.
    function createParkTypeTable() {
        let parkTypeChoice = document.getElementById("parkTypeChoice").selectedIndex;
        // to select option from a specific dropdown, in this instance parkTypeChoice.
        let chosenParkType = document.getElementById("parkTypeChoice").options[parkTypeChoice].value;
        let table = document.getElementById("tableHeadParkType");
        table.innerHTML = "";
        let row = table.insertRow(table.rows.length);
        let cell1 = row.insertCell(0);
        cell1.innerHTML = "Name";
        let cell2 = row.insertCell(1);
        cell2.innerHTML = "Address";
        let cell3 = row.insertCell(2);
        cell3.innerHTML = "City";
        let cell4 = row.insertCell(3);
        cell4.innerHTML = "State";
        let cell5 = row.insertCell(4);
        cell5.innerHTML = "Zip";
        let cell6 = row.insertCell(5);
        cell6.innerHTML = "Phone";
        let cell7 = row.insertCell(6);
        cell7.innerHTML = "Fax";
        let cell8 = row.insertCell(7);
        cell8.innerHTML = "Latitude";
        let cell9 = row.insertCell(8);
        cell9.innerHTML = "Longitude";
        table.appendChild(row);
        table = document.getElementById("tableBodyParkType");
        table.innerHTML = "";
        for (let i = 0; i < objs.parks.length; i++) {
            if (objs.parks[i].LocationName.search(chosenParkType) != -1) {
                let row = table.insertRow(table.rows.length);
                let cell1 = row.insertCell(0);
                cell1.innerHTML = objs.parks[i].LocationName;
                table.appendChild(row);
                let cell2 = row.insertCell(1);
                cell2.innerHTML = objs.parks[i].Address;
                table.appendChild(row);
                let cell3 = row.insertCell(2);
                cell3.innerHTML = objs.parks[i].City;
                table.appendChild(row);
                let cell4 = row.insertCell(3);
                cell4.innerHTML = objs.parks[i].State;
                table.appendChild(row);
                let cell5 = row.insertCell(4);
                cell5.innerHTML = objs.parks[i].ZipCode;
                table.appendChild(row);
                let cell6 = row.insertCell(5);
                cell6.innerHTML = objs.parks[i].Phone;
                table.appendChild(row);
                let cell7 = row.insertCell(6);
                cell7.innerHTML = objs.parks[i].Fax;
                table.appendChild(row);
                let cell8 = row.insertCell(7);
                cell8.innerHTML = objs.parks[i].Latitude;
                table.appendChild(row);
                let cell9 = row.insertCell(8);
                cell9.innerHTML = objs.parks[i].Longitude;
                table.appendChild(row);
            }
        }
    }

    // Function to create a table for ALL the National Parks.
    function createAllTable() {
        let table = document.getElementById("tableHeadParkType");
        table.innerHTML = "";
        let row = table.insertRow(table.rows.length);
        let cell1 = row.insertCell(0);
        cell1.innerHTML = "Name";
        let cell2 = row.insertCell(1);
        cell2.innerHTML = "Address";
        let cell3 = row.insertCell(2);
        cell3.innerHTML = "City";
        let cell4 = row.insertCell(3);
        cell4.innerHTML = "State";
        let cell5 = row.insertCell(4);
        cell5.innerHTML = "Zip";
        let cell6 = row.insertCell(5);
        cell6.innerHTML = "Phone";
        let cell7 = row.insertCell(6);
        cell7.innerHTML = "Fax";
        let cell8 = row.insertCell(7);
        cell8.innerHTML = "Latitude";
        let cell9 = row.insertCell(8);
        cell9.innerHTML = "Longitude";
        table.appendChild(row);
        table = document.getElementById("tableBodyParkType");
        table.innerHTML = "";
        for (let i = 0; i < objs.parks.length; i++) {
            let row = table.insertRow(table.rows.length);
            let cell1 = row.insertCell(0);
            cell1.innerHTML = objs.parks[i].LocationName;
            table.appendChild(row);
            let cell2 = row.insertCell(1);
            cell2.innerHTML = objs.parks[i].Address;
            table.appendChild(row);
            let cell3 = row.insertCell(2);
            cell3.innerHTML = objs.parks[i].City;
            table.appendChild(row);
            let cell4 = row.insertCell(3);
            cell4.innerHTML = objs.parks[i].State;
            table.appendChild(row);
            let cell5 = row.insertCell(4);
            cell5.innerHTML = objs.parks[i].ZipCode;
            table.appendChild(row);
            let cell6 = row.insertCell(5);
            cell6.innerHTML = objs.parks[i].Phone;
            table.appendChild(row);
            let cell7 = row.insertCell(6);
            cell7.innerHTML = objs.parks[i].Fax;
            table.appendChild(row);
            let cell8 = row.insertCell(7);
            cell8.innerHTML = objs.parks[i].Latitude;
            table.appendChild(row);
            let cell9 = row.insertCell(8);
            cell9.innerHTML = objs.parks[i].Longitude;
            table.appendChild(row);
        }
    }
}