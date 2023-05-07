const mongoose=require('mongoose')
const conentionstring='mongodb+srv://fahimmuntasir040:39gWih2mhGcMABLK@cluster0.4tatz8d.mongodb.net/test'


const connectDB=async()=>{

    // try and catch is like if else ..catch error is needed because when server is stopes for any reason it will give error.
    try{
        const con=await mongoose.connect(conentionstring,{

        })

        console.log(`MongoDB connected:${con.connection.host}`);
    }
    catch(err){


        console.log(err);
        process.exit(1);
    }
}

module.exports=connectDB