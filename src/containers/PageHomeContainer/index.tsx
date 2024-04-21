import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';
import Link from 'next/link';

const PageHomeContainer = () => {

    return (
        <>

            <div className="top-banner">
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-md-6">
                            <div className="header-title">
                                <h2 className="heading-xl-semi">Pusat Haji Khusus &amp; Umroh  <br /> Terbaik di Indonesia</h2>
                                <img src="/assets/img/bullet-home.svg" alt="" />
                            </div>
                            <p className="heading-small-regular my-4">
                                Rencanakan perjalanan umrah istimewa bersama keluarga, kolega, atau orang-orang terdekat anda.
                                Umrah Lebih Nyaman, Kereta Cepat, Hotel Lebih Dekat,
                                Penyelenggara Tersertifikasi Kemenag RI
                            </p>
                        </div>
                        <div className="col-md-6">
                            <video autoPlay muted loop className="img-video">
                                <source src="/assets/img/video/video-for-startup_blue.mp4" type="video/mp4" />
                            </video>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <h3 className="text-center medium-text-bold mt-5">DIPERCAYA OLEH LEMBAGA KREDIBEL DALAM DAN LUAR NEGERI</h3>
                {/*  Carousel 1    */}
                <div className="slider-logo mt-4 mb-5">
                    <div className="slide-track-logo">
                        <div className="slide-logo img-logo-home"><img src="/assets/img/logo/logo-kerry.png" alt="Image 2" /></div>
                        <div className="slide-logo img-logo-home"><img src="/assets/img/logo/logo-reebons.png" alt="Image 2" /></div>
                        <div className="slide-logo img-logo-home"><img src="/assets/img/logo/logo-goplay.png" alt="Image 2" /></div>
                        <div className="slide-logo img-logo-home"><img src="/assets/img/logo/logo-whil.png" alt="Image 2" /></div>
                        <div className="slide-logo img-logo-home"><img src="/assets/img/logo/logo-medic.png" alt="Image 2" /></div>
                        <div className="slide-logo img-logo-home"><img src="/assets/img/logo/logo-fixington.png" alt="Image 2" /></div>
                        <div className="slide-logo img-logo-home"><img src="/assets/img/logo/logo-kerry.png" alt="Image 2" /></div>
                        <div className="slide-logo img-logo-home"><img src="/assets/img/logo/logo-reebons.png" alt="Image 2" /></div>
                        <div className="slide-logo img-logo-home"><img src="/assets/img/logo/logo-goplay.png" alt="Image 2" /></div>
                        <div className="slide-logo img-logo-home"><img src="/assets/img/logo/logo-whil.png" alt="Image 2" /></div>
                        <div className="slide-logo img-logo-home"><img src="/assets/img/logo/logo-medic.png" alt="Image 2" /></div>
                        <div className="slide-logo img-logo-home"><img src="/assets/img/logo/logo-fixington.png" alt="Image 2" /></div>
                    </div>
                </div>
            </div>
            <div className="section-onboard">
                <div className="container">
                    <h2 className="heading-medium-semi text-center">Mengapa Harus Memilih Kami</h2>
                    <div className="mt-5">
                        <div className="tab-content mt-2">
                            <div id="tab1" className="tab-pane fade show active">
                                <div className="row">
                                    <div className="col-md-6 text-center">
                                        <video autoPlay muted loop className="img-video w-75">
                                            <source src="/assets/img/video/step-7.mp4" type="video/mp4" />
                                        </video>
                                    </div>
                                    <div className="col-md-6">
                                        <div className="container">
                                            <div className="row my-2">
                                                <div className="col-lg-2 text-center"><img src="/assets/img/icon/ic-money-bag.svg" alt="" /></div>
                                                <div className="col-lg-10">
                                                    <h5 className="heading-small-semi">TIKET PESAWAT &amp; HOTEL SUDAH DIBOOKING</h5>
                                                    <p className="regular-text-regular"></p>
                                                </div>
                                            </div>
                                            <div className="row my-2">
                                                <div className="col-lg-2 text-center"><img src="/assets/img/icon/ic-rating.svg" alt="" /></div>
                                                <div className="col-lg-10">
                                                    <h5 className="heading-small-semi">MENGUTAMAKAN KUALITAS PELAYANANAN</h5>
                                                    <p className="regular-text-regular"></p>
                                                </div>
                                            </div>
                                            <div className="row my-2">
                                                <div className="col-lg-2 text-center"><img src="/assets/img/icon/ic-timer.svg" alt="" /></div>
                                                <div className="col-lg-10">
                                                    <h5 className="heading-small-semi">PELAKSANAAN IBADAH UMROH SESUAI SUNNAH</h5>
                                                    <p className="regular-text-regular"></p>
                                                </div>
                                            </div>
                                            <div className="row my-2">
                                                <div className="col-lg-2 text-center"><img src="/assets/img/icon/ic-clock.svg" alt="" /></div>
                                                <div className="col-lg-10">
                                                    <h5 className="heading-small-semi">BERIZIN RESMI KEMENAG</h5>
                                                    <p className="regular-text-regular"></p>
                                                </div>
                                            </div>
                                            <div className="d-flex mt-4">
                                                <Link href='/daftar'>
                                                <button type="button" className="btn btn-medium btn-primary">DAFTAR SEKARANG</button>
                                                </Link>
                                                {/* <button type="button" class="btn btn-medium btn-outline-blue mx-3">Learn more about hiring talent</button> */}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="section-testimonial">
                <div className="container">
                    <h2 className="heading-medium-semi text-center m-0">Kumpulan Testimoni dan Rekomendasi  Biro Travel Dal Tour </h2>
             
                    <Swiper
                        effect={'coverflow'}
                        grabCursor={true}
                        centeredSlides={true}
                        slidesPerView={'auto'}
                        coverflowEffect={{
                            rotate: 50,
                            stretch: 0,
                            depth: 100,
                            modifier: 1,
                            slideShadows: true,
                        }}
                        modules={[EffectCoverflow]}
                        className="mt-4"
                    >
                        <div className="swiper-wrapper">
                            <SwiperSlide className="swiper-slide">
                                <div className="card">
                                    <div className="quote-header">
                                        <div className="header-testimonial">
                                            <img alt='' className="avatar" src="/assets/img/profile-5.png" />
                                            <div className="mx-3">
                                                <p className="medium-text-semi m-0 name">Keluarga Pak Ekhsyan</p>
                                              
                                           
                                            </div>
                                        </div>
                                   
                                    </div>
                                    <div className="quote-container">
                                        <img src="/assets/img/icon/ic-quote.svg" alt="" />
                                        <p className="small-text-regular mx-2">
                                        Alhamdulillah, kami sekeluarga sudah sampai rumah di Yogya, tak lupa saya banyak haturkan terima kasih kepada Dal Tour yang banyak memberikan bimbingan selama di tanah suci serta kepada Ustadz Syuaib, Ustad Zulkifli, Ustad Junaidi, Ust. Rizal, serta seluruh jamaah Umroh Dal Tour yang kekeluargaannya sangat baik tidak bisa   dilupakan. Semoga tahun-tahun berikutnya, kita bisa bersama lagi dengan Biro Dal Tour. Aamiin.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="card">
                                    <div className="quote-header">
                                        <div className="header-testimonial">
                                            <img alt='' className="avatar" src="/assets/img/profile-5.png" />
                                            <div className="mx-3">
                                                <p className="medium-text-semi m-0 name">Keluarga Pak Ahmad Syalabi</p>
                                              
                                           
                                            </div>
                                        </div>
                                   
                                    </div>
                                    <div className="quote-container">
                                        <img src="/assets/img/icon/ic-quote.svg" alt="" />
                                        <p className="small-text-regular mx-2">
                                      Semua berjalan lancar Barakallah. Terimakasih untuk semua keluarga besar Dal Tour, juga untuk semua keluarga besar peserta ibadah Umroh. Jazakallah Khairan.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="card">
                                    <div className="quote-header">
                                        <div className="header-testimonial">
                                            <img alt='' className="avatar" src="/assets/img/profile-5.png" />
                                            <div className="mx-3">
                                                <p className="medium-text-semi m-0 name">Keluarga Pak Ekhsyan</p>
                                              
                                           
                                            </div>
                                        </div>
                                   
                                    </div>
                                    <div className="quote-container">
                                        <img src="/assets/img/icon/ic-quote.svg" alt="" />
                                        <p className="small-text-regular mx-2">
                                        Alhamdulillah, kami sekeluarga sudah sampai rumah di Yogya, tak lupa saya banyak haturkan terima kasih kepada Dal Tour yang banyak memberikan bimbingan selama di tanah suci serta kepada Ustadz Syuaib, Ustad Zulkifli, Ustad Junaidi, Ust. Rizal, serta seluruh jamaah Umroh Dal Tour yang kekeluargaannya sangat baik tidak bisa   dilupakan. Semoga tahun-tahun berikutnya, kita bisa bersama lagi dengan Biro Dal Tour. Aamiin.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                        

                        </div>
                    </Swiper>
                </div>
            </div>


        </>
    )
}

export default PageHomeContainer