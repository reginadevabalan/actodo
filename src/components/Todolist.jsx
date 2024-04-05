import { useState } from "react"
import Todoitem from "./Todoitem"

function Todolist(props){
    const activityArr = props.activityArr
    const setActivityArr = props.setActivityArr

    return(
<div className="bg-[#BDB4EA] border border-[#BDB4EA] rounded-md p-2 flex-grow">
                <h1 className="text-2xl font-medium">Today's Activity</h1>
                
                {activityArr.length===0?<p>You haven't added any activity</p>:""}
                {
                    activityArr.map(function(item,index){
                        return <Todoitem id={item.id} activity={item.activity} index={index} activityArr={activityArr} setActivityArr={setActivityArr} />

                    })
                }
            </div>
    )
}

export default Todolist