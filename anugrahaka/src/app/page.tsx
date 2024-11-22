import LeftSidePane from "@/components/LeftSidePane";
import RightSidePane from "@/components/RightSidePane";

export default function Home() {
  return (
    <div className="flex-grow flex bg-background rounded-b-3xl p-5">
      <LeftSidePane />

      <div className="w-3/5 bg-green-200">Mid</div>
      <RightSidePane />
    </div>
  );
}
