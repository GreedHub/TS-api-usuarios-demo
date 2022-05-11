import MSQLDriver from '../drivers/mysql'

const msqlDriverInstance = MSQLDriver.getInstance()


const getUserById = async (id:number)=>{

    return new Promise(async (resolve,reject)=>{
        try{
            const res = await  msqlDriverInstance.executeSp("GetUserById",[id])
            resolve(res)
        }
        catch(err){
            reject(err)
        }
    })  
    
}


export default {
    getUserById
}