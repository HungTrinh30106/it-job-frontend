import { Detail } from "./Detail";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <>
      {/* Chi tiết CV */}
      <div className="py-[60px]">
        <div className="contain">
          <Detail id={id} />
        </div>
      </div>
      {/* Hết Chi tiết CV */}
    </>
  );
}
