import mongoose from 'mongoose' ;

const subschema = new mongoose.schema(
    {
        name:{
            type: string,
            required:[true,'subscription name is required'],
            trim:true,
            minlength:2,
            maxlength:100,
        },
        price :{
            type:Number,
            required:[true,'subscription price is required'],
            min:[0,'Price must be greater than 0'],
            max:[1000,'Price must be less than 1000'],
        },
        currency:{
            type: string,
            enum:['usd','eur','gbp'],
            default:'usd',
        },
        frequency:{
            type:string,
            enum:['daily','weekly','monthly','yearly'],
        },
        category:{
            type:string,
            enum:['sports','news','entertainment','lifestyle','technology','finance'],
            required:true,
        },
        paymentmethod:{
            type:string,
            required:true,
            trim:true,
        },
        status:{
            type:string,
            enum:['active','inactive'],
            default:'active',
        },
        startdate:{
            type:Date,
            required:true,
            validate:{
            validator: function (value){
                return value<= new Date();},
            message:'start date must be in the past',}
        },
        renewaldate:{
            type:Date,
            required:true,
            validate:{
             validator: function (value){
                return value>this.startDate ;},
             message:'start date must be in the past', }
        },
        user:{
            type:mongoose.schema.Types.ObjectId,
            ref:'user',
            required:true,
            index:true,

        },
        },


    
    {timestamps:true});
    subschema.pre('save',function (next) {
        if (!this.renewaldate) {
            const renewalperiods={
                daily:1,
                weekly:7,
                monthly:30,
                yearly:365,
            };
            this.renewaldate=new Date(this.startDate);
            this.renewaldate.setDate(this.renewaldate.getDate()+ renewalperiods[this.frequency]);
        }
        if (this.renewaldate<new Date()) {
            this.status='expired';
        }
        next();
    });
    const subscription=mongoose.model('subscription',subschema);
