export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <div className="flex flex-row">
        <div className=" bg-red-500 basis-1/6">01</div>
        <div className="bg-gray-500 basis-5/6">03</div>
      </div>

      <div className="grid grid-cols-6">
        <div className="bg-red-500 ">01</div>
        <div className="bg-gray-500  col-span-5">03</div>
      </div>
      <div className="flex">
        <div className=" bg-red-500 w-1/6">01</div>
        <div className="bg-gray-500 w-5/6">03</div>
      </div>
    </div>
  );
}
