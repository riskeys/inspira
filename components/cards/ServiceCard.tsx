export interface ServiceCardProps {
  title: string;
  desc: string;
  logo: string;
}

export function ServiceCard(props: ServiceCardProps) {
  return (
    <div className="bg-white rounded-lg max-h-[400px] max-w-[300px] p-6 w-1/8 shadow-md hover:shadow-lg transition-shadow">
      <div class="text-center my-4">
        {props.title}
      </div>
      <div>
        {props.desc}
      </div>
    </div>
  );
}
