import { ArrowRightIcon } from "lucide-preact";

export function ActivitiesLanding() {
  return (
    <>
      <ActivitiesLaptop />
      <ActivitiesMobile />
    </>
  );
}

function ActivitiesLaptop() {
  return (
    <div class="hidden md:flex flex-col w-full h-screen service-gradient">
      <div class="flex flex-col items-center w-11/12 mx-auto mt-8 h-full md:h-[80%]">
        <ActivitiesTitle />
        <Separator />
        <ActivitiesCaption />
        <Cards />
        <ActivitiesViewAllButton />
      </div>
    </div>
  );
}

function ActivitiesMobile() {
  return (
    <div class="flex md:hidden flex-col w-full h-full service-gradient">
      <div class="flex flex-col items-center w-11/12 mx-auto mt-8 h-[80%]">
        <ActivitiesTitle />
        <Separator />
        <ActivitiesCaption />
        <Cards />
        <ActivitiesViewAllButton />
      </div>
    </div>
  );
}

function ActivitiesViewAllButton() {
  return (
    <div class="my-8">
      <button type="button">
        <div class="px-6 py-3 w-96 
					flex flex-row justify-between items-center rounded-2xl bg-c-1 text-white 
					bg-hov-2 transition-colors delay-100 cursor-pointer font-semibold text-lg">
          <span>
            Lihat Semua Aktivitas
          </span>
          <ArrowRightIcon />
        </div>
      </button>
    </div>
  );
}

function Separator() {
  return (
    <div class="my-4 flex justify-start">
      <div class="h-1 w-16 rounded-full bg-c-1"></div>
    </div>
  );
}

function ActivitiesTitle() {
  return (
    <h1 class="text-2xl md:text-4xl font-extrabold text-c-1">
      Aktivitas Terkini
    </h1>
  );
}

function ActivitiesCaption() {
  return (
    <div class="hidden text-lg font-medium w-1/3 justify-center text-center">
      See how we're supporting individuals, families, schools, and organization
      through counseling, education, and community programs.
    </div>
  );
}

function Cards() {
  return (
    <div class="mt-10 flex flex-col md:flex-row w-full h-3/4 gap-10">
      <Card size="large" cardClass="h-full basis-3/5" />
      <div class="flex flex-col basis-2/5 justify-between w-full h-full">
        <Card size="small" cardClass="h-8/17" />
        <Card size="small" cardClass="h-8/17" />
      </div>
    </div>
  );
}

function Card(
  { size = "large", cardClass = "h-full" }: {
    size: "small" | "large";
    cardClass?: string;
  },
) {
  const isSmall = size === "small";
  return (
    <div
      class={`flex flex-col md:flex-row shadow-2xl w-full ${cardClass} p-6 rounded-2xl bg-gray-200`}
      gap-4
    >
      <img
        class="rounded-xl w-full h-1/4 md:h-full md:w-3/5 object-cover"
        src="/green-squared.jpg"
      />
      <div class="flex flex-col justify-start px-6 ">
        <div
          class={`
			${isSmall ? "text-sm" : "text-lg"} 
			text-c-2 text-left font-semibold`}
        >
          19 Juni, 2026
        </div>
        <h1
          class={`
				${isSmall ? "text-xl/tight pt-4" : "text-3xl/relaxed pt-12"}
				text-left text-c-2 font-bold capitalize`}
        >
          Psikotest untuk seleksi Sekolah Maung 2026
        </h1>
        <article
          class={`
					${isSmall ? "text-sm/snug pt-4" : "text-sm/loose pt-8 font-medium"}
					text-left `}
        >
          See how we're supporting individuals, families, schools, and
          organization through counseling, education, and community programs.
        </article>
        <div
          class={`
						${isSmall ? "text-sm pt-4" : "text-xl pt-12"}
						font-semibold text-c-1 `}
        >
          Read More
        </div>
      </div>
    </div>
  );
}
