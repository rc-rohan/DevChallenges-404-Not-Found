import React from 'react'
import Button from './Button'
import Label from './Label'

const Main = () =>{
    return(
        <main>
            <section className="btn-details">
                <div className>
                    <Label text="<Button disabledShadow>"/>
                    <Button className="btn--active" btnText="Default"/>
                </div>
            </section>
        </main>
    )
}

export default Main