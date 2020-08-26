import {createConnection} from 'typeorm/index'

const promise = (async function () {
    console.log('创建connection111')
    return await createConnection()
})()


export const getDatabaseConnection = async () => {
    return promise
}