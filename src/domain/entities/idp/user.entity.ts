export interface UserEntity {
  id: string;
  username: string;
  fullname: string | null;
  designation: string | null;
  email: string;
  status: string;
  createdAt: Date;
  createdBy: string;
  updatedAt: Date | null;
  updatedBy: string | null;
}
