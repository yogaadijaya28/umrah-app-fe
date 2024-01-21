import React from 'react'

export default function FooterComponent() {

  return (
 <>
 <footer className=" pt-5 ">
  <div className="container">
    <div className="line-footer" />
    <div className="row">
      <div className="col-md-12"><small><strong>PT Dwi Amanah Lestari</strong>  berdiri sejak tahun 2017 dengan memberikan pelayanan ibadah umroh sesuai dengan tuntunan sunnah dan Al Quran
          Mutiara Sunnah mengantongi izin resmi umroh dari Kementrian Agama Republik Indonesia, Nomor U. 193 Tahun 2021. Dengan dipimpin oleh Bapak Andi Antoni sebagai Direktur Utama berusaha melayani jamaah dengan mengutamakan kualitas</small></div>
    </div>
    <div className="line-footer" />
    <div className="row">
      <div className="col-3 p-3">
        <img src="/assets/img/logo-dal.png" style={{width: '5rem !important'}} alt="" />
        <p className="mt-4"><small>
            Jln. Soekarno Hatta No.104
            <br />
            Bandung, Indonesia,
            40223
            <br />
            P : +62226034882</small>
        </p>
      </div>
      <div className="col p-3">
        <p className="regular-text-bold mb-4">Popular</p>
        <ul className="regular-text-regular">
          <li className="mt-1">Paket Umroh</li>
          <li className="mt-1">Haji Furoda</li>
          <li className="mt-1">Wisata Islami</li>
        </ul>
      </div>
      <div className="col p-3">
        <p className="regular-text-bold mb-4">About</p>
        <ul className="regular-text-regular">
          <li className="mt-1">Profil Kami</li>
          <li className="mt-1">Kontak Kami</li>
          <li className="mt-1">Artikel</li>
        </ul>
      </div>
      <div className="col p-3">
        <p className="regular-text-bold mb-4">Social</p>
        <div>
          <img className="mx-2" src="/assets/img/icon/ic-facebook.svg" alt="" />
          <img className="mx-2" src="/assets/img/icon/ic-linkedin.svg" alt="" />
          <img className="mx-2" src="/assets/img/icon/ic-instagram.svg" alt="" />
        </div>
      </div>
    </div>
    <div className="line-footer" />
    <div className="row justify-content-between">
      <div className="col-md-6">
       
        <p><small>© 2023 PT. Dwi Amanah Lestari</small></p>
      </div>
      <div className="col-md-6 text-end">
       
      </div>
    </div>
  </div>
</footer>

 </>
  )
}
