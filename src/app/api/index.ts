import axios from 'axios'
//создали датапровайдр который содержит методы для получения информации с бека

const axiosApiInstance = axios.create({
    baseURL: 'http://localhost:3001',
})

export const DataProvider = {
    getItems() {
        return new Promise((resolve, reject) => {
            axiosApiInstance.get('/items')
                .then((res: any) => {
                    resolve(res)
                })
                .catch((error: any) => {
                    try {
                        reject(error.response.data);
                    } catch (e) {
                        reject(error);
                    }
                })
        })
    },
    addItem(id: number, title: string, text: string) {
        return new Promise((resolve, reject) => {
            axiosApiInstance.post('/new-item', {id: id, title: title, text: text})
                .then((res: any) => {
                    resolve(res)
                })
                .catch((error: any) => {
                    try {
                        reject(error.response.data);
                    } catch (e) {
                        reject(error);
                    }
                })
        })
    },
    deleteItem(id: number) {
        return new Promise((resolve, reject) => {
            axiosApiInstance.post('/drop-item', {id: id})
                .then((res: any) => {
                    resolve(res)
                })
                .catch((error: any) => {
                    try {
                        reject(error.response.data);
                    } catch (e) {
                        reject(error);
                    }
                })
        })
    },
    updateItem (id: number, title: string, text: string) {
        return new Promise((resolve, reject) => {
            axiosApiInstance.post('/update-item', {id: id, title: title, text: text})
                .then((res: any) => {
                    resolve(res)
                })
                .catch((error: any) => {
                    try {
                        reject(error.response.data);
                    } catch (e) {
                        reject(error);
                    }
                })
        })
    }
}