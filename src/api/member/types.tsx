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


//edit here 21 04 2024
export interface Root {
    data: any
    error: Error
  }
  
  export interface Error {
    status: number
    name: string
    message: string
    details: Details
  }
  
  export interface Details {
    errors: Error2[]
  }
  
  export interface Error2 {
    path: string[]
    message: string
    name: string
  }

  export interface Root {
    data1: Data
    meta: Meta
  }
  
  export interface Data {
    id: number
    attributes: Attributes
  }
  
  export interface Attributes {
    firtsname: string
    lastname: string
    gender: string
    placedate: string
    idcard: string
    address: string
    phone: any
    mobilephone: string
    email: string
    heir: string
    relationheir: string
    listbank: string
    accountnumber: string
    nameaccountnumber: string
    createdAt: string
    updatedAt: string
    publishedAt: string
    province: string
    city: string
    district: string
    village: string
    zipcode: string
    tipeprogram: string
  }
  
  export interface Meta {}
  


  //tes ocr
  export interface tesPostClientParams {
    firtsname: string
    idcard: string
    heir: string
    relationheir: string
    listbank: string
    accountnumber: string
    nameaccountnumber: string
    tipeprogram: string

  }
 