import React from 'react'
import { ListA } from './List'
import { Input } from './Input'
import { ListProvider } from './ListContetx'

const Main = () => {
    // console.log(<Input />);
    // console.log("List,", List());

    return (
        <>
            <div>
                <ListProvider>
                    <Input />
                    <ListA />
                </ListProvider>
            </div>
        </>
    )
}

export default Main