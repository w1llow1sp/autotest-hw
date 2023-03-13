import React, { ChangeEvent, KeyboardEvent, useState } from 'react'
import Greeting from './Greeting'
import { UserType } from './HW3'

type GreetingContainerPropsType = {
    users: Array<UserType> // need to fix any
    addUserCallback: (name:string)=>void // need to fix any
}

export const pureAddUser = (name: string, setError:(a:string) => void, setName:(b:string)=> void ,addUserCallback: (name:string)=>void) => {
    // если имя пустое - показать ошибку, иначе - добавить юзера и очистить инпут
    // такс, проверим, есть ли у нас длина строки. Если нет - кидаем ошибку. Если да
    if (name.trim()!==''){
        addUserCallback(name)
        setName('')
    } else {
        setError('Ошибка! Введите имя!')
    }
}

export const pureOnBlur = (name: string, setError:(a:string) => void) => {
    // если имя пустое - показать ошибку
    if (name.trim()=='') {
        setError('Ошибка! Введите имя!')
    }
}

export const pureOnEnter = (e: KeyboardEvent<HTMLInputElement>, addUser:()=>void) => {
   if (e.key==='Enter') {addUser()}
    // если нажата кнопка Enter - добавить
}

// более простой и понятный для новичков
// function GreetingContainer(props: GreetingPropsType) {

// более современный и удобный для про :)
const GreetingContainer: React.FC<GreetingContainerPropsType> = ({
    users,
    addUserCallback,
}) => {
    // деструктуризация пропсов
    const [name, setName] = useState<string>('') // need to fix any
    const [error, setError] = useState<string>('') // need to fix any

    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => { // need to fix any
        setName(e.currentTarget.value) // need to fix

        error && setError('')
    }
    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback)
    }

    const onBlur = () => {
        pureOnBlur(name, setError)
    }

    const onEnter = (e: any) => {
        pureOnEnter(e, addUser)
    }

    // считаем длинну добавленных пользователей. Удобно через lenght
    const totalUsers = users.length // need to fix
    //А тут нам надо дернуть послежнее имя большователя и проверить, мы вообще чет добавляли.
    // если да -- то выводим, если нет -- пустая строчка.
   const lastUserName = users.length ? users[users.length -1].name : '' // need to fix

    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    )
}

export default GreetingContainer
