import { ContactReq, RegisterReq } from "@/interfaces";
import axios from "axios";
import { redirect } from 'next/navigation'
import { signIn } from "next-auth/react";

export const createContact = async (formState: { message: string }, formData: FormData) => {
    //NOTE - get each data and validate it
    const fullName = formData.get("fullName");
    const phoneNumber = formData.get("phoneNumber");
    const email = formData.get("email");
    const title = formData.get("title");
    const content = formData.get("content");

    if (typeof fullName !== 'string' || fullName.length <= 5) {
        return {
            message: "Họ tên ít nhất gồm 5 ký tự"
        }
    }

    if (typeof phoneNumber !== 'string' || phoneNumber.match(/\d/g)?.length !== 10) {
        return {
            message: "Số điện thoại bạn nhập không hợp lệ"
        }
    }
    if (typeof email !== 'string' || !email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        return {
            message: 'Email bạn nhập không hợp lệ'
        }
    }

    if (typeof title !== 'string' || title.length <= 3) {
        return {
            message: 'Tiêu đề ít nhất 3 ký tự'
        }
    }

    if (typeof content !== 'string' || title.length <= 10) {
        return {
            message: 'Nội dung ít nhất 10 ký tự'
        }
    }


    //NOTE - create data object to send to server
    const dataRequest: ContactReq = {
        fullName,
        phoneNumber,
        email,
        title,
        content,
    };
    const res = await axios.post("http://localhost:8788/contact", dataRequest);
    if (res.status === 201) {
        //NOTE - send form data successfully
        redirect("/success-form");
    }

    return {
        message: ""
    }
}

export const register = async (formState: { message: string }, formData: FormData) => {
    //NOTE - Get each data and validate it

    const name = formData.get("name");
    const phoneNumber = formData.get("phoneNumber");
    const email = formData.get("email");
    const username = formData.get("username");
    const password = formData.get("password");

    if (typeof name !== 'string' || name.length <= 5) {
        return {
            message: "Họ tên ít nhất gồm 5 ký tự"
        }
    }

    if (typeof phoneNumber !== 'string' || phoneNumber.match(/\d/g)?.length !== 10) {
        return {
            message: "Số điện thoại bạn nhập không hợp lệ"
        }
    }
    if (typeof email !== 'string' || !email.toLowerCase().match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        return {
            message: 'Email bạn nhập không hợp lệ'
        }
    }

    if (typeof username !== 'string' || username.length <= 3) {
        return {
            message: 'Tài khoản ít nhất 5 ký tự'
        }
    }

    if (typeof password !== 'string' || password.length <= 8) {
        return {
            message: 'Mật khẩu ít nhất 7 ký tự'
        }
    }

    // NOTE - Create data object to send to server

    const dataRequest: RegisterReq = {
        name,
        email,
        username,
        password,
        phoneNumber
    }

    const res = await axios.post("http://localhost:8989/api/v1/auth/register", dataRequest);
    if (res.status === 201) {
        //NOTE - send form data successfully
        redirect("/auth/login");
    }

    return {
        message: ""
    }

}

export const login = async (formState: { message: string }, formData: FormData) => {
    const usernameOrEmail = formData.get('usernameOrEmail');
    const password = formData.get('password');
    const res = await signIn("credentials", {
        usernameOrEmail,
        password,
        redirect: true,
        callbackUrl: "/",
    });
    if (res?.error) {
        return {
            message: "Tài khoản hoặc mật khẩu chưa chính xác. Vui lòng nhập lại"
        }
    } else {
        return {
            message: ""
        }
    }
}

