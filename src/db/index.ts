import { Cv, CvSkill, Db, Role, Skill, User } from "../types";

export const users: User[] = [
  {
    id: "e5504677-d375-4f4e-bab1-7267028aba85",
    name: "Ann Estrada",
    email: "melaniesellers@hotmail.com",
    role: Role.Admin,
  },
  {
    id: "8a34ecc2-f8bb-4a28-9861-d0430dd21a52",
    name: "Jeffrey Fuentes",
    email: "somnuek-van-beek@web.info",
    role: Role.User,
  },
  {
    id: "4e3ad7a6-6001-4212-b1f7-6931a216fa5a",
    name: "Sara Gray",
    email: "shizuko.ohana@frontiernet.info",
    role: Role.User,
  },
  {
    id: "feed4e4a-01bc-464d-b6fc-c340adead8a7",
    name: "Beata Beata",
    email: "dinesh.garcia900@mail.com",
    role: Role.User,
  },
  {
    id: "9983f316-d0ae-46c6-8a0d-4aa8869d2926",
    name: "Lyubov Fuentes",
    email: "lakshmi-cohen@zonnet.org",
    role: Role.Admin,
  },
];

export const skills: Skill[] = [
  {
    id: "56b3442a-eb56-46a5-a1e9-953b7cfe489c",
    designation: "Dependability",
  },
  {
    id: "b514d396-ac67-4db7-92c7-2d56e665ddd6",
    designation: "Teamwork",
  },
  {
    id: "dc0b6133-e746-401c-bea2-e0f9233eb7cb",
    designation: "Verbal and presentation",
  },
  {
    id: "40cca01a-0377-4f49-93de-b5b9283bc4c9",
    designation: "Patience",
  },
  {
    id: "f7b31280-67ab-4aab-864b-a92f039a2bc3",
    designation: "Process automation",
  },
  {
    id: "c38e6e46-04b1-4fdc-8219-80a815339b40",
    designation: "Multilingualism",
  },
];

export const cvs: Cv[] = [
  {
    id: "c013edea-23e6-4d21-97af-1f92fda6c23f",
    name: "Ann Estrada",
    age: 58,
    job: "Central Mobility Liaison",
    user: "e5504677-d375-4f4e-bab1-7267028aba85",
  },
  {
    id: "6dd8c66d-2360-4f62-8a77-94b3735f0cf1",
    name: "Jeffrey Fuentes",
    age: 30,
    job: "International Brand Associate",
    user: "8a34ecc2-f8bb-4a28-9861-d0430dd21a52",
  },
  {
    id: "d66ae2cc-d7e9-4cb4-adb3-4c19155b3ac4",
    name: "Sara Gray",
    age: 56,
    job: "Human Web Consultant",
    user: "4e3ad7a6-6001-4212-b1f7-6931a216fa5a",
  },
  {
    id: "c333628e-9891-41f1-9498-fdfd365a4cc4",
    name: "Sara Gray",
    age: 50,
    job: "Human Web Consultant",
    user: "4e3ad7a6-6001-4212-b1f7-6931a216fa5a",
  },
  {
    id: "668a9cf8-7dcb-4d0e-910f-6218021bd211",
    name: "Beata Beata",
    age: 50,
    job: "Lead Web Developer",
    user: "feed4e4a-01bc-464d-b6fc-c340adead8a7",
  },
  {
    id: "53eb1eac-f2e8-4c90-a675-cda6bc17c8a9",
    name: "Beata Beata",
    age: 49,
    job: "Principal Web Engineer",
    user: "feed4e4a-01bc-464d-b6fc-c340adead8a7",
  },
  {
    id: "c160e123-3621-4629-ad4b-c487a147b0af",
    name: "Lyubov Fuentes",
    age: 57,
    job: "International Quality Facilitator",
    user: "9983f316-d0ae-46c6-8a0d-4aa8869d2926",
  },
];

export const cv_skills: CvSkill[] = [
  {
    cv: "c013edea-23e6-4d21-97af-1f92fda6c23f",
    skill: "56b3442a-eb56-46a5-a1e9-953b7cfe489c",
  },
  {
    cv: "c013edea-23e6-4d21-97af-1f92fda6c23f",
    skill: "b514d396-ac67-4db7-92c7-2d56e665ddd6",
  },
  {
    cv: "6dd8c66d-2360-4f62-8a77-94b3735f0cf1",
    skill: "dc0b6133-e746-401c-bea2-e0f9233eb7cb",
  },
  {
    cv: "d66ae2cc-d7e9-4cb4-adb3-4c19155b3ac4",
    skill: "b514d396-ac67-4db7-92c7-2d56e665ddd6",
  },
  {
    cv: "d66ae2cc-d7e9-4cb4-adb3-4c19155b3ac4",
    skill: "40cca01a-0377-4f49-93de-b5b9283bc4c9",
  },
  {
    cv: "c333628e-9891-41f1-9498-fdfd365a4cc4",
    skill: "f7b31280-67ab-4aab-864b-a92f039a2bc3",
  },
  {
    cv: "668a9cf8-7dcb-4d0e-910f-6218021bd211",
    skill: "c38e6e46-04b1-4fdc-8219-80a815339b40",
  },
  {
    cv: "668a9cf8-7dcb-4d0e-910f-6218021bd211",
    skill: "f7b31280-67ab-4aab-864b-a92f039a2bc3",
  },
  {
    cv: "53eb1eac-f2e8-4c90-a675-cda6bc17c8a9",
    skill: "40cca01a-0377-4f49-93de-b5b9283bc4c9",
  },
  {
    cv: "c160e123-3621-4629-ad4b-c487a147b0af",
    skill: "dc0b6133-e746-401c-bea2-e0f9233eb7cb",
  },
];

export const db: Db = {
  cv_skills,
  cvs,
  skills,
  users,
};
