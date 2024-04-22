import Link from 'next/link'
import React from 'react'

export default function MenuComponent() {

    return (
        <>
            <header className="sticky-top bg-body header">
                <nav className="navbar navbar-expand-lg border-bottom bg-body">
                    <div className="container-fluid">
                        <Link className="navbar-brand" href="/">
                            <img src="/assets/img/logo-dal.png" style={{ width: '4rem !important' }} alt="" />
                        </Link>
                        <button type="button" className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
                            <span className="navbar-toggler-icon" />
                            <i className="fa-solid fa-bars" />
                        </button>
                        <div className="collapse navbar-collapse" id="navbarCollapse">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item"><Link className="nav-link medium-text-semi uppercase-text" href='/umrah'>Umroh</Link></li>
                                <li className="nav-item"><Link className="nav-link medium-text-semi uppercase-text" href='/haji-furoda'>Haji Furoda</Link></li>
                                <li className="nav-item"><Link className="nav-link medium-text-semi uppercase-text" href='/artikel'>Artikel</Link></li>
                            </ul>
                            <form className="d-flex justify-content-between search-tech">
                                <div style={{ position: 'relative' }}>
                                    <input className="form-control me-2 border" type="search" placeholder="Cari . . ." aria-label="Search" />
                                    <img src="/assets/img/icon/ic-search-2.svg" className="seach-nav" alt="" />
                                </div>
                            </form>
                            <Link href='/daftar'>
                            <button type="button" className="btn btn-medium btn-primary mx-2 py-1 uppercase-text">

                                Daftar Sekarang</button>
                                </Link>
                        </div>
                    </div>
                </nav>
           
            </header>

        </>
    )
}
