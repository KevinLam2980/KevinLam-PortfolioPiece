import * as yup from 'yup'

const formSchema = yup.object().shape({
    name: yup
        .string()
        .min(3, "Name must be atleast 2 characters"),
    email: yup
        .string().email("Email must be in proper email format: 'example@email.com'"),
    message: yup
        .string()
        .min(10, "Message must be atleast 10 characters")
})

export default formSchema