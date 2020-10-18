import React from "react";
import Button from "./Button";
import Label from "./Label";

const Main = () => {
    return (
        <main className="main">
            <header>
                <h1>Buttons</h1>
            </header>
            <section className="btn-details">
                <div className="btn">
                    <Label text="<Button />" />
                    <Button className="btn--default" btnText="Default" />
                </div>
                <div className="btn">
                    <Label
                        text="&:hover, &:focus"
                        style={{ color: "red" }}
                        className="hover-focus-state"
                    />
                    <Button
                        className="btn--default-focused"
                        btnText="Default"
                    />
                </div>
            </section>
            <section className="btn-details">
                <div className="btn">
                    <Label text="<Button variant=”outline” />" />
                    <Button className="btn--outline" btnText="Default" />
                </div>
                <div className="btn">
                    <Label text="&:hover, &:focus" />
                    <Button
                        className="btn--outline-focused"
                        btnText="Default"
                    />
                </div>
            </section>
            <section className="btn-details">
                <div className="btn">
                    <Label text="<Button variant=”text” />" />
                    <Button className="btn--text" btnText="Default" />
                </div>
                <div className="btn">
                    <Label text="&:hover, &:focus" />
                    <Button className="btn--text-focused" btnText="Default" />
                </div>
            </section>
            <section className="btn-details">
                <div className="btn">
                    <Label text="<Button disableShadow />" />
                    <Button className="btn--active" btnText="Default" />
                </div>
            </section>
            <section className="btn-details">
                <div className="btn">
                    <Label text="<Button disabled />" />
                    <Button className="btn--disabled" btnText="Disabled" />
                </div>
                <div className="btn">
                    <Label text="<Button variant=”text” disabled />" />
                    <Button
                        className="btn--disabled-focused "
                        btnText="Disabled"
                    />
                </div>
            </section>
            <section className="btn-details">
                <div className="btn">
                    <Label text="<Button startIcon=”local_grocery_store” />" />
                    <Button className="btn--grocery-left btn--active" btnText="Default">
                    </Button>
                </div>
                <div className="btn">
                    <Label text="<Button endIcon=”local_grocery_store” />" />
                    <Button className="btn--grocery-right btn--active" btnText="Default">
                    </Button>
                </div>
            </section>
            <section className="btn-details">
                <div className="btn">
                    <Label text="<Button size=”sm” />" />
                    <Button className="btn--active size-sm" btnText="Default" />
                </div>
                <div className="btn">
                    <Label text="<Button size=”md” />" />
                    <Button className="btn--active size-md" btnText="Default" />
                </div>
                <div className="btn">
                    <Label text="<Button size=”lg” />" />
                    <Button className="btn--active size-lg" btnText="Default" />
                </div>
            </section>
            <section className="btn-details">
                <div className="btn">
                    <Label text="<Button color=”default” />" />
                    <Button className="btn--default" btnText="Default" />
                </div>
                <div className="btn">
                    <Label text="<Button color=”primary” />" />
                    <Button className="btn--active" btnText="Default" />
                </div>
                <div className="btn">
                    <Label text="<Button color=”secondary” />" />
                    <Button className="btn--secondary" btnText="Secondary" />
                </div>
                <div className="btn">
                    <Label text="<Button color=”danger” />" />
                    <Button className="btn--danger" btnText="Danger" />
                </div>
            </section>
            <section className="btn-details">
                <div className="btn">
                    <Label text="&:hover, &:focus" />
                    <Button
                        className="btn--default-focused"
                        btnText="Default"
                    />
                </div>
                <div className="btn">
                    <Button className="btn--active-focused" btnText="Default" />
                </div>
                <div className="btn">
                    <Button
                        className="btn--secondary-focused"
                        btnText="Secondary"
                    />
                </div>
                <div className="btn">
                    <Button className="btn--danger-focused" btnText="Danger" />
                </div>
            </section>
        </main>
    );
};

export default Main;
