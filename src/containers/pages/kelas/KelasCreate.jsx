import React, {useEffect, useState} from 'react'
import {FormInput} from "../../../components/formInput/FormInput";

export const KelasCreate = () => {

    return (
        <div className="formpage">
            <div className="wrp-form">
                <h4>Create Data Course</h4>
                <div className="boxlogin">
                    <FormInput type="text" placeholder="Course Name"/>
                    <FormInput type="text" placeholder="Level"/>
                    <FormInput type="text" placeholder="Price"/>
                    <FormInput type="submit" value="Submit"/>
                </div>
            </div>
        </div>
    )
}
