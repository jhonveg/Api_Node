import mongoose from 'mongoose';

const conect =  async()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/matito');
        console.log('matito connected')
    } catch (error) {
        console.log(error.message)
    }
}

export default conect;