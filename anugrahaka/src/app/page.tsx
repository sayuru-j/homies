import LeftSidePane from "@/components/LeftSidePane";
import MiddlePane from "@/components/MiddlePane";
import RightSidePane from "@/components/RightSidePane";

export default function Home() {
  return (
    <div className="flex-grow flex bg-background rounded-b-3xl p-5">
      <LeftSidePane />
      <MiddlePane />
      <RightSidePane />
    </div>
  );
}
