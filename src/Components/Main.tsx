import React from 'react'
import List from './List'
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
                    <List />
                </ListProvider>
            </div>
        </>
    )
}

export default Main