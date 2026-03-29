export interface UserViewModel {
  index: number;
  id: string;
  username: string;
  fullname: string;
  designation: string | null;
  email: string;
  status: string;
  createdAt: Date;
  createdBy: string;
  roles?: string[];
}
