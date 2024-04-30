import mongoose from 'mongoose';

const connectionMongoDb = () => {
    mongoose.connect(process.env.DB_CONNECTION!)
        .then(connection => {
            console.log(`connection established in database "${connection.connections[0].name}"`);
        })
        .catch(error => {
            console.log(error);
        });
}

export default connectionMongoDb;