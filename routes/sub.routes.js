import { Router} from 'express' ;
import userRouter from './user.routes.js';
 

const subRouter=Router();

subRouter.get('/',(req,res)=> res.send({title:'get all subscriptions'}));

subRouter.get('/:id',(req,res)=> res.send({title:'get subscription details'}));

subRouter.post('/',(req,res)=> res.send({title:'create subscription'}));

subRouter.put('/:id',(req,res)=> res.send({title:'update subscription'}));

subRouter.delete('/:id',(req,res)=> res.send({title:'delete subscription'}));

subRouter.get('/users/:id',(req,res)=> res.send({title:'get all user subscriptions'}));

subRouter.put('/:id/cancel',(req,res)=> res.send({title:'cancel subscription'}));

subRouter.get('/upcoming-renewals',(req,res)=> res.send({title:'get upcoming renewals'}));

export default subRouter;