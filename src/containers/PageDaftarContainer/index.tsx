import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { usePostClient } from "@/api/member/query";
import { tesPostClientParams } from "@/api/member/types";
import React, { useEffect, useRef, useState } from "react";
import { UseGetProgram } from "@/api/masterData/province/query";
import { programResponse } from "@/api/masterData/province/types";
import OcrForm from "./OcrForm";
import { toast } from "react-toastify";

export default function PageDaftarContainer() {
    const PostClientController = usePostClient();
    const imgInputRef: any = useRef(null);
    const [processing, setProcessing] = useState<boolean>(false);
    const [postClient, setPostClient] = useState<tesPostClientParams>({
        idcard: '',
        firtsname: '',
        heir: '',
        relationheir: '',
        listbank: '',
        accountnumber: '',
        nameaccountnumber: '',
        tipeprogram: '',
    });

    const GetProgramController = UseGetProgram();
    const [programs, setProgram] = useState<programResponse[]>([]);
    useEffect(() => {
        if (GetProgramController.isSuccess) {
            setProgram(GetProgramController?.data?.data || []);
        }
    }, [GetProgramController.isSuccess, GetProgramController.isFetching]);

    const convert = async (url: string) => {
        try {
            if (url) {
                setProcessing(true);
                const info = await OcrForm(url);
                if (info) {
                    const { nik, nama } = info;
                    setPostClient({
                        idcard: nik,
                        firtsname: nama.split(' ')[0] || '',
                        heir: '',
                        relationheir: '',
                        listbank: '',
                        accountnumber: '',
                        nameaccountnumber: '',
                        tipeprogram: '',
                    });
                }
                setProcessing(false);
            }
        } catch (error) {
            console.error('Error converting image:', error);
        }
    };



    const validationSchema = Yup.object().shape({
        idcard: Yup.string().required('Wajib Diisi'),
        firtsname: Yup.string().required('Wajib Diisi'),
        heir: Yup.string().required('Wajib Diisi'),
        relationheir: Yup.string().required('Wajib Diisi'),
        listbank: Yup.string().required('Wajib Diisi'),
        accountnumber: Yup.string().required('Wajib Diisi'),
        nameaccountnumber: Yup.string().required('Wajib Diisi'),
        tipeprogram: Yup.string().required('Wajib Diisi'),
    });

    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(validationSchema),
    });

    const onSubmit = async (data: any) => {
        console.log("Data yang dikirim:", data);
        try {
            const { firtsname, idcard, heir, relationheir, listbank, accountnumber, nameaccountnumber, tipeprogram } = data;
            const payload: tesPostClientParams = {
                firtsname: firtsname,
              
                idcard: idcard,
                heir: heir,
                relationheir: relationheir,
                listbank: listbank,
                accountnumber: accountnumber,
                nameaccountnumber: nameaccountnumber,
                tipeprogram: tipeprogram,
            };
            await PostClientController.mutateAsync(payload);
            toast.success('Formulir berhasil dikirim');
        } catch (error) {
            console.error('Terjadi kesalahan saat mengirim data:', error);
            toast.error('Terjadi kesalahan saat mengirim data');
        }
    };



    const openBrowser = () => {
        imgInputRef.current?.click();
    };

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
                    <form onSubmit={handleSubmit(onSubmit)} className="m-auto register-form">
                        <div className="row">

                            <div className="form-input mb-3" onClick={openBrowser}>
                                <label className="medium-text-bold ">{processing ? "Processing Image ..." : "Unggah KTP"}</label>
                            </div>
                            <input
                                type="file"
                                required
                                ref={imgInputRef}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                                    if (e.target.files) {
                                        const url: string = URL.createObjectURL(e.target.files[0]);
                                        convert(url);
                                    }
                                }}
                            />

                            <div className="form-input mt-3 ">
                                <label htmlFor="idcard" className="medium-text-bold mb-2">DATA PRIBADI </label>
                            </div>
                            <div className="col-md-6">
                                <div className="form-input mb-3">
                                    <label htmlFor="idcard" className="regular-text-regular mb-2">Nomor Induk Kependudukan (NIK) <span>*</span></label>
                                    <input
                                        type="text"
                                        readOnly
                                        {...register("idcard")}
                                        defaultValue={postClient.idcard}
                                        className="form-control"
                                        style={{ backgroundColor: '#f0f0f0'}}

                                    />
                                </div>

                         



                            </div>
                            <div className="col-md-6">

                                <div className="form-input mb-3">
                                    <label htmlFor="firtsname" className="regular-text-regular mb-2">Nama <span>*</span></label>
                                    <input
                                        type="text"
                                        readOnly
                                        {...register("firtsname")}
                                        defaultValue={postClient.firtsname}
                                        className="form-control"
                                        style={{ backgroundColor: '#f0f0f0'}}
                                    />
                                </div>

                              
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

                            </div>

                        </div>
                        <div className="form-input mt-5 text-end">
                            <button type="submit" className="btn btn-large btn-primary">DAFTAR</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
