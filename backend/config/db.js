import mongose from 'mongoose'
import colors from 'colors'

// a mongoose stuf (mongoose.connect ....) return always a promise
const MONGO_URI="mongodb+srv://social:social@social.qob6w.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
const connectDB = async () => {
    try{
        const conn = await mongose.connect(MONGO_URI,{
            useUnifiedTopology: true,
            useNewUrlParser: true,
            useCreateIndex: true
        })
        console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
    } catch (error) {
      console.error(`Error: ${error.message}`.red.underline.bold)
            process.exit(1)
    }
}

export default connectDB