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
      <Detail id={id} />
      {/* Hết Chi tiết CV */}
    </>
  );
}
