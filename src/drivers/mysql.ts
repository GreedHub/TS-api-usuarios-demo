import  mysql from 'mysql'

class MSQLDriver {
    static instance: MSQLDriver
    connection: any

    private constructor( ){
        this.connect()
    }

    public static getInstance(){
        if(MSQLDriver.instance) return MSQLDriver.instance

        return new MSQLDriver()
    }

    connect(){
        this.connection = mysql.createConnection({
            host     : '192.168.0.103',
            user     : 'root',
            password : 'Password!234',
            database : 'test' 
          });
           
          this.connection.connect();
    }

    executeSp(name:string,...params:any[]){
        let paramsString = `(`;

        params.forEach((param,index)=> {
            if(index !== params.length-1)
                paramsString+= `${param},`
            else 
                paramsString+= `${param}`
        } )

        paramsString+= `)`

        const query = `call ${name} ${paramsString}`

        console.log({query})

        return new Promise((resolve,reject)=>{
            this.connection.query(query,
                function (error:any, results:any, fields:any) {
                    if (error) throw error;
                    resolve({results})
                });
        })


    }

    closeConnection(){
        this.connection.end();
    }

}

export default MSQLDriver