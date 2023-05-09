import React, { useState, createContext } from 'react'

export type objType = {
    id: number;
    note: string;
}[]



export const noteObj: objType = [
    { id: 1, note: 'typescript' }
]

export type contexType = {
    note: string
    setNote: React.Dispatch<React.SetStateAction<string>>
    setlistArray: any
    addNote: any
    delNote: any
    listArray: objType
    setfirst: React.Dispatch<React.SetStateAction<boolean>>
}

type listContextProvideType = {
    children: React.ReactNode
}

export const ListContext = createContext({} as contexType);

export const ListProvider = ({ children }: listContextProvideType) => {
    const [note, setNote] = useState<string>("");
    const [listArray, setlistArray] = React.useState<objType>([
        { id: 1, note: 'typescript' }
    ]);
    const [first, setfirst] = React.useState(false)

    React.useEffect(() => {
        console.log("context render");
    }, [])
    console.log("check boolean ", !"");

    const addNote = (note: string, noteObj: objType) => {
        const elem = listArray.length
        const tempObj = listArray;
        if (note) {

            const newEntry = {
                id: elem + 1,
                note: note
            }

            tempObj.push(newEntry);
            setlistArray(tempObj)
        }
        // console.log({ newObj: listArray });
    }
    const delNote = (id: number, arr: objType) => {
        // setfirst(false)
        const temp = [...arr];

        const index = temp.findIndex(x => x.id === id);
        temp.splice(index, 1);

        setlistArray(temp)
        // setfirst(!first)

    }
    !!note && console.log(note);

    return (
        <ListContext.Provider value={{ setfirst, note, delNote, setlistArray, listArray, setNote, addNote }}>
            {children}
        </ListContext.Provider>
    );
};

