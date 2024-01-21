export interface WarrantyOpticLenseResponses {
    noref?: string
    tgltrans?: string
    barcode?: string
    NamaLensa?: string
    NamaLensa_r?: string
    NamaLensa_l?: string
    sph?: string
    sph_r?: string
    sph_l?: string
    cyl?: string
    cyl_r?: string
    cyl_l?: string
    axis?: string
    axis_r?: string
    axis_l?: string
    add?: string
    add_r?: string
    add_l?: string
    pd?: string
    NamaFrame?: string
    namaCust?: string
    code?: string
    term_and_condition?: Array<term_and_conditionArray>

}

export interface getWarrantyPABDResponses {

    code?: string
    name?: string
    jenis?: string
    no_so?: string
    tgl_so?: string
    material_r?: string
    model_r?: string
    noseri_r?: string
    tgl_exp_r?: string
    material_l?: string
    model_l?: string
    noseri_l?: string
    tgl_exp_l?: string
    tgl_dikeluarkan?: string
    keterangan?: string
    term_and_condition?: Array<term_and_conditionArray>
}

export interface term_and_conditionArray {
    label?: string
    childs?: Array<childsArray>
}

export interface childsArray {
    label?: string
}