import { ServiceCard } from "@/components/cards/ServiceCard.tsx";

export function Services() {
  const assessmentDescription =
    "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum";
  return (
    <div
      id="products"
      class="w-full service-gradient pb-8 md:pb-12 lg:pb-16 min-h-[85vh]"
    >
      <hr />
      <div class="px-4 md:px-6 lg:px-8">
        <div class="pt-6 md:pt-8 lg:pt-10 text-red-100 text-2xl md:text-3xl lg:text-4xl font-semibold mb-4 md:mb-6 text-center">
          Layanan Kami
        </div>
        <div class="my-3 flex justify-center">
          <div class="h-1 w-16 rounded-full bg-c-1"></div>
        </div>
        <div class="flex flex-row gap-4 justify-center">
          <ServiceCard
            title="Assessment"
            desc={assessmentDescription}
            logo="asd"
          />
          <ServiceCard
            title="Kom"
            desc="asdskaljdalsdj alkdjsalsjd aljdad"
            logo="asd"
          />
          <ServiceCard
            title="Kom"
            desc="asdskaljdalsdj alkdjsalsjd aljdad"
            logo="asd"
          />
          <ServiceCard
            title="Kom"
            desc="asdskaljdalsdj alkdjsalsjd aljdad"
            logo="asd"
          />
          <ServiceCard
            title="Kom"
            desc="asdskaljdalsdj alkdjsalsjd aljdad"
            logo="asd"
          />
        </div>
      </div>
    </div>
  );
}
