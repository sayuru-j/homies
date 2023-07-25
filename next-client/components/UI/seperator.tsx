interface SeperatorProps {
  seperate: string;
}

export default function Seperator({ seperate }: SeperatorProps) {
  return (
    <div className="py-6">
      <div className="border-b border-black/5 text-black/20 flex items-center justify-center">
        <p className="absolute bg-white font-medium text-xs uppercase px-4">
          CONTINUE WITH {seperate}
        </p>
      </div>
    </div>
  );
}
