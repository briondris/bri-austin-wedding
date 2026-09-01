function RetroStripeDividerTop() {
  return (
    <div className="w-full shrink-0">
      <div className="h-2.5 md:h-3 bg-bloodOrange" />
      <div className="h-1.5 md:h-2 bg-copperTulip" />
      <div className="h-1 bg-marigold" />
    </div>
  );
}

function RetroStripeDividerTopAnimated() {
  return (
    <div className="w-full shrink-0 overflow-hidden">
      <div className="retro-stripe-enter retro-stripe-enter-1">
        <div className="retro-stripe-pulse h-1 bg-marigold" />
      </div>

      <div className="retro-stripe-enter retro-stripe-enter-2">
        <div className="retro-stripe-pulse h-1.5 md:h-2 bg-copperTulip" />
      </div>

      <div className="retro-stripe-enter retro-stripe-enter-3">
        <div className="retro-stripe-pulse h-2.5 md:h-3 bg-bloodOrange" />
      </div>
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

export {
  RetroStripeDividerTop,
  RetroStripeDividerBottom,
  RetroStripeDividerTopAnimated,
};
