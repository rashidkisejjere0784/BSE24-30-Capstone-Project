import { Card } from "./ui/card";

type Props = {
  icon: string;
  name: string;
  link: string;
};
const AssistCard = ({ icon, name, link }: Props) => {
  return (
    <a href={link}>
      <Card className="flex items-center p-3 rounded-sm gap-2 border-primary-500">
        <i className={`${icon} text-primary-500`}></i>
        <p>{name}</p>
      </Card>
    </a>
  );
};

export default AssistCard;
