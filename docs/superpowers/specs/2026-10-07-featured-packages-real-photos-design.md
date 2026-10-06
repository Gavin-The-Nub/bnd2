# Featured & Tour Packages Real Photos Migration Specification

## 1. Overview
This specification details replacing the generic stock/placeholder images (`/pkg-village.jpg`, `/pkg-lighthouse.jpg`, `/pkg-hotel.jpg`, `/pkg-beach.jpg`) on the BND Travel & Tours home page (`app/page.tsx`) with verified, authentic, landscape-oriented real photographs of each actual Philippine destination sourced from the internet (public domain / CC-licensed Wikimedia Commons photography).

---

## 2. Destination Asset Inventory & Mapping

We store all newly downloaded authentic photos in `public/packages/`:

| # | Tour Package | Destination | Target Asset File | Real Landmark Depicted |
|---|---|---|---|---|
| 1 | **Buscalan – Sagada Tour** | Kalinga & Mt. Province | `public/packages/buscalan-sagada.jpg` | Authentic Cordillera mountain village / Banaue terraced slopes & Apo Whang-Od mountain route |
| 2 | **Vigan – Paoay – Pagudpud** | Ilocos Norte & Sur | `public/packages/vigan-ilocos.jpg` | Historic cobblestone Calle Crisologo colonial mansions |
| 3 | **Baguio City Tour** | Baguio City | `public/packages/baguio-city.jpg` | Burnham Park lagoon & scenic highland pine trees |
| 4 | **Hundred Islands** | Alaminos, Pangasinan | `public/packages/hundred-islands.jpg` | Iconic emerald limestone islets & turquoise waters of Hundred Islands National Park |
| 5 | **Kaparkan Falls & Abra** | Tineg, Abra | `public/packages/kaparkan-abra.jpg` | Natural multi-tiered limestone cascade terraces of Kaparkan (Mulawin) Falls |
| 6 | **Bicol Tricity & Sorsogon** | Albay & Sorsogon | `public/packages/mayon-bicol.jpg` | Majestic Mayon Volcano cone viewed behind the Cagsawa Ruins belfry |
| 7 | **Mt. Pinatubo 4x4 Adventure** | Zambales & Tarlac | `public/packages/mt-pinatubo.jpg` | Turquoise caldera crater lake and surrounding volcanic crater rim |
| 8 | **El Nido & Puerto Princesa** | Palawan | `public/packages/el-nido-palawan.jpg` | Iconic soaring limestone karst cliffs and emerald lagoon waters of El Nido |

---

## 3. Implementation Details

### 3.1 Asset Acquisition & Optimization
- Download high-resolution landscape photographs from Wikimedia Commons / verified open archives for each specific destination.
- Verify each file is a valid image with proper dimensions (>800px width), standard aspect ratio (~16:9 or 3:2 landscape), and compressed cleanly (JPEG/WebP under 400KB each) to ensure fast loading times.
- Save assets directly to `public/packages/<filename>.jpg`.

### 3.2 Code Updates (`app/page.tsx`)
- In `featuredPackages`:
  - `buscalan`: `image: "/packages/buscalan-sagada.jpg"`
  - `ilocos`: `image: "/packages/vigan-ilocos.jpg"`
  - `baguio`: `image: "/packages/baguio-city.jpg"`
- In `morePackages`:
  - `hundred-islands`: `image: "/packages/hundred-islands.jpg"`
  - `kaparkan-abra`: `image: "/packages/kaparkan-abra.jpg"`
  - `bicol`: `image: "/packages/mayon-bicol.jpg"`
  - `mt-pinatubo`: `image: "/packages/mt-pinatubo.jpg"`
  - `palawan`: `image: "/packages/el-nido-palawan.jpg"`
- Update `alt` tags and maintain `<Image fill className="object-cover" ...>` with smooth loading transitions.

---

## 4. Verification & Testing

1. **Asset Integrity Test**: Automated Node test script (`tests/packages-images.test.mjs`) checking:
   - All 8 package image files exist in `public/packages/`.
   - Each file has a positive non-zero byte size (>20KB).
   - Each file has valid image header magic bytes (JPEG or WebP).
2. **Next.js Compilation**: Verify that `npm run build` succeeds without any missing asset or compilation warnings.
3. **Visual Inspection**: Confirm with browser preview that all 8 tour package cards display crisp, authentic photos of their respective destinations.
