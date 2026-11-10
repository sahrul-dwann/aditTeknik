import compresorProduk from "../assets/image/compresor-produk.png";
import gensetProduk from "../assets/image/genset.png";
import peralatanBengkel from "../assets/image/peralatan-bengkel.jpg";
import peralatanIndustri from "../assets/image/perlengkapan-industri.png";

export const categories = [
  {
    id: 1,
    title: 'Kompresor',
    description:
      'Berbagai pilihan kompresor untuk mendukung kebutuhan usaha dan industri.',
    image: compresorProduk,
  },
  {
    id: 2,
    title: 'Genset & Mesin Teknik',
    description:
      'Pilihan mesin teknik untuk menunjang berbagai pekerjaan dan kebutuhan produksi.',
    image: gensetProduk,
  },
  {
    id: 3,
    title: 'Peralatan Bengkel',
    description:
      'Peralatan pendukung untuk pekerjaan perawatan, perbaikan, dan mekanik.',
    image:
      peralatanBengkel,
  },
  {
    id: 4,
    title: 'Perlengkapan Industri',
    description:
      'Beragam perlengkapan untuk memenuhi kebutuhan operasional industri.',
    image:
      peralatanIndustri,
  },
]