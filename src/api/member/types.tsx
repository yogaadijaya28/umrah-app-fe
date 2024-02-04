export interface postClientParams {
    firtsname: string
    lastname: string
    gender: string
    placedate: string
    idcard: string
    province: string
    city: string
    district: string
    village: string
    zipcode: string
    address: string
    // postalcode : string
    // phone: string
    mobilephone: string
    email: string
    heir: string
    relationheir: string
    listbank: string
    accountnumber: string
    nameaccountnumber: string
    tipeprogram: string
}

export interface postClientResponse {
    firtsname: string
    lastname: string
    gender: string
    placedate: string
    idcard: string
    address: string
    city: string
    postalcode: number
    phone: string
    mobilephone: string
    email: string
    heir: string
    relationheir: string
    listbank: string
    accountnumber: string
    nameaccountnumber: string
    program: string
}

export interface Province {
    id: string
    text: string
}

export interface City {
    id: string
    text: string
}

export interface District {
    id: string
    text: string
}

export interface Village {
    id: string
    text: string
}

export interface ZipCode {
    id: string
    text: string
}
