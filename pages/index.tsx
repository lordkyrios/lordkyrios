import { useState } from "react";
import { Button } from "@/components/ui/button";
import { FreeTestGate } from "@/components/FreeTestGate";
import { WatermarkOverlay } from "@/components/WatermarkOverlay";

export default function Home() {
  const [rendered, setRendered] = useState(false);

  const handleRender = () => {
    console.log("[Free Test] Rendering 25s preview...");
    setTimeout(() => {
      setRendered(true);
    }, 1000);
  };

  return (
    <main className="min-h-screen bg-[#0f172a] text-white p-6 flex flex-col items-center justify-center space-y-8">
      <h1 className="text-3xl md:text-5xl font-bold text-center">
        Generate Storyboard Videos from Script
      </h1>

      <FreeTestGate onRender={handleRender}>
        <div className="bg-white text-black p-4 rounded-xl shadow-md max-w-xl w-full">
          <p className="text-lg">
            A young girl with long hair stands in a forest during golden hour, the setting sun casting a warm, diffused glow through the trees.
          </p>
          <div className="mt-4 text-right">
            <Button>Render 25s Free Test</Button>
          </div>
        </div>
      </FreeTestGate>

      {rendered && (
        <WatermarkOverlay>
          <video
            src="/test-video.mp4"
            controls
            className="rounded-xl shadow-lg w-full max-w-xl"
          />
        </WatermarkOverlay>
      )}

      {rendered && (
        <div className="text-center mt-8 max-w-lg">
          <h2 className="text-xl font-semibold mb-2">
            Loved your test video?
          </h2>
          <p className="text-muted-foreground mb-4">
            Unlock full features and render unlimited scenes. Subscribe for just $X/month.
          </p>
          <div className="flex flex-col sm:flex-row gap-2 justify-center">
            <Button>Subscribe</Button>
            <Button variant="outline">Try 60s Preview for $1.99</Button>
          </div>
        </div>
      )}
    </main>
  );
}
