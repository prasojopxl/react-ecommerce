import React from 'react'
import { FormInput } from '../../../components/formInput/FormInput'

export const PostForm = ({
    title,
    onTitle,
    level,
    onLevel,
    price,
    onPrice,
    onSubmit,
    isUpdate
}) => {
    return (
        <div>
            {/* <FormInput type="text" placeholder="Course Name" defaultValue={title} value={title} onChange={(e)=> {
                onTitle(e.target.value)
            }}/>
            <FormInput type="text" placeholder="Level" defaultValue={level} value={level} onChange={(e)=> {
                onLevel(e.target.value)
            }}/>
            <FormInput type="text" placeholder="Price" defaultValue={price} value={price} onChange={(e)=> {
                onPrice(e.target.value)
            }}/>
            <button  onClick={onSubmit}> {isUpdate ? "Update" : "Create"} </button>         */}

            <input type="text" placeholder="Course Name" value={title} onChange={(e)=> {onTitle(e.target.value)}}/>
            <input type="text" placeholder="Level" value={level} onChange={(e)=> {onLevel(e.target.value)}}/>
            <input type="text" placeholder="Price" value={price} onChange={(e)=> {onPrice(e.target.value)}}/>
            <button className="btn" style={{border:"none", minWidth:"100px"}} onClick={onSubmit}> {isUpdate ? "Update" : "Create"} </button>
        </div>
        
    )
}
