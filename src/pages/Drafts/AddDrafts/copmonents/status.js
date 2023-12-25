export default function Status() {
  return (
    <div className="flex items-center justify-between">
      <p className="font-satoshi font-light text-xs text-neutral-500">
        Saved 1 Minutes Ago
      </p>
      <button className="font-satoshi font-extrabold text-xs text-primary-magenta-medium">
        Save & Exit
      </button>
    </div>
  );
}
