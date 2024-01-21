// index.tsx

import { useForm } from "react-hook-form";
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { usePostClient } from "@/api/member/query";
import { postClientParams } from "@/api/member/types";
import { useState } from "react";
import { toast } from "react-toastify";

export default function PageDaftarContainer() {
    const [postClient, setPostClient] = useState<postClientParams>({
        firstname: '',
        lastname: '',
    });

    const PostClientController = usePostClient();

    const validationSchema = Yup.object().shape({
        firstname: Yup.string().required('Nama Depan Wajib Diisi'),
        lastname: Yup.string().required('Nama Belakang Wajib Diisi'),
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

            const payload: postClientParams = {
                ...postClient,
                ...data,
            };

            PostClientController.mutate(payload);
            // Formulir berhasil terkirim
            toast.success('Formulir berhasil terkirim');

            // Mengosongkan formulir
            reset();
        } catch (error) {
            // Formulir gagal terkirim
            toast.error('Formulir gagal terkirim');
        }
    });

    return (
        <>
            <div className="contact-us">
                <img src="/assets/img/bg-contact.png" className="radial" alt="" />
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
                            <div className="col-md-6">
                                <div className="form-input mb-3">
                                    <label htmlFor="" className="regular-text-regular mb-2">Nama Depan <span>*</span></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Masukkan nama depan"
                                        {...register("firstname", { required: true })}
                                    />
                                    <div id="firstname-error" className={`text-danger regular-text-regular mt-1`}>{errors.firstname?.message}</div>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <div className="form-input mb-3">
                                    <label htmlFor="" className="regular-text-regular mb-2">Nama Belakang <span>*</span></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        placeholder="Masukkan nama belakang"
                                        {...register("lastname", { required: true })}
                                    />
                                    <div id="lastname-error" className={`text-danger regular-text-regular mt-1`}>{errors.lastname?.message}</div>
                                </div>
                            </div>
                        </div>
                        <div className="form-input mt-5 text-end">
                            <button type="submit" className="btn btn-large btn-primary">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
}
