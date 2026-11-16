import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";

export const alt = "Coddle Developers — Build with Coddle";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const artwork = await readFile(join(process.cwd(), "public", "developer-grid.svg"));
  const artworkUrl = `data:image/svg+xml;base64,${artwork.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          position: "relative",
          width: "100%",
          height: "100%",
          alignItems: "center",
          padding: "0 76px",
          background: "linear-gradient(115deg, #0e1845 8%, #172e80 68%, #284aca 100%)",
          color: "#fff",
        }}
      >
        {/* ImageResponse renders embedded image data directly. */}
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={artworkUrl}
          alt=""
          width={650}
          height={470}
          style={{ position: "absolute", right: 12, top: 80 }}
        />
        <div style={{ display: "flex", flexDirection: "column", width: 540 }}>
          <div style={{ color: "#cbd8ff", fontSize: 25, fontWeight: 700 }}>
            Coddle Developers
          </div>
          <div style={{ marginTop: 27, fontSize: 102, fontWeight: 700, lineHeight: 1 }}>
            Build with
          </div>
          <div style={{ color: "#b9ceff", fontSize: 102, fontWeight: 700, lineHeight: 1 }}>
            Coddle.
          </div>
          <div style={{ marginTop: 32, color: "#d4ddfb", fontSize: 25 }}>
            coddle.dev
          </div>
        </div>
      </div>
    ),
    size,
  );
}
