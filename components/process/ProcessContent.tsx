import ProcessItem from "./ProcessItem";
import { processData } from "@/lib/processData";

type Props = {
  setActiveIndex: React.Dispatch<React.SetStateAction<number>>;
};

export default function ProcessContent({ setActiveIndex }: Props) {
  return (
    <div className="space-y-20 md:space-y-32">
      {processData.map((step, index) => (
        <ProcessItem
          key={step.id}
          step={step}
          index={index}
          setActiveIndex={setActiveIndex}
        />
      ))}
    </div>
  );
}
