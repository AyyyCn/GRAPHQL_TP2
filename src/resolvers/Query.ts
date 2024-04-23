export const Query = {
  hello: () => "the infamous Hello GL3",
  
  getAllCvs: (parent: any, args: any, { db }: any, info: any) => {
    return db.cvs;
  },

  getCvById: (parent: any, { id }: any, { db }: any, info: any) => {

    const CV = db.cvs.find((cv: any) => cv.id === id);
    if (!CV || CV === undefined) {
      throw new Error(` No cv with id: ${id} exists `);
    }
    return CV;
  },
};


