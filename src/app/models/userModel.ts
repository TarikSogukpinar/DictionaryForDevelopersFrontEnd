export interface UserModel {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password:string;
  confirmPassword:string;
  status: boolean;
  github: string;
  linkedin: string;
  website: string;
}
