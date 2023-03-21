export type handles = {
    instagram: string,
    github: string,
    facebook: string,
    linkedin: string,
    [key: string] : string
}

export type userdata = {
    profileimage?: string, 
    coverimage: string,
    username: string,
    bling: string,
    location: string,
    techstack: Array<string>,
    gender: string,
    dob: string,
    profession: string,
    Handles: handles

}



const obj: userdata = {
    profileimage : '/assets/random.jpeg',
    coverimage: '/assets/grad.jpeg',
    username: 'Ann Maria',
    bling: 'Full stack developer at CodeChef | MACE 24',
    location : 'Mumbai, India',
    techstack: ['HTML 5', 'CSS 3', 'Javascript', 'React', 'Flutter'],
    gender: 'Female',
    profession: 'Software Developer',
    dob: '20/06/2004',
    Handles: {
        instagram: 'https://www.instagram.com/',
        github: 'https://www.github.com',
        facebook: 'https://www.facebook.com',
        linkedin: 'https://www.linkedin.in'
    }
}

export {obj}