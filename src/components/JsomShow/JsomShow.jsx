import React from 'react'
import { useSelector } from 'react-redux'




function JsomShow() {
    const { users: { activeUser }, aplicants: { items, newApplicants } } = useSelector(state => state);

    let tempArray = items.filter(item =>  item.selected === true ? item.id : null);
    tempArray = tempArray.map(item=> item.id)
    let jsonObject = { clienId: '', applicantsIds: [], newApplicants: [] }
    jsonObject.clienId = activeUser;
    jsonObject.applicantsIds = tempArray;
    jsonObject.newApplicants.push(newApplicants);

    const getJsonIndented = (data) => JSON.stringify(data, null, 2);

    return (
        <div>
            <pre style={{ overflow: "auto" }} >{getJsonIndented(jsonObject)}</pre>
        </div>
    )
}

export default JsomShow
