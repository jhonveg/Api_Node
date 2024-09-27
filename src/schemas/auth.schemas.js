import { z } from 'zod';

export const registerSchema = z.object({
    username: z.string({required_error: 'is required'}),
    email: z.string({required_error: 'is required'}).email({required_error: 'email invalid'}),
    password: z.string({required_error: 'is required'}).min(6,{required_error:'min 6 caracter required'})
});

export const loginSchema = z.object({
    email: z.string({required_error: 'is required'}).email({required_error: 'email invalid'}),
    password: z.string({required_error: 'password invalid'})
})
