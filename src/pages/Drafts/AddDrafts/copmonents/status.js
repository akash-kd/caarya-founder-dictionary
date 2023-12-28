import { useHistory } from "react-router-dom";

export default function Status() {
  const history = useHistory();
  return (
    <div className="flex items-center justify-between">
      <p className="font-satoshi font-light text-xs text-neutral-500">
        Saved 1 Minutes Ago
      </p>
      <button
        onClick={() => history.push("/home/drafts/chapterflow")}
        className="font-satoshi font-extrabold text-xs text-primary-magenta-medium"
      >
        Save & Exit
      </button>
    </div>
  );
}
