export const Query = {
  hello: () => "the infamous Hello GL3",
  // get all cvs
  getAllCvs: (parent: any, args: any, { db }: any, info: any) => {
    return db.cvs;
  },
    // get cv by id
  getCvById: (parent: any, { id }: any, { db }: any, info: any) => {

    const CV = db.cvs.find((cv: any) => cv.id === id);
    if (!CV || CV === undefined) {
        //throw errow because graphql bad
      throw new Error(` No cv with id: ${id} exists `);
    }
    return CV;
  },
};


