import { valibot } from "../../../lib/deps.ts";
import {
  ProductSectionOneComp,
  ProductSectionTwoComp,
} from "../../../views/component/landing/product.ts";

export class LandingProductToggleUsecase {
  execute(req: { section: string; order: string; expand: string }) {
    // I want to transform my request from unknown to number and boolean using valibot.
    const { section, order, expand } = valibot.parse(
      valibot.object({
        section: valibot.pipe(
          valibot.string(),
          valibot.transform((v) => parseInt(v, 10)),
        ),
        order: valibot.pipe(
          valibot.string(),
          valibot.transform((v) => parseInt(v, 10)),
        ),
        expand: valibot.pipe(
          valibot.string(),
          valibot.transform((v) => v.toLowerCase() === "true"),
        ),
      }),
      req,
    );

    console.log(section, order, expand);

    if (section == 1) {
      return this.getSectionOne({ order, expand });
    }
    if (section == 2) {
      return this.getSectionTwo({ order, expand });
    }

    return "";
  }

  private getSectionOne(req: { order: number; expand: boolean }) {
    const { order, expand } = req;
    const comp = ProductSectionOneComp({
      sectionOne: order == 1 && expand,
      sectionTwo: order == 2 && expand,
      sectionThree: order == 3 && expand,
    });

    return comp;
  }

  private getSectionTwo(req: { order: number; expand: boolean }) {
    const { order, expand } = req;
    const comp = ProductSectionTwoComp({
      sectionOne: order == 1 && expand,
      sectionTwo: order == 2 && expand,
      sectionThree: order == 3 && expand,
    });

    return comp;
  }
}
