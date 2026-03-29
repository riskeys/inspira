import { Result } from "../../../utils/result.ts";
import { UserEntity } from "../../entities/idp/user.entity.ts";
import {
  UserCreateRequestModel,
  UserDeleteRequestModel,
} from "../../models/idp/user.request.model.ts";

export interface IdpUserRepo {
  get(id: string): Promise<UserEntity | undefined>;
  getByEmail(email: string): Promise<UserEntity | undefined>;
  create(user: UserCreateRequestModel): Promise<string>;
  createSafe(user: UserCreateRequestModel): Promise<Result<string>>;
  delete(req: UserDeleteRequestModel): Promise<void>;
  deleteSafe(req: UserDeleteRequestModel): Promise<Result<unknown>>;
  filter(): Promise<UserEntity[]>;
}
