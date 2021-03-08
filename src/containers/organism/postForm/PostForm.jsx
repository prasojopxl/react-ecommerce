import React from 'react'
import { FormInput } from '../../../components/formInput/FormInput'

export const PostForm = ({
    title,
    onTitle,
    description,
    onDescription,
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

            <div className="item-input"><input type="text" placeholder="Course Name" value={title} onChange={(e)=> {onTitle(e.target.value)}}/></div>
            <div className="item-input"><input type="text" placeholder="Description" value={description} onChange={(e)=> {onDescription(e.target.value)}}/></div>
            <div className="item-input"><input type="text" placeholder="Price" value={price} onChange={(e)=> {onPrice(e.target.value)}}/></div>
            <div className="item-input"><button className="btn" style={{border:"none", minWidth:"100px"}} onClick={onSubmit}> {isUpdate ? "Update" : "Create"} </button></div>
        </div>
        
    )
}
