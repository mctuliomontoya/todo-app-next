import InstantDelete from "./InstantDelete";
import DeleteSelected from "./DeleteSelected";
import HistoryTrigger from "./HistoryTrigger";

export default function ButtonsGroup() {
  return (
    <div className="absolute bottom-3 right-1 flex flex-row ">
      <InstantDelete />
      <DeleteSelected />
      <HistoryTrigger />
    </div>
  );
}
