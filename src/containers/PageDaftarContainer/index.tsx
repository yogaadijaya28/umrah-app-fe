import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { usePostClient } from "@/api/member/query";
import { City, District, Province, Village, ZipCode, postClientParams } from "@/api/member/types";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { UseGetProgram } from "@/api/masterData/province/query";
import { programResponse } from "@/api/masterData/province/types";


export default function PageDaftarContainer() {


    const [postClient, setPostClient] = useState<postClientParams>({
        firtsname: '',
        lastname: '',
        idcard: '',
        province: '',
        city: '',
        district: '',
        village: '',
        zipcode: '',
        address: '',
        tipeprogram: '',
        gender: '',
        placedate: '',
        mobilephone: '',
        email: '',
        heir: '',
        relationheir: '',
        listbank:'',
        accountnumber:'',
        nameaccountnumber:'',
    });

    const [programs, setProgram] = useState<programResponse[]>([]);

    const PostClientController = usePostClient();
    const GetProgramController = UseGetProgram();


    useEffect(() => {
        if (GetProgramController.isSuccess) {
            setProgram(GetProgramController?.data?.data || []);
        }
    }, [GetProgramController.isSuccess, GetProgramController.isFetching]);



    const [provinces, setProvinces] = useState<Province[]>([]);
    const [selectedProvince, setSelectedProvince] = useState<string>("");

    const [cities, setCities] = useState<City[]>([]);
    const [selectedCity, setSelectedCity] = useState<string>("");

    const [districts, setDistricts] = useState<District[]>([]);
    const [selectedDistrict, setSelectedDistrict] = useState<string>("");

    const [villages, setVillages] = useState<Village[]>([]);
    const [selectedVillages, setSelectedVillages] = useState<string>("")

    const [zipcodes, setZipcodes] = useState<ZipCode[]>([]);
    const [selectedZipcodes, setSelectedZipcodes] = useState<string>("")




    useEffect(() => {
        // Ambil data provinsi dari API dan simpan ke state provinces
        const fetchProvinces = async () => {
            try {
                const response = await fetch('https://alamat.thecloudalert.com/api/provinsi/get/');
                const provincesData = await response.json();
                const resultArray: Province[] = provincesData.result;
                setProvinces(resultArray);
            } catch (error) {
                console.error('Error fetching provinces:', error);
            }
        };

        fetchProvinces();
    }, []);

    useEffect(() => {
        // Ambil data kota berdasarkan provinsi yang dipilih dari API dan simpan ke state cities
        const fetchCities = async () => {
            try {
                if (selectedProvince) {
                    const response = await fetch(`https://alamat.thecloudalert.com/api/kabkota/get/?d_provinsi_id=${selectedProvince}`);
                    const citiesData = await response.json();
                    const resultArray: City[] = citiesData.result;
                    setCities(resultArray);
                } else {
                    // Reset kota jika provinsi tidak dipilih
                    setCities([]);
                }
            } catch (error) {
                console.error('Error fetching cities:', error);
            }
        };

        fetchCities();
    }, [selectedProvince]);

    useEffect(() => {
        // Ambil data kecamatan berdasarkan kota yang dipilih dari API dan simpan ke state districts
        const fetchDistricts = async () => {
            try {
                if (selectedCity) {
                    const response = await fetch(`https://alamat.thecloudalert.com/api/kecamatan/get/?d_kabkota_id=${selectedCity}`);
                    const districtsData = await response.json();
                    const resultArray: District[] = districtsData.result;
                    setDistricts(resultArray);
                } else {
                    // Reset kecamatan jika kota tidak dipilih
                    setDistricts([]);
                }
            } catch (error) {
                console.error('Error fetching districts:', error);
            }
        };

        fetchDistricts();
    }, [selectedCity]);

    useEffect(() => {
        // Ambil data kelurahan berdasarkan kecamatan yang dipilih dari API dan simpan ke state villages
        const fetchVillages = async () => {
            try {
                if (selectedDistrict) {
                    const response = await fetch(`https://alamat.thecloudalert.com/api/kelurahan/get/?d_kecamatan_id=${selectedDistrict}`);
                    const villagesData = await response.json();
                    const resultArray: Village[] = villagesData.result;
                    setVillages(resultArray);
                } else {
                    // Reset kelurahan jika kecamatan tidak dipilih
                    setVillages([]);
                }
            } catch (error) {
                console.error('Error fetching villages:', error);
            }
        };

        fetchVillages();
    }, [selectedDistrict]);

    useEffect(() => {
        //Ambil data kodepos berdasarkan kelurahan yang dipilih dari API dan disimpan ke dalam state zipCode
        const fetchZipcodes = async () => {
            try {
                if (selectedVillages) {

                    const response = await fetch(`https://alamat.thecloudalert.com/api/kodepos/get/?d_kabkota_id=${selectedCity}&d_kecamatan_id=${selectedDistrict}`);
                    const zipcodesData = await response.json();
                    const resultArray: ZipCode[] = zipcodesData.result;
                    setZipcodes(resultArray);

                } else {
                    //reset kodepos jika kelurahan tidak dipilih
                    setZipcodes([]);
                }
            } catch (eror) {
                console.error('Error fetching zipcodes:', eror);

            }
        }
        fetchZipcodes();
    }, [selectedVillages])


    const handleProvinceChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedProvince(event.target.value);
        // Reset kota, kecamatan, dan kelurahan jika provinsi berubah
        setSelectedCity("");
        setDistricts([]);
        setVillages([]);
        setZipcodes([]);

    };

    const handleCityChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCity(event.target.value);
        // Reset kecamatan dan kelurahan jika kota berubah
        setDistricts([]);
        setVillages([]);
        setZipcodes([]);

    };

    const handleDistrictChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedDistrict(event.target.value);
        // Reset kelurahan jika kecamatan berubah
        setVillages([]);
        setZipcodes([]);

    };

    const handleVillageChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedVillages(event.target.value);
        // Reset kelurahan jika kecamatan berubah
        setZipcodes([]);
    };

    const handleZipCodeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedZipcodes(event.target.value);
    };


    const validationSchema = Yup.object().shape({
        firtsname: Yup.string().required('Nama Depan Wajib Diisi'),
        lastname: Yup.string().required('Nama Belakang Wajib Diisi'),
        idcard: Yup.string().required('Wajib Diisi'),
        province: Yup.string().required('Wajib Diisi'),
        city: Yup.string().required('Wajib Diisi'),
        district: Yup.string().required('Wajib Diisi'),
        village: Yup.string().required('Wajib Diisi'),
        zipcode: Yup.string().required('Wajib Diisi'),
        address: Yup.string().required('Wajib Diisi'),
        tipeprogram: Yup.string().required('Wajib Diisi'),
        gender: Yup.string().required('Wajib Diisi'),
        placedate: Yup.string().required('Wajib Diisi'),
        mobilephone: Yup.string().required('Wajib Diisi'),
        email: Yup.string().required('Wajib Diisi'),
        heir: Yup.string().required('Wajib Diisi'),
        relationheir: Yup.string().required('Wajib Diisi'),
        listbank:Yup.string().required('Wajib Diisi'),
        accountnumber:Yup.string().required('Wajib Diisi'),
        nameaccountnumber:Yup.string().required('Wajib Diisi'),

    });

    const {
        handleSubmit,
        register,
        reset,
        formState: { errors },
    } = useForm<postClientParams>({
        resolver: yupResolver(validationSchema),
    });
    const onSubmit = handleSubmit((data: postClientParams) => {
        try {
            const selectedProvinceObject = provinces.find((province) => province.id === selectedProvince);

            const selectedCityObject = cities.find((city) => city.id === selectedCity);

            const selectedDistrictObject = districts.find((district) => district.id === selectedDistrict);

            const selectedVillageObject = villages.find((village) => village.id === selectedVillages);

            const selectedZipCodeObject = zipcodes.find((zipcode) => zipcode.id === selectedZipcodes);

            if (selectedProvinceObject) {
                const payload: postClientParams = {
                    ...postClient,
                    ...data,
                    province: selectedProvinceObject?.text || '',
                    city: selectedCityObject?.text || '',
                    district: selectedDistrictObject?.text || '',
                    village: selectedVillageObject?.text || '',
                    zipcode: selectedZipCodeObject?.text || '',




                };

                PostClientController.mutate(payload);
                toast.success('Formulir berhasil terkirim');
                reset();
            } else {
                toast.error('Provinsi tidak ditemukan');
            }
        } catch (error) {
            toast.error('Formulir gagal terkirim');
        }
    });

    // console.log("debug controller", GetProgramController);
    // console.log("debug program", programs);



    return (
        <>
            <div className="contact-us">
                <img src="/assets/img/bg-wave.png" className="radial" alt="" />
                <div className="container position-relative">
                    <h6 className="heading-regular-bold text-center">Formulir Pendaftaran Jamaah Umroh & Haji</h6>
                    <div className="row mb-5 mt-4 mx-0">
                        <div className="col-md-6 offset-md-3">
                            <p className="mb-0 text-center regular-text-regular">
                                PT Dwi Amanah Lestari berdiri sejak tahun 2017 dengan memberikan pelayanan ibadah umroh sesuai dengan tuntunan sunnah dan Al Quran
                                Mutiara Sunnah mengantongi izin resmi umroh dari Kementrian Agama Republik Indonesia.</p>
                        </div>
                    </div>
                    <form onSubmit={onSubmit} className="m-auto register-form">
                        <div className="row">

                            <div className="form-input mb-0">
                                <label htmlFor="idcard" className="medium-text-bold mb-2">DATA PRIBADI </label>
                            </div>

                            <div className="col-md-6">
                                <div className="form-input mb-3">
                                    <label htmlFor="firtsname" className="regular-text-regular mb-2">Nama Depan <span>*</span></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Masukkan nama depan"
                                        {...register("firtsname", { required: true })}
                                    />
                                    <div id="firtsname-error" className={`text-danger regular-text-regular mt-1`}>{errors.firtsname?.message}</div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-input mb-3">
                                    <label htmlFor="lastname" className="regular-text-regular mb-2">Nama Belakang <span>*</span></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Masukkan nama belakang"
                                        {...register("lastname", { required: true })}
                                    />
                                    <div id="lastname-error" className={`text-danger regular-text-regular mt-1`}>{errors.lastname?.message}</div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-input mb-3">
                                    <label htmlFor="" className="regular-text-regular mb-2">Jenis Kelamin <span>*</span></label>
                                    <select className="form-select" aria-label="Default select example"
                                        {...register("gender", { required: true })}

                                    >
                                        <option selected>Pilih Jenis Kelamin</option>

                                        <option value="male"> Laki-laki </option>
                                        <option value="female"> Perempuan </option>




                                    </select>
                                    <div id="gender-error" className={`text-danger regular-text-regular mt-1`}>{errors.gender?.message}</div>


                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-input mb-3">
                                    <label htmlFor="" className="regular-text-regular mb-2">Tanggal Lahir <span>*</span></label>

                                    <input type="date"
                                        {...register("placedate", { required: true })}
                                        className="form-control" placeholder="Enter your first name here" />


                                    <div id="placedate-error" className={`text-danger regular-text-regular mt-1`}>{errors.placedate?.message}</div>


                                </div>
                            </div>

                            <div className="col-md-12">
                                <div className="form-input mb-3">
                                    <label htmlFor="idcard" className="regular-text-regular mb-2">Nomor KTP <span>*</span></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Masukkan No KTP"
                                        {...register("idcard", { required: true })}
                                    />
                                    <div id="idcard-error" className={`text-danger regular-text-regular mt-1`}>{errors.idcard?.message}</div>
                                </div>
                            </div>


                            <div className="col-md-6">
                                <div className="form-input mb-3">
                                    <label htmlFor="mobilephone" className="regular-text-regular mb-2">Nomor Handphone <span>*</span></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Masukkan Nomor HP"
                                        {...register("mobilephone", { required: true })}
                                    />
                                    <div id="mobilephone-error" className={`text-danger regular-text-regular mt-1`}>{errors.mobilephone?.message}</div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-input mb-3">
                                    <label htmlFor="email" className="regular-text-regular mb-2">Email <span>*</span></label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="Masukkan Email Aktif "
                                        {...register("email", { required: true })}
                                    />
                                    <div id="email-error" className={`text-danger regular-text-regular mt-1`}>{errors.email?.message}</div>
                                </div>
                            </div>


                            <div className="form-input mb-3">
                                <label htmlFor="province" className="regular-text-regular mb-2">Provinsi <span>*</span></label>
                                <select
                                    {...register("province", { required: true })}
                                    className="form-select" aria-label="Default select example" onChange={handleProvinceChange} value={selectedProvince}

                                >
                                    <option value="" disabled={!selectedProvince}>Silakan Pilih Provinsi</option>
                                    {provinces.map((province) => (
                                        <option key={province.id} value={province.id.toString()}>{province.text}</option>
                                    ))}

                                </select>
                                <div id="province-error" className={`text-danger regular-text-regular mt-1`}>{errors.province?.message}</div>
                            </div>



                            <div className="col-md-6">

                                <div className="form-input mb-3">
                                    <label htmlFor="city" className="regular-text-regular mb-2">Kota <span>*</span></label>
                                    <select
                                        {...register("city", { required: true })}
                                        className="form-select" aria-label="Default select example" onChange={handleCityChange} value={selectedCity}
                                        disabled={!selectedProvince}
                                    >
                                        <option value="" disabled={!selectedCity} selected>Silakan Pilih Kota / Kabupaten</option>
                                        {cities.map((city) => (
                                            <option key={city.id} value={city.id.toString()}>{city.text}</option>
                                        ))}
                                    </select>
                                    <div id="city-error" className={`text-danger regular-text-regular mt-1`}>{errors.city?.message}</div>
                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-input mb-3">
                                    <label htmlFor="district" className="regular-text-regular mb-2">Kecamatan <span>*</span></label>
                                    <select
                                        {...register("district", { required: true })}
                                        className="form-select" aria-label="Default select example" onChange={handleDistrictChange} value={selectedDistrict}
                                        disabled={!selectedCity}
                                    >
                                        <option value="" disabled={!selectedDistrict} selected>Silakan Pilih Kecamatan</option>
                                        {districts.map((district) => (
                                            <option key={district.id} value={district.id.toString()}>{district.text}</option>
                                        ))}
                                    </select>
                                    <div id="district-error" className={`text-danger regular-text-regular mt-1`}>{errors.district?.message}</div>
                                </div>
                            </div>

                            <div className="col-md-6">

                                <div className="form-input mb-3">
                                    <label htmlFor="village" className="regular-text-regular mb-2">Kelurahan <span>*</span></label>
                                    <select
                                        {...register("village", { required: true })}
                                        className="form-select" aria-label="Default select example"
                                        onChange={handleVillageChange} value={selectedVillages}
                                        disabled={!selectedDistrict}
                                    >
                                        <option value="" disabled={!selectedVillages} selected>Silakan Pilih Kelurahan</option>
                                        {villages.map((village) => (
                                            <option key={village.id} value={village.id.toString()}>{village.text}</option>
                                        ))}
                                    </select>
                                    <div id="village-error" className={`text-danger regular-text-regular mt-1`}>{errors.village?.message}</div>
                                </div>
                            </div>

                            <div className="col-md-6">

                                <div className="form-input mb-3">
                                    <label htmlFor="zipcode" className="regular-text-regular mb-2">Kode Pos <span>*</span></label>
                                    <select
                                        {...register("zipcode", { required: true })}
                                        className="form-select" aria-label="Default select example"
                                        onChange={handleZipCodeChange} value={selectedZipcodes}
                                        disabled={!selectedVillages}>
                                        <option value="" disabled={!selectedVillages} selected>Silakan Pilih Kode Pos</option>
                                        {zipcodes.map((zipcode) => (
                                            <option key={zipcode.id} value={zipcode.id.toString()}>{zipcode.text}</option>
                                        ))}
                                    </select>
                                    <div id="zipcode-error" className={`text-danger regular-text-regular mt-1`}>{errors.zipcode?.message}</div>
                                </div>
                            </div>

                            <div className="form-input mb-3">
                                <label htmlFor="" className="regular-text-regular mb-2">Alamat Lengkap (Surat Menyurat) <span>*</span></label>
                                <textarea

                                    className="form-control"
                                    placeholder="Masukkan Alamat Lengkap"
                                    {...register("address", { required: true })}
                                />
                                <div id="address-error" className={`text-danger regular-text-regular mt-1`}>{errors.address?.message}</div>
                            </div>

                            <div className="form-input mb-0">
                                <label htmlFor="idcard" className="medium-text-bold mb-2"> AHLI WARIS  </label>
                            </div>

                            <div className="col-md-6">
                                <div className="form-input mb-3">
                                    <label htmlFor="heir" className="regular-text-regular mb-2">Nama Ahli Waris <span>*</span></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Masukkan Nama Ahli Waris "
                                        {...register("heir", { required: true })}
                                    />
                                    <div id="heir-error" className={`text-danger regular-text-regular mt-1`}>{errors.heir?.message}</div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-input mb-3">
                                    <label htmlFor="" className="regular-text-regular mb-2">Hubungan Ahli Waris <span>*</span></label>
                                    <select className="form-select" aria-label="Default select example"
                                        {...register("relationheir", { required: true })}

                                    >
                                        <option selected>Silakan pilih </option>

                                        <option value="husband"> Suami </option>
                                        <option value="wife"> Istri </option>
                                        <option value="son"> Anak Laki-laki </option>
                                        <option value="daughter"> Anak Perempuan </option>

                                    </select>
                                    <div id="relationheir-error" className={`text-danger regular-text-regular mt-1`}>{errors.relationheir?.message}</div>


                                </div>
                            </div>

                            <div className="form-input mb-0">
                                <label htmlFor="idcard" className="medium-text-bold mb-2"> DATA BANK ANDA   </label>
                            </div>

                            <div className="col-md-6">
                                <div className="form-input mb-3">
                                    <label htmlFor="" className="regular-text-regular mb-2">Nama Bank <span>*</span></label>
                                    <select className="form-select" aria-label="Default select example"
                                        {...register("listbank", { required: true })}

                                    >
                                        <option selected>Silakan pilih bank </option>

                                        <option value="bni"> BNI </option>
                                        <option value="bri"> BRI </option>
                                        <option value="bca"> BCA </option>
                                        <option value="bsi"> BSI </option>


                                    </select>
                                    <div id="listbank-error" className={`text-danger regular-text-regular mt-1`}>{errors.listbank?.message}</div>


                                </div>
                            </div>

                            <div className="col-md-6">
                                <div className="form-input mb-3">
                                    <label htmlFor="accountnumber" className="regular-text-regular mb-2">No Rekening <span>*</span></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Masukkan Nomor Rekening "
                                        {...register("accountnumber", { required: true })}
                                    />
                                    <div id="accountnumber-error" className={`text-danger regular-text-regular mt-1`}>{errors.accountnumber?.message}</div>
                                </div>
                            </div>

                            
                        
                                <div className="form-input mb-3">
                                    <label htmlFor="nameaccountnumber" className="regular-text-regular mb-2">Atas Nama <span>*</span></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Nama Lengkap Pemilik Rekening "
                                        {...register("nameaccountnumber", { required: true })}
                                    />
                                    <div id="nameaccountnumber-error" className={`text-danger regular-text-regular mt-1`}>{errors.nameaccountnumber?.message}</div>
                                </div>
                       

                            <div className="form-input mb-0">
                                <label htmlFor="idcard" className="medium-text-bold mb-2"> PILIHAN PROGRAM PEMBAYARAN  </label>
                            </div>

                            <div className="form-input mb-3">
                                <label htmlFor="" className="regular-text-regular mb-2">Program <span>*</span></label>
                                <select className="form-select" aria-label="Default select example"
                                    {...register("tipeprogram", { required: true })}

                                >
                                    <option selected>Pilih Program</option>
                                    {programs.map((program, index) => (
                                        <option key={index} value={program.attributes.tipeprogram}> {program.attributes.tipeprogram} </option>
                                    ))}


                                </select>
                                <div id="tipeprogram-error" className={`text-danger regular-text-regular mt-1`}>{errors.tipeprogram?.message}</div>


                            </div>


                        </div>
                        <div className="form-input mt-5 text-end">
                            <button type="submit" className="btn btn-large btn-primary">DAFTAR SEKARANG & KIRIM</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
