import { createWorker } from 'tesseract.js';

const extractInfoFromOCR = (text: string) => {
  const nikMatch = text.match(/NIK : (\d+)/);
  const namaMatch = text.match(/Nama : (.+)/);
  const ttlMatch = text.match(/Tempat\/Tgl Lahir : (.+), (\d{2}-\d{2}-\d{4})/);
  const jkMatch = text.match(/Jenis Kelamin : (.+)/);
  const golDarahMatch = text.match(/Gol. Darah : (.+)/);
  const alamatMatch = text.match(/Alamat : (.+)/);
  const rtRwMatch = text.match(/RTIRW \+ (\d+)\/(\d+)/);
  const kelDesaMatch = text.match(/Kel\/Desa : (.+)/);
  const kecamatanMatch = text.match(/Kecamatan : (.+)/);
  const agamaMatch = text.match(/Agama (.+)/);
  const statusPerkawinanMatch = text.match(/Status Perkawinan : (.+)/);
  const pekerjaanMatch = text.match(/Pekerjaan : (.+)/);
  const kewarganegaraanMatch = text.match(/Kewarganegaraan : (.+)/);
  const berlakuHinggaMatch = text.match(/Berlaku Hingga : (.+)/);

  return {
    nik: nikMatch ? nikMatch[1] : '',
    nama: namaMatch ? namaMatch[1] : '',
    tempatTanggalLahir: ttlMatch ? { tempat: ttlMatch[1], tanggal: ttlMatch[2] } : { tempat: '', tanggal: '' },
    jenisKelamin: jkMatch ? jkMatch[1] : '',
    golonganDarah: golDarahMatch ? golDarahMatch[1] : '',
    alamat: alamatMatch ? alamatMatch[1] : '',
    rt: rtRwMatch ? rtRwMatch[1] : '',
    rw: rtRwMatch ? rtRwMatch[2] : '',
    kelurahanDesa: kelDesaMatch ? kelDesaMatch[1] : '',
    kecamatan: kecamatanMatch ? kecamatanMatch[1] : '',
    agama: agamaMatch ? agamaMatch[1] : '',
    statusPerkawinan: statusPerkawinanMatch ? statusPerkawinanMatch[1] : '',
    pekerjaan: pekerjaanMatch ? pekerjaanMatch[1] : '',
    kewarganegaraan: kewarganegaraanMatch ? kewarganegaraanMatch[1] : '',
    berlakuHingga: berlakuHinggaMatch ? berlakuHinggaMatch[1] : '',
  };
};

const OcrForm = async (img:string) => {
  const worker = await createWorker('eng');
  const ret = await worker.recognize(img);
  const text = ret.data.text;
  // console.log(text);
  await worker.terminate();
  return extractInfoFromOCR(text);
};

export default OcrForm;
