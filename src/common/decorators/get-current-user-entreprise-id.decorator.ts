import { createParamDecorator, ExecutionContext } from "@nestjs/common";

export const GetCurrentUserEntrepriseIdDecorator = createParamDecorator(
  (data: string | undefined, ctx: ExecutionContext) => {
    const request = ctx.switchToHttp().getRequest();
    return request.user.entreprise_id;
  },
);