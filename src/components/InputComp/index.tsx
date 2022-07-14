import { Input } from "@nextui-org/react";
import React, { useRef, useState } from "react";

export default function index() {


    const clearInput = (target: HTMLInputElement) => target.value = ''

    const onKeyDownHandler = ({ ctrlKey, code, target }: React.KeyboardEvent<HTMLInputElement>): boolean => {
        if (ctrlKey && code === 'Enter') {
            clearInput(target)
        }
        return true
    }

    return (
        <Input labelPlaceholder='Input your Task' onKeyDown={onKeyDownHandler} />
    )
}