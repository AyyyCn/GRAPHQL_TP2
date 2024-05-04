import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCvInput } from './dto/create-cv.input';
import { UpdateCvInput } from './dto/update-cv.input';
import { Cv } from './entities/cv.entity';
import { db } from 'src/db/db';
import {v4 as uuid} from 'uuid';

@Injectable()
export class CvService {
  
  findAll(db : any) {
    return db.cvs;
  }

  findOne(db : any , id : string) {
    const cv = db.cvs.find(cv => cv.id === id);
    if(!cv){
      throw new NotFoundException(`Le CV d'id ${id} ne se trouve pas.`);
    }
    return cv;
  }

  create(db : any , createCvInput: CreateCvInput) {
    const {name , age , job , userId , skills} = createCvInput;
    const cv = new Cv();
    cv.id = uuid();
    cv.name = name ;
    cv.age = age ;
    cv.job = job;
    cv.skills = [];
    const user = db.users.find(user => user.id === userId);
    if(!user){
      throw new NotFoundException(`There is no user with id ${userId}`);
    }
    else{
      cv.user = userId;
    }

    for(let skill of skills){
      const result = db.skills.find(result => result.id === skill);
      if(!result){
        throw new NotFoundException(`there is no skill with id ${skill}`);
      }
      else {
        cv.skills.push(skill);
      }
    }

      db.cvs.push(cv);

      return cv ;
  } 

  update(db:any , id: string, updateCvInput: UpdateCvInput) {
    const {name , age , job ,  skills} = updateCvInput;
    const cv = db.cvs.find(cv => cv.id === id);

    if(!cv){
      throw new NotFoundException(`There is no Cv with id ${id}`);
    }

    cv.name = name;
    cv.age = age;
    cv.job = job;
    cv.skills = [];

    for(let skill of skills){
      const result = db.skills.find(result => result.id === skill);
      if(!result){
        throw new NotFoundException(`there is no skill with id ${skill}`);
      }
      else {
        cv.skills.push(skill);
      }
    }

    return cv;
  }

  remove(db : any  , id: string) {
    const cv = db.cvs.find(cv => cv.id === id);

    if(!cv){
      throw new NotFoundException(`There is no cv with id ${id}`);
    }
    db.cvs = db.cvs.filter(cv => cv.id != id);

    return cv;
  }

  getUser(db : any , id : string){
    const user = db.users.find((user) => user.id === id);
    if(!user){
      throw new NotFoundException(`On n' a pas trouvé le user de cv d' id ${id}`);
    }
    return user;
  }

  getSkills(db : any , skills : string[]){
    const result = db.skills.filter(skill => skills.includes(skill.id));
    return result;
  }

}