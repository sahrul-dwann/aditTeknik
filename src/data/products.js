import compresorImage from "../assets/image/compresor.png";
import gerindaImage from "../assets/image/gerinda.png";
import borImage from "../assets/image/bor.png"
import mesinIndustriImage from "../assets/image/mesin_cutt_off_1.png";
import mesinStemperImage from "../assets/image/mesin_stamper.jpg";
import peralatanBengkel from "../assets/image/peralatan-bengkel.jpg";

export const products = [
  {
    id: 1,
    name: "Kompresor Angin",
    category: "Kompresor",
    description:
      "Peralatan kompresor untuk mendukung kebutuhan bengkel dan berbagai aktivitas usaha.",
    image: compresorImage,
  },
  {
    id: 2,
    name: "Mesin Gerinda",
    category: "Mesin Teknik",
    description:
      "Mesin pendukung pekerjaan pemotongan, penghalusan, dan pengerjaan material.",
    image: gerindaImage,
  },
  {
    id: 3,
    name: "Peralatan Bengkel",
    category: "Peralatan Bengkel",
    description:
      "Perlengkapan untuk menunjang aktivitas perawatan dan perbaikan.",
    image:
      peralatanBengkel,
  },
  {
    id: 4,
    name: "Mesin Cutting Off",
    category: "Mesin Teknik",
    description:
      "Mesin pemotong untuk membantu proses pemotongan besi, logam, dan material lainnya secara praktis dan presisi.",
    image:
      mesinIndustriImage,
  },
  {
    id: 5,
    name: "Mesin Stamper",
    category: "Perlengkapan Industri",
    description:
      "Mesin pemadat tanah untuk mendukung pekerjaan konstruksi, pemadatan permukaan tanah, dan persiapan area bangunan.",
    image:
      mesinStemperImage,
  },
  {
    id: 6,
    name: "Mesin Bor",
    category: "Perlengkapan Industri",
    description:
      "	Mesin bor listrik untuk membantu pekerjaan pengeboran pada berbagai material dalam kebutuhan teknik dan industri.",
    image:
      borImage,
  },
];
