import React from 'react'
import { ListA } from './List'
import { Input } from './Input'
import { ListProvider } from './ListContetx'
import { Test } from './MaterialUi/Test/Test'

const Main = () => {
    // console.log(<Input />);
    // console.log("List,", List());

    return (
        <>
            <div>
                <ListProvider>
                    {/* <Input />
                    <ListA /> */}
                    <Test />
                </ListProvider>
            </div>
        </>
    )
}

export default Main