const mongoose= require('mongoose')
const userSchema = new mongoose.Schema({
    username:{
        type: String,
    
    },
    email:{
        type: String,
       
    },
    phonenumber:{
        type: int,
    },
    password:{
        type: String,
      
    },
    role:{
        type: String,
       
    },
     confirmpassword:{
        type: String,
       
    },
    image:{
        type: String,
        
    },
    classe:{
        type: String,
    
    }
},{ timestamps: true});
const user = mongoose.model('user', userSchema);
module.exports = user