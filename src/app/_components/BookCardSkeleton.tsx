export default function BookCardSkeleton() {
  return (
    <div className="p-[15px] rounded-lg border-[#f1f1f1] shadow-book">
      <div className="animate-pulse flex space-x-4">
        <div className="bg-slate-200 h-[200px] w-[125px]"></div>
        <div className="flex-1 space-y-3 w-[393px]">
          <div className="h-6 bg-slate-200 rounded w-48"></div>
          <div className="h-2.5 bg-slate-200 rounded max-w-[68px]"></div>
          <div className="space-y-2">
            <div className="h-2 bg-slate-200 rounded max-w-[350px]"></div>
            <div className="h-2 bg-slate-200 rounded max-w-[340px]"></div>
            <div className="h-2 bg-slate-200 rounded max-w-[300px]"></div>
            <div className="h-2 bg-slate-200 rounded max-w-[340px]"></div>
            <div className="h-2 bg-slate-200 rounded max-w-[350px]"></div>
            <div className="h-2 bg-slate-200 rounded max-w-[340px]"></div>
            <div className="h-2 bg-slate-200 rounded max-w-[300px]"></div>
            <div className="h-2 bg-slate-200 rounded max-w-48"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
