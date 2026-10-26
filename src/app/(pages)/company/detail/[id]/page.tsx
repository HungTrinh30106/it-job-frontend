import { CompanyDetail } from "./CompanyDetail";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <>
      {/* Chi tiết công ty */}
      <CompanyDetail id={id} />
      {/* Hết Chi tiết công ty */}
    </>
  );
}
