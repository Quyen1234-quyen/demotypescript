
import mongoose from 'mongoose';
import config from '../config';
import log from '../logger';

function connect(){
    const dbUri=config.dbUri ;
    return mongoose.connect(
        dbUri,
        {
            useNewUrlParser: true,
            useFindAndModify:false,
            useUnifiedTopology:true
        }
    ).then(result=>{
        log.info("Database connected");
    }).catch(error=>{
        log.error("db error", error);
        process.exit(1);
    });
}


export default connect;