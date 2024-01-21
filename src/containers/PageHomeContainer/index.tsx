import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow } from 'swiper/modules';

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
                                                    <p className="regular-text-regular">Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem, nam!</p>
                                                </div>
                                            </div>
                                            <div className="row my-2">
                                                <div className="col-lg-2 text-center"><img src="/assets/img/icon/ic-rating.svg" alt="" /></div>
                                                <div className="col-lg-10">
                                                    <h5 className="heading-small-semi">MENGUTAMAKAN KUALITAS PELAYANANAN</h5>
                                                    <p className="regular-text-regular">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, recusandae qui!</p>
                                                </div>
                                            </div>
                                            <div className="row my-2">
                                                <div className="col-lg-2 text-center"><img src="/assets/img/icon/ic-timer.svg" alt="" /></div>
                                                <div className="col-lg-10">
                                                    <h5 className="heading-small-semi">PELAKSANAAN IBADAH UMROH SESUAI SUNNAH</h5>
                                                    <p className="regular-text-regular">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt, ipsa!</p>
                                                </div>
                                            </div>
                                            <div className="row my-2">
                                                <div className="col-lg-2 text-center"><img src="/assets/img/icon/ic-clock.svg" alt="" /></div>
                                                <div className="col-lg-10">
                                                    <h5 className="heading-small-semi">BERIZIN RESMI KEMENAG</h5>
                                                    <p className="regular-text-regular">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, consequatur ipsam!</p>
                                                </div>
                                            </div>
                                            <div className="d-flex mt-4">
                                                <a href='/daftar'>
                                                <button type="button" className="btn btn-medium btn-primary">DAFTAR SEKARANG</button>
                                                </a>
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
                    <h2 className="heading-medium-semi text-center m-0">Let’s hear what Client’s talk about our Talents</h2>
                    <p className="large-text-regular text-center mt-4">Discover What Others Are Saying About Our Talented Professionals</p>
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
                                            <img className="avatar" src="/assets/img/profile-5.png" />
                                            <div className="mx-3">
                                                <p className="medium-text-semi m-0 name">Justin Lee</p>
                                                <p className="small-text-regular m-0 text-left">CEO Point-Star.net</p>
                                                <div>
                                                    <img src="/assets/img/icon/start-fill.svg" alt="" />
                                                    <img src="/assets/img/icon/start-fill.svg" alt="" />
                                                    <img src="/assets/img/icon/start-fill.svg" alt="" />
                                                    <img src="/assets/img/icon/start-fill.svg" alt="" />
                                                    <img src="/assets/img/icon/start-outline.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <img src="/assets/img/icon/ic-pointstrart.png" alt="" />
                                    </div>
                                    <div className="quote-container">
                                        <img src="/assets/img/icon/ic-quote.svg" alt="" />
                                        <p className="small-text-regular mx-2">
                                            a [The CEO] is a sterling entrepreneur who has successfully built one of the best software development teams around. His knowledge and expertise in web-based software development is top-notch having gained experience from Silicon Valley. With his personal and hands-on style of working with his team, he has put together a highly competent team that is able to deliver high-quality work on-time and within budget.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="card">
                                    <div className="quote-header">
                                        <div className="header-testimonial">
                                            <img className="avatar" src="/assets/img/profile-5.png" />
                                            <div className="mx-3">
                                                <p className="medium-text-semi m-0 name">Justin Lee</p>
                                                <p className="small-text-regular m-0 text-left">CEO Point-Star.net</p>
                                                <div>
                                                    <img src="/assets/img/icon/start-fill.svg" alt="" />
                                                    <img src="/assets/img/icon/start-fill.svg" alt="" />
                                                    <img src="/assets/img/icon/start-fill.svg" alt="" />
                                                    <img src="/assets/img/icon/start-fill.svg" alt="" />
                                                    <img src="/assets/img/icon/start-outline.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <img src="/assets/img/icon/ic-pointstrart.png" alt="" />
                                    </div>
                                    <div className="quote-container">
                                        <img src="/assets/img/icon/ic-quote.svg" alt="" />
                                        <p className="small-text-regular mx-2">
                                            a [The CEO] is a sterling entrepreneur who has successfully built one of the best software development teams around. His knowledge and expertise in web-based software development is top-notch having gained experience from Silicon Valley. With his personal and hands-on style of working with his team, he has put together a highly competent team that is able to deliver high-quality work on-time and within budget.
                                        </p>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="swiper-slide">
                                <div className="card">
                                    <div className="quote-header">
                                        <div className="header-testimonial">
                                            <img className="avatar" src="/assets/img/profile-5.png" />
                                            <div className="mx-3">
                                                <p className="medium-text-semi m-0 name">Justin Lee</p>
                                                <p className="small-text-regular m-0 text-left">CEO Point-Star.net</p>
                                                <div>
                                                    <img src="/assets/img/icon/start-fill.svg" alt="" />
                                                    <img src="/assets/img/icon/start-fill.svg" alt="" />
                                                    <img src="/assets/img/icon/start-fill.svg" alt="" />
                                                    <img src="/assets/img/icon/start-fill.svg" alt="" />
                                                    <img src="/assets/img/icon/start-outline.svg" alt="" />
                                                </div>
                                            </div>
                                        </div>
                                        <img src="/assets/img/icon/ic-pointstrart.png" alt="" />
                                    </div>
                                    <div className="quote-container">
                                        <img src="/assets/img/icon/ic-quote.svg" alt="" />
                                        <p className="small-text-regular mx-2">
                                            a [The CEO] is a sterling entrepreneur who has successfully built one of the best software development teams around. His knowledge and expertise in web-based software development is top-notch having gained experience from Silicon Valley. With his personal and hands-on style of working with his team, he has put together a highly competent team that is able to deliver high-quality work on-time and within budget.
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