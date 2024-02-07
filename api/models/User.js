import mongoose,{Schema} from 'mongoose';

const userSchema = mongoose.Schema(
    {
        firstName:{
            type:String,
            required:true
        },
        lastName:{
            type:String,
            required:true
        },
        userName:{
            type:String,
            required:true,
            unique:true
        },
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true
        },
        profileImage:{
            type:String,
            required:false,
            default:"https://hips.hearstapps.com/hmg-prod/images/sam-worthington-avatar-the-way-of-the-water-1670323169.jpg?crop=0.528xw:1.00xh;0.134xw,0&resize=300:*"
        },
        isAdmin:{
            type: String,
            default:false
        },
        roles:{
            type:[Schema.Types.ObjectId],
            required:true,
            ref:"Role"
        }
    },
    {
        timestamps:true
    }
)

export default mongoose.model("User", userSchema)