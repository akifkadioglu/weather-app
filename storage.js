import { Storage } from 'expo-storage'

export const storage = {

    LANGUAGE: 'lang',


    async pull(key) {
        return await Storage.getItem({ key: key })

    },
    async push(key, value) {
        await Storage.setItem({
            key: key,
            value: value
        })
    },
    async remove(key) {
        return await Storage.removeItem({ key: key })

    },
}