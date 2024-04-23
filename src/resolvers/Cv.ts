export const Cv = {
  skills: ({ id }: any, args: any, { db }: any) => {
    let cvskill: string[];
    let skillids: string[] = [];
    cvskill = db.cv_skills.filter((cvskill: any) => cvskill.cv === id);
    cvskill.forEach((skillid: any) => {
      skillids.push(skillid.skill); // an array of strings that stores the cv' skills ids
    });
    return db.skills.filter((skill: any) => skillids.includes(skill.id));
  },

  user: ({ user }: any, args: any, { db }: any) => {
    let userId: string = user; // so that it can read it as a string
    const userByCv = db.users.find((user: any) => user.id === userId);
    userByCv.role = userByCv.role === "admin" ? "ADMIN" : "USER"; //to match the roles enum
    return userByCv;
  },
};
