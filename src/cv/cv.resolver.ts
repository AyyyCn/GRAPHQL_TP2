import { Resolver, Query, Mutation, Args, Parent, ResolveField, Subscription } from '@nestjs/graphql';
import { CvService } from './cv.service';
import { Cv } from './entities/cv.entity';
import { CreateCvInput } from './dto/create-cv.input';
import { UpdateCvInput } from './dto/update-cv.input';
import { PubSub } from "graphql-subscriptions";
import { CvSubscriptionType } from './entities/cv.subscription';
import  { db }  from '../db/db';


const pubSub = new PubSub();

@Resolver(() => Cv)
export class CvResolver {
  constructor(private readonly cvService: CvService) {

  }

  @Query(returns => [Cv])
  findAll()
   {
    return this.cvService.findAll(db);
  }

  @Query(returns => Cv)
  findOne(

    @Args('id') id: string
  ) {
    return this.cvService.findOne(db , id);
  }

  @Mutation(returns => Cv)
  createCv(

    @Args('createCvInput') createCvInput: CreateCvInput
  ) {
    const newcv = this.cvService.create(db , createCvInput);
    pubSub.publish('cvModified' , { cvModified : { cv : newcv , mutation : "ADD"} });
    return newcv;
  }

  @Mutation(returns => Cv)
  updateCv(

    @Args('id') id : string ,
    @Args('updateCvInput') updateCvInput: UpdateCvInput) {
      const cvadded = this.cvService.update(db , id , updateCvInput);
      pubSub.publish('cvModified' , { cvModified : { cv : cvadded , mutation : "UPDATE"} });
      return cvadded;
  }

  @Mutation(returns => Cv)
  removeCv(

    @Args('id') id: string
  ) {
    const cvremoved = this.cvService.remove(db , id);
    pubSub.publish('cvModified' , { cvModified : { cv : cvremoved , mutation : "DELETE"} });
    return cvremoved;
  }

  @Subscription(returns => CvSubscriptionType)
  cvModified(

  ){
    console.log(db);
    return pubSub.asyncIterator('cvModified');
  }


  @ResolveField()
  async user(
    @Parent() cv : Cv,

    ){
    return this.cvService.getUser(db , cv.user);
  }

  


  @ResolveField()
  async skills(
    @Parent() cv : Cv,

    ){
    return this.cvService.getSkills(db , cv.skills);
  }

  
}
