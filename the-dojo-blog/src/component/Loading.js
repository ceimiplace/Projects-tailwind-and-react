export default function Loading() {
  return (
    <div className="h-screen w-full flex justify-center items-center flex-col">
      <div className="animate-spin rounded-full border-t-rose-500 border-4 w-20 h-20"></div>
      <div>Loading....</div>
    </div>
  );
}
