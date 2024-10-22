import { UseGuards } from '@nestjs/common'
import { JwtauthGuards } from '../guards/jwt-auth.guard'

export const Auth = () => UseGuards(JwtauthGuards)
