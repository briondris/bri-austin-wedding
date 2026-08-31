function RetroStripeDividerTop() {
  return (
    <div className="w-full shrink-0">
      <div className="h-2.5 md:h-3 bg-bloodOrange" />
      <div className="h-1.5 md:h-2 bg-copperTulip" />
      <div className="h-1 bg-marigold" />
    </div>
  );
}

function RetroStripeDividerBottom() {
  return (
    <div className="w-full shrink-0">
      <div className="h-1 bg-marigold" />
      <div className="h-1.5 md:h-2 bg-copperTulip" />
      <div className="h-2.5 md:h-3 bg-bloodOrange" />
    </div>
  );
}

export { RetroStripeDividerTop, RetroStripeDividerBottom };
