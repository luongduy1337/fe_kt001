'use client'
import { Alert, Label, TextInput, Textarea } from 'flowbite-react'
import { createContact } from '@/actions';
import { useFormState } from 'react-dom'
export function FormContact() {
    const [formState, action] = useFormState(createContact, { message: '' });
    return (
        <div className='contact__form'>
            <form action={action}>
                <div className='inputs__row__first flex flex-row mb-2'>
                    <div className='input__fullname w-1/2 mr-2'>
                        <div>
                            <div className="mb-2">
                                <Label htmlFor="fullName" value="Họ tên" />
                            </div>
                            <TextInput className='input__form' name='fullName' id="fullName" type="text" sizing="lg" required />
                        </div>
                    </div>
                    <div className='input__phonenumber w-1/2'>
                        <div className="mb-2">
                            <Label htmlFor="phoneNumber" value="Số điện thoại" />
                        </div>
                        <TextInput name='phoneNumber' id="phoneNumber" type="text" sizing="lg" required />
                    </div>
                </div>
                <div className='input__row_second mb-2'>
                    <div className="mb-2 block">
                        <Label htmlFor="email" value="Email" />
                    </div>
                    <TextInput name='email' id="email" type="text" sizing="lg" required />
                </div>
                <div className='input__row_third mb-2'>
                    <div className="mb-2 block">
                        <Label htmlFor="title" value="Tiêu đề" />
                    </div>
                    <TextInput name='title' id="title" type="text" sizing="lg" required />
                </div>
                <div className='input__row_fourth mb-2'>
                    <div className="mb-2 block">
                        <Label htmlFor="content" value="Nội dung" />
                    </div>
                    <Textarea id="content" name='content' required rows={4} />
                </div>
                {formState.message ? (
                    <Alert color='failure' style={{margin : "20px 0px"}}>
                        <span className='font-medium'>
                            {formState?.message}
                        </span>
                    </Alert>
                ) : null}
                <div className='flex flex-row justify-end'>
                    <button className='link__services' type='submit'>Gửi liên lạc</button>
                </div>
            </form>
        </div>
    )
}
