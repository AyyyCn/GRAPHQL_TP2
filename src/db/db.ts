export const db = {
    users : [
    {
        id : '1',
        name : 'mohsen',
        email : 'mohsen@gmail.com',
        role : 'ADMIN'
    },
    {
        id : '2',
        name : 'bachar',
        email : 'bachar@gmail.com',
        role : 'USER'
    },
    {
        id : '3',
        name : 'jawher',
        email : 'jawher@gmail.com',
        role : 'USER'
    },
    {
        id : '4',
        name : 'yassine',
        email : 'yassine@gmail.com',
        role : 'USER',
    }
    ],

    cvs : [
    {
        id : '10',
        name : 'FullStack',
        age : '21',
        job : 'Student',
        user : '1',
        skills : ['100']
    },
    {
        id : '20',
        name : 'Flutter',
        age : '22',
        job : 'Mobile Developer',
        user : '2',
        skills : ['200','300']
    },
    {
        id : '30',
        name : 'AI & ML',
        age : '23',
        job : 'AI Engineer',
        user : '3',
        skills : ['400','500']
    }
    ],

    skills : [
            {
                id : '100',
                designation : 'ASP.NET'
            },
            {
                id : '200',
                designation : 'Dart'
            },
            {
                id : '300',
                designation : 'Kotlin'
            },
            {
                id : '400',
                designation : 'Python'
            },
            {
                id : '500',
                designation : 'OpenCV'
            }
        ]
}