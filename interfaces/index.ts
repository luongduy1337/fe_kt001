export interface ContactReq {
    fullName : string;
    phoneNumber : string;
    email : string;
    title : string;
    content : string;
}

export interface ContactRes {
    id : number;
    fullName : string;
    phoneNumber : string;
    email : string;
    title : string;
    content : string;
}

export interface RegisterReq {
    name : string;
    username : string;
    password : string;
    email : string;
    phoneNumber : string;
}