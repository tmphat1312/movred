export function SectionPlaceholder() {
  return (
    <section aria-hidden="true" className="my-8">
      <div className="container relative grid h-[400px] place-content-center border-b-4 border-t-4 border-layout-bg">
        <div className="absolute -bottom-[16px] -top-[16px] left-[16px] w-[8px] bg-layout-bg" />
        <div className="absolute -bottom-[16px] -top-[16px] right-[16px] w-[8px] bg-layout-bg" />
        <h2 className="font-mono text-2xl">This is a placeholder section</h2>
      </div>
    </section>
  );
}
