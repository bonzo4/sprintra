import Checkmark from "@/components/icons/Checkmark";
import GearIcon from "@/components/icons/GearIcon";
import LightningBolt from "@/components/icons/LightningBolt";
import Button from "@/components/ui/Button";
import { Project } from "@/lib/types";

type BoardHeaderProps = {
  currentProject: Project | null;
};

export default function BoardHeader({ currentProject }: BoardHeaderProps) {
  return (
    <div className="mb-6 flex items-center justify-between">
      <h2 className="text-2xl font-bold text-white">
        {currentProject?.name || "Travel App MVP"} - Sprint Board
      </h2>
      <div className="flex items-center space-x-4">
        <Button
          variant="primary"
          size="sm"
          leftIcon={<LightningBolt size={5} />}
        >
          New Sprint
        </Button>
        <Button variant="secondary" size="sm" leftIcon={<Checkmark size={5} />}>
          Add Task
        </Button>
        <Button variant="secondary" size="sm" leftIcon={<GearIcon size={5} />}>
          Settings
        </Button>
      </div>
    </div>
  );
}
